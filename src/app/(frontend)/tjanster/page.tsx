import { Hero } from '@/app/components/ui/Hero';
import TextImage from '@/app/components/ui/TextImage';
import Container from '@/app/components/essentials/Container';
import { ServiceGrid } from '@/app/components/ui/Services';
import UniqueServices from '@/app/components/ui/UniqueServices';
import { RoadSectionStraight } from '@/app/components/resources/SlantedDivider';
import CTA from '@/app/components/ui/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Flytt- och Städtjänster | SG Flytt & Städ Mälardalen',
  description:
    'Vi erbjuder ett komplett utbud av flyttjänster och städtjänster för både privatpersoner och företag. Läs mer om våra tjänster och hur vi kan hjälpa dig!',
};

export default function Page() {
  return (
    <>
      <Hero
        title='Våra tjänster'
        description='Vi erbjuder ett brett utbud av tjänster för att göra din flytt trygg och enkel. Oavsett dina krav ser vi till att varje steg blir hanterat med omsorg och expertis.'
      />
      <section className='relative bg-primary'>
        <Container className='flex flex-col gap-40 pb-32 pt-16 md:pb-64 xl:pb-96'>
          <TextImage
            titleProps={{
              title: 'Helhet',
              subtitle: 'Vi gör allt och lite till',
              description:
                'Vi tar hand om hela flytten – från packning och transport till städning och magasinering. Med oss får du en smidig och heltäckande flyttupplevelse där varje steg är noggrant planerat för att ge dig trygghet och enkelhet under hela processen.',
            }}
            checkmarksProps={{
              checkmarks: [
                'Fullservice från start till mål',
                'Trygghet i varje steg',
                'Otroligt simpelt!',
              ],
            }}
            quotaLink
            imageSrc='/images/entirety.webp'
          />
          <TextImage
            titleProps={{
              title: 'Säkerhet',
              subtitle: 'Dina ägodelar i trygga händer',
              description:
                'Vi förstår att dina ägodelar inte bara är saker – de är minnen, värdefulla tillhörigheter och ibland oersättliga föremål. Därför lägger vi stor vikt vid säkerhet i varje steg av flyttprocessen. Med varsam hantering och packning skyddar vi dina ägodelar från alla sorters skador.',
            }}
            checkmarksProps={{
              checkmarks: [
                'Professionellt skydd och säkring av dina saker',
                'Specialutrustning för tunga eller ömtåliga föremål',
                'Anpassad service för olika flyttbehov',
              ],
            }}
            quotaLink
            imageSrc='/images/safety.webp'
            reverse
          />
        </Container>
        <RoadSectionStraight />
      </section>
      <section className='bg-quaternary py-8'>
        <Container className='py-16'>
          <ServiceGrid titleVariant></ServiceGrid>
        </Container>
      </section>
      <section className='bg-tertiary-accent'>
        <UniqueServices />
      </section>
      <section>
        <CTA white></CTA>
      </section>
    </>
  );
}
