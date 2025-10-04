import { HomeHero } from '../components/ui/Hero';
import TextImage from '../components/ui/TextImage';
import Container from '../components/essentials/Container';
import { RoadSectionStraight } from '../components/resources/SlantedDivider';
import CTA from '../components/ui/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professionell Flyttfirma och Städservice | SG Flytt & Städ',
  description:
    ' SG Flytt & Städ Mälardalen är din pålitliga partner för en smidig och säker flytt. Vi erbjuder allt från packning och transport till städning för både privatpersoner och företag. Kontakta oss idag för en gratis offert!',
};

export default function Page() {
  return (
    <>
      <section className='relative'>
        <HomeHero />
        <RoadSectionStraight />
      </section>
      <section className='relative bg-primary'>
        <Container className='py-24'>
          <TextImage
            titleProps={{
              title: 'Uppdrag',
              subtitle: 'Komplett flyttfirma',
              description:
                'Vi sätter alltid kunden i fokus och anpassar våra tjänster efter dina specifika behov. Oavsett om du flyttar runt hörnet eller till en ny stad, är vår ambition att leverera en trygg och effektiv service som överträffar dina förväntningar.',
            }}
            checkmarksProps={{
              checkmarks: [
                'Enkel bokning och snabb service',
                'Lokal och långdistansflytt',
                'Flytt och städ',
              ],
            }}
            quotaLink
            imageSrc='/images/mission.webp'
          />
        </Container>
      </section>
      <section>
        <CTA />
      </section>
    </>
  );
}
