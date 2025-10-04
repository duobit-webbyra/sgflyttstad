import Container from '../../essentials/Container';
import { QuotaShortForm } from '../../forms/QuotaForm';
import Button from '../Button';
import { ServiceGrid } from '../Services';
import SlantedDivider from '../../resources/SlantedDivider';
import { DefaultClouds, HomeClouds } from '../../resources/Clouds';
import getContactData from '@/app/utils/get-contact-data';
import { Contact } from '@payload-types';
import { FaPhone } from 'react-icons/fa6';

// function DefaultHero() {
//   return <></>;
// }

// function HomeHero() {
//   return <></>;
// }

// interface Props {
//   style?: 'default' | 'home';
// }

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <div className='relative'>
      <div
        className='absolute left-0 -z-20 w-full'
        style={{
          top: '-20vh',
          height: 'calc(100% + 30vh)',
          background: `linear-gradient(to bottom,
            #03638D 0%,
            #B0DBEE 30%,
            #DBF3FE 50%,
            #EBEDE3 88%,
            #FAE7C8 100%
          )`,
        }}
      />
      <div className='absolute inset-0 -z-10 flex justify-center overflow-hidden'>
        <DefaultClouds />
      </div>
      <Container className='relative flex gap-16 pb-44 pt-32'>
        <div className='flex flex-col justify-center gap-6'>
          <h1 className='text-[3rem] font-bold leading-snug tracking-tight'>
            {title}
          </h1>
          <p className='font-medium md:w-3/5'>{description}</p>
        </div>
      </Container>
      <div className='absolute bottom-0 h-[100px] w-full overflow-hidden'>
        <SlantedDivider color='var(--primary-color)' />
      </div>
    </div>
  );
}

export async function HomeHero() {
  const data = (await getContactData()) as Contact;
  return (
    <div className='relative'>
      <div
        className='absolute left-0 -z-20 w-full'
        style={{
          top: '-20vh',
          height: 'calc(100% + 40vh)',
          background: `linear-gradient(to bottom,
            #3D738B 0%,
            #85C2DE 11%,
            #DBF3FE 57%,
            #EBEDE3 80%,
            #FAE9CF 100%
          )`,
        }}
      />
      <div className='absolute inset-0 -z-10 flex justify-center overflow-hidden'>
        <HomeClouds />
      </div>
      <Container className='flex flex-col pb-24 md:pb-48 xl:pb-96'>
        <div className='flex flex-col gap-12 py-16 md:py-24 xl:flex-row'>
          <div className='flex flex-col justify-center gap-6'>
            <h1
              className='font-bold leading-snug tracking-tight xl:text-[4rem]'
              style={{
                fontSize: 'clamp(1.5rem, 7.5vw, 4rem)',
              }}
            >
              Trygg och smidig flytt
              <br />{' '}
              <span
                className='italic text-white xl:text-[4rem]'
                style={{
                  fontSize: 'clamp(1.5rem, 7.5vw, 4rem)',
                }}
              >
                - vi tar hand om allt
              </span>
            </h1>
            <p className='text-xl md:w-2/3'>
              Vi hjälper dig med hela flytten, från transport till städning, så
              att du kan slappna av och fokusera på ditt nya hem.
            </p>
            <div className='flex gap-4'>
              <div className='w-max'>
                <Button variants='primary' href='/tjanster'>
                  Våra tjänster
                </Button>
              </div>
              <div className='w-max'>
                <Button variants='secondary' href={`tel:${data?.phone}`}>
                  <FaPhone size={20} />
                  {data?.phone}
                </Button>
              </div>
            </div>
          </div>
          <QuotaShortForm />
        </div>
        <ServiceGrid />
      </Container>
    </div>
  );
}
