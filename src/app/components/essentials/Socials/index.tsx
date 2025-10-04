'use client';

import { Link } from '@/app/components/essentials/Link';
import { BsFacebook, BsInstagram } from 'react-icons/bs';

interface Props {
  links?:
    | {
        facebook?: string | null;
        instagram?: string | null;
      }
    | undefined;
  color?: 'white' | 'black';
}

export default function Socials({ links, color }: Props) {
  if (!links || (!links.facebook && !links.instagram)) return null; // Explicitly check for valid links
  const textColor = color === 'white' ? 'text-white' : 'text-tertiary';
  return (
    <div className='flex items-center gap-4'>
      <span className={textColor}>Följ oss</span>
      <ul className='flex items-center gap-4'>
        {links.facebook && (
          <li className='relative'>
            <Link href={links.facebook}>
              <BsFacebook color={color} />
            </Link>
          </li>
        )}
        {links.instagram && (
          <li className='relative'>
            <Link href={links.instagram}>
              <BsInstagram color={color} />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
