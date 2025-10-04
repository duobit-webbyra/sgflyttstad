import Title, { TitleProps } from '../Title';
import Checkmarks, { CheckmarksProps } from '../Checkmarks';
import { Link } from '@/app/components/essentials/Link';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

interface TextImageProps {
  titleProps: TitleProps;
  checkmarksProps?: CheckmarksProps;
  quotaLink?: boolean;
  imageSrc: string;
  reverse?: boolean;
}

interface TextImageSimpleProps {
  title: string;
  description: string;
  imageSrc: string;
  linkTo: string;
}

export default function TextImage({
  titleProps,
  checkmarksProps,
  quotaLink,
  imageSrc,
  reverse,
}: TextImageProps) {
  return (
    <div
      className={`flex flex-col gap-16 md:gap-36 lg:flex-row lg:items-center ${ reverse &&
        'lg:flex-row-reverse' }`}
    >
      <div className='flex flex-col gap-4 lg:w-1/2'>
        <Title {...titleProps} />
        {checkmarksProps && <Checkmarks {...checkmarksProps} />}

        {quotaLink && (
          <Link
            className='flex w-max items-center gap-3 font-medium italic transition-all duration-200
              hover:gap-6'
            href='/offert'
          >
            Få uppskattning <FaArrowRight />
          </Link>
        )}
      </div>
      <div className='relative h-[320px] md:h-[448px] md:w-[780px]'>
        <Image
          src={imageSrc}
          alt={titleProps.subtitle}
          fill
          sizes='(max-width: 768px) 100vw, 40vw'
          className='rounded-lg object-cover md:rounded-[24px]'
        />
      </div>
    </div>
  );
}

export function TextImageSimple({
  title,
  description,
  imageSrc,
  linkTo,
}: TextImageSimpleProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative h-64'>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes='(max-width: 768px) 100vw, 40vw'
          className='rounded-lg object-cover'
        />
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p>{description}</p>
      </div>
      <Link
        className='flex w-max items-center gap-3 font-medium italic transition-all duration-200
          hover:gap-6'
        href={linkTo}
      >
        Läs mer <FaArrowRight />
      </Link>
    </div>
  );
}
