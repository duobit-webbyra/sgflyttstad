import Container from '../Container'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6'
import getContactData from '@/app/utils/get-contact-data'
import { Contact } from '@/payload-types'
import Socials from '../Socials'

export default async function InfoHeader() {
  const data = (await getContactData()) as Contact

  return (
    <div className="relative z-10 hidden h-info-header items-center py-4 md:py-0 xl:flex">
      <div className="absolute inset-0 -z-10 w-full bg-tertiary opacity-70" />
      <Container className="flex flex-col justify-between gap-4 md:flex-row md:gap-0">
        <div>
          <Socials color="white" links={data?.links} />
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <a
            className="flex items-center gap-2 text-white underline"
            href={`mailto:${data?.email}`}
          >
            <MdOutlineEmail size={20} /> {data?.email}
          </a>
          <div className="h-full w-[1px] bg-white" />
          <span className="flex items-center gap-2 text-white">
            <FaLocationDot size={20} /> {data?.address.street}, {data?.address.city}{' '}
            {data?.address.zipcode}
          </span>
        </div>
      </Container>
    </div>
  )
}
