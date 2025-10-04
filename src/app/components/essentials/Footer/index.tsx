import Logo from '../../resources/Logo'
import Container from '../Container'
import { Link } from '@/app/components/essentials/Link'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

import type { Contact } from '@/payload-types'
import getContactData from '@/app/utils/get-contact-data'
import Socials from '../Socials'

export default async function Footer() {
  const data = (await getContactData()) as Contact

  if (!data) return null
  return (
    <footer className="bg-primary-accent py-16">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-0">
          <div className="flex flex-col gap-6">
            <Logo />
            <p className="text-sm">Org-nr: 559497-9212</p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">{data?.address?.city?.toUpperCase()}</h1>
            <div>
              <p>{data?.address?.street},</p>
              <p>{data?.address?.zipcode}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">KONTAKTA OSS</h1>
            <span>
              Maila oss för frågor och funderingar: <br />{' '}
              {data?.email && (
                <Link className="underline" href={`mailto:${data.email}`}>
                  {data.email}
                </Link>
              )}
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold">TALA MED OSS</h1>
            {data?.phone && (
              <Link className="underline" href={`tel:${data.phone}`}>
                {data.phone}
              </Link>
            )}
          </div>
          <div className="flex flex-col gap-2 lg:text-right">
            <Link href="/">HEM</Link>
            <Link href="/tjanster">TJÄNSTER</Link>
            <Link href="/om-oss">OM OSS</Link>
            <Link href="/kontakt">KONTAKT</Link>
            <Link href="/offert">FÅ OFFERT</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 lg:flex-row">
          <span>
            Alla rättigheter reserverade <br /> Sida drivs av{' '}
            <Link className="underline" href="https://www.duobit.se/">
              Duobit Webbyrå
            </Link>
          </span>
          <div className="flex items-center gap-4">
            <Link href="/integritetspolicy">Integritetspolicy</Link>
            <Socials color="black" links={data?.links} />
          </div>
        </div>
      </Container>
    </footer>
  )
}
