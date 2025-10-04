import { EmailForm } from '@/app/components/forms/QuotaForm';
import Title from '@/app/components/ui/Title';
import Container from '@/app/components/essentials/Container';
import { Hero } from '@/app/components/ui/Hero';
import { TextImageSimple } from '@/app/components/ui/TextImage';
import { RoadSectionStraight } from '@/app/components/resources/SlantedDivider';
import FAQ from '@/app/components/ui/FAQ';
import CTA from '@/app/components/ui/CTA';
import getContactData from '@/app/utils/get-contact-data';
import { Link } from '@/app/components/essentials/Link';
import { Metadata } from 'next';
import { Contact } from '@payload-types';

export const metadata: Metadata = {
  title: 'Kontakt | SG Flytt & Städ Mälardalen',
  description:
    'Behöver du hjälp med din flytt eller städning? Kontakta oss på SG Flytt & Städ Mälardalen för en smidig och personlig service. Vi finns här för att svara på dina frågor!',
};

export default async function Page() {
  const data = (await getContactData()) as Contact;
  return (
    <>
      <Hero
        title='Kontakta oss'
        description='Har du frågor om våra tjänster eller behöver hjälp att planera din flytt? Vårt team är här för att vägleda dig genom varje steg. Tveka inte att höra av dig!'
      />
      <section className='relative bg-primary'>
        <Container className='flex flex-col gap-16 pb-32 pt-16 md:pb-64 xl:pb-96'>
          <div className='flex flex-col gap-16 md:w-1/2'>
            <Title
              title='KONTAKTFORMULÄR'
              subtitle='Skicka iväg ett meddelande'
              description='Fyll i formuläret nedan för att komma i kontakt med oss. Oavsett om du har frågor om våra tjänster, vill ha en offert, eller behöver hjälp med planeringen, ser vi till att återkoppla så snart vi kan.'
            />
          </div>
          <div className='flex flex-col gap-16 md:flex-row'>
            <div className='md:flex-1'>
              <EmailForm />
            </div>
            <div className='flex flex-col gap-16 md:w-2/5'>
              <TextImageSimple
                title='Vilka typer av tjänster erbjuder vi?'
                description='Vi erbjuder ett brett utbud av tjänster för att göra din flytt så
          smidig som möjligt. Oavsett om du behöver hjälp med packning,
          transport, flyttstädning eller magasinering, har vi allt du behöver.'
                imageSrc='/images/services.webp'
                linkTo='/tjanster'
              />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <Title
              subtitle='Vill du maila eller ringa oss direkt?'
              description='Du är alltid välkommen att kontakta oss direkt för snabb hjälp eller frågor.'
            />
            <span>
              Telefon:{' '}
              <Link
                className='font-semibold underline'
                href={`tel:${data?.phone}`}
              >
                {data?.phone}
              </Link>
            </span>
            <span>
              E-mail:{' '}
              <Link
                className='font-semibold underline'
                href={`mailto:${data?.email}`}
              >
                {data?.email}
              </Link>
            </span>
          </div>
        </Container>
        <RoadSectionStraight />
      </section>
      <section className='bg-quaternary'>
        <FAQ titleVariant />
      </section>
      <section>
        <CTA
          title='Be om en offert och få en kostnadsfri uppskattning'
          fstButton='Begär offert'
          fstLinkTo='/offert'
          sndButton='Se våra tjänster'
          sndLinkTo='/tjanster'
        />
      </section>
    </>
  );
}
