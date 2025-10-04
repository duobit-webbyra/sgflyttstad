'use client';
import Title from '../Title';
import Container from '../../essentials/Container';
import { SetStateAction, useState, Dispatch, useCallback } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { JSX } from 'react';

interface FAQProps {
  data: FAQData;
  handleParentOpen: (
    dp: Dispatch<SetStateAction<boolean>>,
    isOpen: boolean
  ) => void;
}

const FAQCard: React.FC<FAQProps> = ({
  data,
  handleParentOpen,
}: FAQProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    handleParentOpen(setIsOpen, isOpen);
  }, [isOpen, handleParentOpen]);

  return (
    <div className='h-max w-full cursor-pointer select-none'>
      <div
        className={`ga flex items-center justify-between rounded-lg border-l-4 border-tertiary
          bg-primary-accent p-4 transition-colors`}
        onClick={() => {
          handleOpen();
        }}
      >
        <p className='font-medium tracking-wide'>{data.question}</p>
        <div>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</div>
      </div>
      <p
        className={`${isOpen ? 'block' : 'hidden'} animate-opacity-fade-in cursor-auto select-text
          px-8 py-4 !text-lg !font-light`}
      >
        {data.answer}
      </p>
    </div>
  );
};

export interface FAQData {
  question: string;
  answer: string;
}

interface FAQTitleProps {
  titleVariant?: boolean;
}

export default function FAQ({ titleVariant }: FAQTitleProps) {
  let closeDispatch: Dispatch<SetStateAction<boolean>> | null = null;

  const faqData: FAQData[] = [
    {
      question: 'Vad behöver jag förbereda innan flyttdagen?',
      answer:
        'För att flytten ska gå så smidigt som möjligt rekommenderar vi att du packar ner dina ägodelar i märkta lådor, rensar ur kyl och frys, och säkerställer att allt är redo för transport. Om du vill kan vi självklart hjälpa till med packningen – bara hör av dig!',
    },
    {
      question: 'Är det möjligt att få en offert för en akut flytt?',
      answer:
        'Självklart! Vi kan snabbt ge dig en offert för en akut flytt baserat på dina specifika behov och tidsramar.',
    },
    {
      question: 'Hur långt i förväg bör jag boka min flytt?',
      answer:
        'Vi rekommenderar att du bokar din flytt så tidigt som möjligt, särskilt under högsäsong. Kontakta oss gärna för rådgivning kring den bästa tidpunkten.',
    },
    {
      question: 'Vad händer om jag behöver ändra datum för flytten?',
      answer:
        'Inga problem! Vi gör vårt bästa för att justera flyttdatumet och anpassa oss efter din nya tidsplan.',
    },
    {
      question: 'Hur beräknar ni kostnaden för flytten?',
      answer:
        'Vi tar hänsyn till faktorer som flyttavstånd, volym av bohag och specifika önskemål för att ge dig en rättvis och tydlig prisbild.',
    },
    {
      question: 'Behöver jag vara på plats under flytten?',
      answer:
        'Det är upp till dig! Om du vill kan vi sköta allt, och du kan följa processen på avstånd.',
    },
    {
      question: 'Kan ni flytta tunga eller ömtåliga föremål?',
      answer:
        'Absolut. Vi har rätt utrustning och erfarenhet för att hantera både tunga och ömtåliga saker på ett säkert sätt.',
    },
    {
      question: 'Hur kan jag betala för mina tjänster?',
      answer:
        'Vi erbjuder flera olika betalningsalternativ för att underlätta för dig. Kontakta oss för mer information.',
    },
    {
      question: 'Vad gör jag om jag har fler frågor?',
      answer:
        'Tveka inte att höra av dig! Vårt team finns här för att besvara alla dina frågor och ge dig all information du behöver.',
    },
  ];

  return (
    <Container className='relative z-50 py-16'>
      <div className='flex h-full w-full flex-col justify-center gap-12'>
        {titleVariant ? (
          <Title
            title='FRÅGOR'
            subtitle='Frågor och svar'
            description='Här har vi samlat några vanliga frågor om våra tjänster. Tveka inte att kontakta oss om du har fler frågor!'
            variant
          />
        ) : (
          <Title
            title='FRÅGOR'
            subtitle='Frågor och svar'
            description='Här har vi samlat några vanliga frågor om våra tjänster. Tveka inte att kontakta oss om du har fler frågor!'
          />
        )}

        <div className='grid w-full gap-2 lg:w-2/3'>
          {faqData.map((item: FAQData, index) => {
            return (
              <FAQCard
                key={index}
                data={item}
                handleParentOpen={(
                  dp: Dispatch<SetStateAction<boolean>>,
                  isOpen: boolean
                ) => {
                  closeDispatch?.(false);
                  dp(!isOpen);
                  closeDispatch = dp;
                }}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
}
