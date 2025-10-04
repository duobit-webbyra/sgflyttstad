import { Contact } from '@/payload-types'
import { getCachedGlobal } from '@/app/utils/payload/get-global'

export default async function getContactData() {
  const data = (await getCachedGlobal('contact')()) as Contact

  data.phone = data?.phone?.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1-$2 $3 $4')

  return data
}
