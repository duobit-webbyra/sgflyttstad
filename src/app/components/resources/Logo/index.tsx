import { Link } from '@/app/components/essentials/Link';
import Image from 'next/image';

interface Props {
  backToHome?: boolean;
}

export default function Logo({ backToHome }: Props) {
  return (
    <div className='relative'>
      <Image
        src={'/logo/logo.png'}
        alt='SG Flytt & Städ'
        width={192}
        height={192}
      />
      {backToHome && (
        <Link className='absolute left-0 top-0 h-full w-full' href='/' />
      )}
    </div>
  );
}
