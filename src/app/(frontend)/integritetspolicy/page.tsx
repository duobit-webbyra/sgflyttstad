import Container from '@/app/components/essentials/Container';
import React from 'react';

export default function Page() {
  return (
    <Container className='flex flex-col gap-8 py-12'>
      <h1 className='text-3xl font-bold'>
        Integritetspolicy - Flytt- och Städtjänster
      </h1>
      <div>
        <h2 className='text-2xl font-semibold'>Syfte:</h2>
        <p>
          Denna policy syftar till att skapa en enkel och tydlig process för
          våra flytt- och städtjänster, där kundens behov och trygghet alltid
          prioriteras.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Flyttjänster</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            <span className='font-semibold'>Kommunikation:</span> Öppen dialog
            för att säkerställa alla detaljer innan flytten. Flexibilitet vid
            ändringar om information ges i god tid.
          </li>
          <li>
            <span className='font-semibold'>Säker hantering:</span> Föremål
            behandlas med största försiktighet och transporteras säkert. Skador
            åtgärdas enligt överenskommelse.
          </li>
          <li>
            <span className='font-semibold'>Försäkring:</span> Försäkring
            erbjuds för att ge trygghet vid skador under flytten.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Städtjänster</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            <span className='font-semibold'>Anpassning:</span> Tjänster anpassas
            efter kundens behov, både regelbundna och omfattande tjänster, som
            flyttstädning.
          </li>
          <li>
            <span className='font-semibold'>Hög kvalitet:</span> Professionellt
            städteam som använder miljövänliga produkter och levererar hög
            kvalitet.
          </li>
          <li>
            <span className='font-semibold'>Ansvar:</span> Åtgärdar snabbt
            eventuella brister efter städning utan extra kostnad.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Flexibilitet och Support</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            <span className='font-semibold'>Ändringar och avbokningar:</span>{' '}
            Tjänster och tider kan justeras vid behov, med förvarning.
          </li>
          <li>
            <span className='font-semibold'>Support:</span> Kundtjänst finns
            tillgänglig för frågor före, under och efter tjänsten.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Betalning</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            <span className='font-semibold'>Pris och betalning:</span> Klara
            priser utan oväntade kostnader. Betalning sker efter utförd tjänst.
          </li>
          <li>
            <span className='font-semibold'>Försenad betalning:</span> Vid
            försenad betalning debiteras förseningsavgift och framtida tjänster
            kan stoppas.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Avslutande ord:</h2>
        <p>
          Vi erbjuder pålitliga, flexibla och professionella flytt- och
          städtjänster för en smidig och bekymmersfri upplevelse.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Miljöansvar:</h2>
        <p>
          Vi följer alla relevanta miljölagar och strävar efter att minska vårt
          koldioxidavtryck.
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Betalningspolicy</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            <span className='font-semibold'>Uppdrag över 20 000 kr:</span>{' '}
            Fullständig betalning krävs innan uppdrag påbörjas.
          </li>
          <li>
            <span className='font-semibold'>Företagskunder:</span> Fakturering
            sker med betalning inom 30 dagar efter godkänd kreditupplysning.
          </li>
          <li>
            <span className='font-semibold'>Försenad betalning:</span>{' '}
            Förseningsavgifter kan tillkomma vid försenad betalning.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Reklamation och Skador</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            <span className='font-semibold'>Skador:</span> Skador ska
            rapporteras omedelbart med skriftlig reklamation.
          </li>
          <li>
            <span className='font-semibold'>Ersättning:</span> Ersättning ges
            efter noggrann bedömning och dokumentation från kunden, och kan även
            ta kontakt med våran försäkringsbolag.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Nyckelhantering</h2>
        <p>
          Vi förbehåller oss rätten att behålla kundens nycklar efter utförandet
          av flytt- och städuppdrag om kunden:
        </p>
        <ul className='flex flex-col gap-2'>
          <li>
            1. Inte godkänner köpet via den tillhandahållna betalnings länken
            inom den avtalade tidsramen.
          </li>
          <li>
            2. Underlåter att följa de betalningsvillkor som fastställts vid
            beställningen.
          </li>
          <li>
            3. Avbryter avtalet utan att ha betalat för de tjänster som redan
            har utförts.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Genomförande</h2>
        <ul className='flex list-inside list-disc flex-col gap-2'>
          <li>
            Nycklarna hålls kvar tills full betalning för de utförda tjänsterna
            har mottagits enligt överenskomna villkor.
          </li>
          <li>
            Kunden informeras skriftligen om att nycklarna hålls kvar och
            orsaken till detta.
          </li>
          <li>
            När betalningen har bekräftats returneras nycklarna omedelbart till
            kunden.
          </li>
        </ul>
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl font-semibold'>Undantag</h2>
        <p>
          Eventuella undantag från denna policy kan endast göras genom en
          skriftlig överenskommelse mellan företaget och kunden.<br></br>
          Denna policy är avsedd att säkerställa att både företag och kund
          hanterar avtalsvillkor och betalning på ett rättvist och transparent
          sätt.
        </p>
      </div>
    </Container>
  );
}
