import { Hero } from '@/app/components/ui/Hero';
import Title from '@/app/components/ui/Title';
import Container from '@/app/components/essentials/Container';
import TruckRoadMap from '@/app/components/resources/TruckRoadMap';
import FAQ from '@/app/components/ui/FAQ';
import CTA from '@/app/components/ui/CTA';
import { RoadSectionStraight } from '@/app/components/resources/SlantedDivider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Om oss | SG Flytt & Städ Mälardalen',
  description:
    'SG Flytt & Städ Mälardalen grundades för att göra flyttningen enkel och säker för våra kunder. Läs om vår vision, våra värderingar och hur vi strävar efter att ge dig bästa möjliga service.',
};

export default function Page() {
  return (
    <>
      <Hero
        title='Om oss'
        description='Vi är en flyttfirma som sätter dina behov först – med noggrann planering, pålitliga tjänster och ett engagerat team som hjälper dig genom hela processen.'
      />
      <section className='relative bg-primary'>
        <Container className='flex items-center justify-center gap-24 pb-32 pt-16 md:pb-64 xl:pb-96'>
          <div className='flex flex-col gap-28 lg:w-2/5'>
            <Title
              subtitle='Flyttning med glädje och trygghet'
              description='Vi startade SG Flytt & Städ för att förenkla flyttprocessen och skapa trygghet för våra kunder. Vår vision är att bli den mest pålitliga och omtyckta flyttfirman i branschen, där varje steg i flytten känns smidigt och enkelt. Genom att ständigt förbättra våra tjänster och lyssna på våra kunders behov strävar vi efter att överträffa förväntningarna och göra varje flytt till en positiv upplevelse.'
            />
            <Title
              subtitle='Vi är här för att skapa positiva flyttupplevelser'
              description='Vi tror på att flytten kan vara en spännande resa, och vårt uppdrag är att göra den så enkel och positiv som möjligt. Med en passion för service och en vilja att hjälpa människor i förändring, engagerar vi oss i varje uppdrag. Vi ser varje flytt som en möjlighet att göra skillnad i våra kunders liv, vilket driver oss att alltid ge vårt bästa och överträffa förväntningarna.'
            />
            <Title
              subtitle='Vägledande principer för varje flytt'
              description='För oss är det avgörande att våra värderingar genomsyrar allt vi gör. Vi bygger vår verksamhet på pålitlighet, ansvar och respekt för våra kunder och deras ägodelar. Genom att alltid sätta kunden i fokus, strävar vi efter att erbjuda en trygg och smidig flyttupplevelse. Vi tror på transparent kommunikation och ett nära samarbete med våra kunder för att säkerställa att deras behov tillgodoses och att varje flytt går så smidigt som möjligt.'
            />
            <Title
              subtitle='Vi ser framåt – för att kunna skapa en bättre flyttupplevelse för alla.'
              description='Vår ambition är att kontinuerligt utveckla våra tjänster och växa som företag. Vi investerar i utbildning och teknologi för att alltid ligga i framkant och möta våra kunders förväntningar. Genom att fokusera på hållbarhet och innovation siktar vi på att bli den mest framstående flyttfirman i branschen, där vi inte bara skapar nöjda kunder utan också bidrar positivt till samhället och miljön.'
            />
          </div>
          <div className='hidden justify-center overflow-hidden lg:flex'>
            <TruckRoadMap />
          </div>
        </Container>
        <RoadSectionStraight />
      </section>

      <section className='bg-tertiary-accent'>
        <FAQ />
      </section>
      <section>
        <CTA white></CTA>
      </section>
    </>
  );
}
