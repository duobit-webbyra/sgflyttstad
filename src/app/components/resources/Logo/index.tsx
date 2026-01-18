import { Link } from '@/app/components/essentials/Link'
import Image from 'next/image'

interface Props {
  backToHome?: boolean
}

export default function Logo({ backToHome }: Props) {
  return (
    <div className="relative w-[192px] h-[192px] shrink-0">
      <Image
        src="/logo/logo.png"
        alt="SG Flytt & Städ"
        fill
        priority
        sizes="192px"
        className="object-contain"
      />
      {backToHome && <Link className="absolute left-0 top-0 h-full w-full" href="/" />}
    </div>
  )
}
