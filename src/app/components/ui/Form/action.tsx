'use server'

interface TurnstileResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
}

const { renderToStaticMarkup } = await import('react-dom/server')
import { Resend } from 'resend'
import EmailTemplate, {
  EmailTemplateProps,
  QuotaTemplate,
  QuotaTemplateProps,
} from './email-template'
import getContactData from '@/app/utils/get-contact-data'
import { Contact } from '@/payload-types'
import { ActionState, Payload } from '.'

type PlainObject = { [key: string]: any }

/**
 * Converts FormData to a plain object, properly handling arrays
 */
function convertFormDataToObject(formData: FormData): PlainObject {
  const object: PlainObject = {}

  // Fields that should always be arrays
  const arrayFields = new Set(['helpOptions'])

  // Get all entries and group them by key
  const entries = Array.from(formData.entries())
  const grouped = entries.reduce(
    (acc, [key, value]) => {
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(value)
      return acc
    },
    {} as Record<string, any[]>,
  )

  // Convert entries to final format
  for (const [key, values] of Object.entries(grouped)) {
    const cleanKey = key.replace('[]', '')
    // If field should always be array or has multiple values, keep it as array
    object[cleanKey] = arrayFields.has(cleanKey) || values.length > 1 ? values : values[0]
  }

  return object
}

/**
 * Deep copies an object or FormData while filtering out specific keys
 * @param input - The input object or FormData to be copied and filtered
 * @returns A new object with filtered keys
 */
function deepCopyWithFilter<T extends FormData | PlainObject>(input: T): PlainObject {
  // Convert FormData to plain object if needed
  const obj: PlainObject =
    input instanceof FormData ? convertFormDataToObject(input as FormData) : input

  // Handle null and undefined
  if (obj === null || obj === undefined) {
    return obj
  }

  // Handle primitive types
  if (typeof obj !== 'object') {
    return obj
  }

  // Handle Date objects
  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }

  // Handle Array objects
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopyWithFilter(item))
  }

  // Handle regular objects
  const filtered: PlainObject = {}

  for (const [key, value] of Object.entries(obj)) {
    // Skip 'cf-turnstile-response' and keys starting with $ACTION
    if (key === 'cf-turnstile-response' || key.startsWith('$ACTION')) {
      continue
    }

    filtered[key] = deepCopyWithFilter(value)
  }

  return filtered
}

export async function sendEmail(state: ActionState, formData: FormData): Promise<ActionState> {
  const turnstileToken = formData.get('cf-turnstile-response')
  const verificationResponse = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      body: JSON.stringify({
        response: turnstileToken,
        secret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    },
  )

  const verificationData = (await verificationResponse.json()) as TurnstileResponse

  if (!verificationData.success) {
    console.error('Turnstile verification failed')
    return {
      ...state,
      status: 'error',
      message: 'Något gick fel. Försök igen senare',
    }
  }

  if (!state.type) {
    console.error('Form type is required')
    return {
      ...state,
      status: 'error',
      message: 'Något gick fel, försök igen senare.',
    }
  }

  const contactData = (await getContactData()) as Contact
  if (!contactData?.email) throw new Error('Failed to get contact information')

  const data: Record<string, any> = deepCopyWithFilter(formData)

  if (!process.env.RESEND_API_KEY) {
    return {
      ...state,
      status: 'error',
      message: 'Något gick fel, försök igen senare.',
    }
  }

  let htmlContent: string

  if (state.type === 'quota') {
    htmlContent = renderToStaticMarkup(
      <QuotaTemplate {...(data as unknown as QuotaTemplateProps)} />,
    )
  } else {
    htmlContent = renderToStaticMarkup(
      <EmailTemplate {...(data as unknown as EmailTemplateProps)} />,
    )
  }

  const resend = new Resend(process.env.RESEND_API_KEY!)

  try {
    // Send email to contactData.email
    await resend.emails.send({
      from: 'SG Flytt & Städ <noreply@mail.sgflyttstad.se>',
      to: contactData.email,
      replyTo: data.email,
      subject: 'Ny kundkontakt',
      html: htmlContent,
    })

    // Send confirmation email to data.email
    const confirmationHtml = `
    <p>Hej ${data.name},</p>
    <p>Vi har mottagit ditt meddelande och kommer att kontakta dig inom 1-2 arbetsdagar.</p>
    <p>Med vänliga hälsningar,<br />SG Flytt & Städ Mälardalen</p>
    <br />
    <img src="https://sgflyttstad.se/logo/logo.png" alt="SG Flytt & Städ Logo" style="width: 200px; height: auto;" />
  `

    await resend.emails.send({
      from: 'SG Flytt & Städ <noreply@mail.sgflyttstad.se>',
      to: data.email,
      subject: 'Bekräftelse: Vi har mottagit ditt meddelande',
      html: confirmationHtml,
    })

    return {
      ...state,
      status: 'success',
      message: 'Din förfråga har skickats.',
    }
  } catch (error) {
    console.error(error)
    return {
      ...state,
      status: 'error',
      message: 'Något gick fel, försök igen senare.',
    }
  }
}
