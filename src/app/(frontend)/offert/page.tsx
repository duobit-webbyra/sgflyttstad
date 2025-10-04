import { QuotaForm } from '@/app/components/forms/QuotaForm';
import Title from '@/app/components/ui/Title';
import Container from '@/app/components/essentials/Container';
import { Hero } from '@/app/components/ui/Hero';
import { TextImageSimple } from '@/app/components/ui/TextImage';
import { RoadSectionStraight } from '@/app/components/resources/SlantedDivider';
import FAQ from '@/app/components/ui/FAQ';
import CTA from '@/app/components/ui/CTA';
import z from 'zod';
import { notFound } from 'next/navigation';
import type { QuotaFormData } from '@/app/components/forms/QuotaForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Begär offert | SG Flytt & Städ Mälardalen',
  description:
    'Få en kostnadsfri offert för flytt eller städning från oss på SG Flytt & Städ Mälardalen. Fyll i vårt formulär så återkommer vi med en prisuppskattning för dina behov',
};

type SearchParams = Record<string, string | string[]> | undefined;

interface Props {
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: Props) {
  const params = await searchParams;
  const quotaQuery = z.object({
    fromAddress: z.string(),
    toAddress: z.string(),
    name: z.string(),
    org: z.string().optional(),
    date: z.string(),
    email: z.string(),
    tel: z.string(),
  });

  if (params && Object.entries(params).length > 0) {
    try {
      quotaQuery.parse(params);
    } catch (error) {
      return notFound();
    }
  }

  return (
    <>
      <Hero
        title='Begär Offert'
        description='Få en kostnadsfri offert anpassad efter dina behov – vi hjälper dig hela vägen från planering till genomförande.'
      />
      <section className='relative bg-primary'>
        <Container className='flex flex-col gap-16 pb-32 pt-16 md:pb-64 xl:pb-96'>
          <div className='flex flex-col gap-16 md:w-1/2'>
            <Title
              title='Offert'
              subtitle='Begär en offert'
              description='Fyll i formuläret nedan för att få en kostnadsfri offert som är anpassad efter dina behov. Vi ser till att återkomma snabbt med en prisuppskattning och information om hur vi kan hjälpa dig på bästa sätt.'
            />
          </div>
          <div className='flex flex-col gap-16 lg:flex-row'>
            <div className='flex-1'>
              <QuotaForm data={params as unknown as QuotaFormData} />
            </div>
            <div className='flex flex-col gap-16 lg:w-2/5'>
              <TextImageSimple
                title='Vilka typer av tjänster erbjuder vi?'
                description='Vi erbjuder ett brett utbud av tjänster för att göra din flytt så
          smidig som möjligt. Oavsett om du behöver hjälp med packning,
          transport, flyttstädning eller magasinering, har vi allt du behöver.'
                imageSrc='/images/services.webp'
                linkTo='/tjanster'
              />
              <TextImageSimple
                title='Vad gör oss till en pålitlig partner för din flytt?'
                description='Vi strävar efter att göra varje flytt till en trygg och positiv upplevelse genom vårt engagemang för service, ansvar och nära samarbete. Med fokus på kundens behov och en vilja att överträffa förväntningarna, är vi en partner du kan lita på för en smidig och enkel flytt.'
                imageSrc='/images/trusty-partner.webp'
                linkTo='/om-oss'
              />
            </div>
          </div>
        </Container>
        <RoadSectionStraight />
      </section>

      <section className='bg-quaternary'>
        <FAQ titleVariant />
      </section>
      <section>
        <CTA
          title='Har du övriga frågor eller funderingar?'
          fstButton='Kontakta oss'
          fstLinkTo='/kontakt'
          sndButton='Se våra tjänster'
          sndLinkTo='/tjanster'
        />
      </section>
    </>
  );
}
