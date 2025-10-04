import Button from '../Button';
import { LeftBoxes, RightBoxes } from '../../icons/CTA';
import Container from '../../essentials/Container';
interface CTAProps {
  white?: boolean;
  title?: string;
  fstButton?: string;
  fstLinkTo?: string;
  sndButton?: string;
  sndLinkTo?: string;
}

export default function CTA({
  white,
  title,
  fstButton,
  fstLinkTo,
  sndButton,
  sndLinkTo,
}: CTAProps) {
  return (
    <div
      className={`relative flex w-full items-center justify-center py-24
        ${white ? 'bg-primary' : 'bg-tertiary-accent'}`}
    >
      <div className='flex items-center justify-center gap-4'>
        <div className='absolute left-5 top-5 w-1/4 sm:w-1/6 lg:static'>
          <LeftBoxes />
        </div>

        <Container className='flex flex-col items-center justify-center gap-6 py-12 md:gap-12 xl:w-1/2'>
          <h1 className='text-center text-6xl text-clamp font-bold leading-tight'>
            {title
              ? title
              : 'Be om en offert och få en kostnadsfri uppskattning'}
          </h1>
          <div className='flex gap-6 md:w-96'>
            <Button variants='primary' href={fstLinkTo ? fstLinkTo : '/offert'}>
              {fstButton ? fstButton : 'Begär offert'}
            </Button>

            <Button
              variants='secondary'
              href={sndLinkTo ? sndLinkTo : '/kontakt'}
            >
              {sndButton ? sndButton : 'Kontakta oss'}
            </Button>
          </div>
        </Container>
        <div className='absolute bottom-5 right-5 w-1/4 sm:w-1/6 lg:static'>
          <RightBoxes />
        </div>
      </div>
    </div>
  );
}
