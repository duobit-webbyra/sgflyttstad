import { JSX } from 'react';
import { FiBox } from 'react-icons/fi';
import { IoSparkles } from 'react-icons/io5';
import { FaVanShuttle } from 'react-icons/fa6';
import { CgNotes } from 'react-icons/cg';
import { FaPeopleCarry, FaTruckLoading } from 'react-icons/fa';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { MdTipsAndUpdates } from 'react-icons/md';
import Title from '../Title';
interface ServiceProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: ServiceProps[] = [
  {
    icon: <FiBox color='white' size={24} />,
    title: 'Packning',
    description:
      'Vi hjälper dig att packa dina ägodelar säkert och effektivt, så att allt är redo för flytten.',
  },
  {
    icon: <IoSparkles color='white' size={24} />,
    title: 'Flyttstädning',
    description:
      'Vår professionella flyttstädning garanterar att ditt gamla hem lämnas skinande rent.',
  },
  {
    icon: <FaVanShuttle color='white' size={24} />,
    title: 'Transport',
    description:
      'Vi erbjuder säker och pålitlig transport av dina möbler och ägodelar, oavsett avstånd.',
  },
  {
    icon: <CgNotes color='white' size={24} />,
    title: 'Planering',
    description:
      'Vi hjälper dig att planera din flytt från start till mål för en smidig och stressfri upplevelse.',
  },
  {
    icon: <FaPeopleCarry color='white' size={24} />,
    title: 'Bärhjälp',
    description:
      'Vårt team hjälper till att bära och hantera alla tunga lyft, både in och ut.',
  },
  {
    icon: <FaTruckLoading color='white' size={24} />,
    title: 'Lastning',
    description:
      'Vi lastar dina ägodelar säkert och effektivt för att maximera plats och minska risken för skador.',
  },
  {
    icon: <RiCustomerServiceFill color='white' size={24} />,
    title: 'Snabbservice',
    description:
      'Behöver du flytta snabbt? Vi erbjuder snabb och flexibel service för akuta flyttbehov.',
  },
  {
    icon: <MdTipsAndUpdates color='white' size={24} />,
    title: 'Konsultation',
    description:
      'Vi erbjuder rådgivning och tips för att hjälpa dig planera och förbereda en problemfri flytt.',
  },
];

interface ServiceCardProps {
  service: ServiceProps;
  variant?: boolean;
}
export function ServiceCard({ service, variant }: ServiceCardProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div
        className={`w-max rounded-full ${variant ? 'bg-[#4D2F00]' : 'bg-tertiary'} p-2`}
      >
        {service.icon}
      </div>
      <h3 className={`text-xl font-medium ${variant && 'text-[#4D2F00]'}`}>
        {service.title}
      </h3>
      <p className={` ${variant && 'text-[#4D2F00]'}`}>{service.description}</p>
    </div>
  );
}
interface ServiceGridProps {
  titleVariant?: boolean;
}

export function ServiceGrid({ titleVariant }: ServiceGridProps) {
  return (
    <div className='flex flex-col gap-12'>
      <div className='max-w-[700px]'>
        {titleVariant ? (
          <Title
            title='Tjänster'
            subtitle='Gör det enkelt att flytta'
            description='Vi erbjuder ett brett utbud av tjänster för att göra din flytt så smidig som möjligt. Oavsett om du behöver hjälp med packning, transport, flyttstädning eller magasinering, har vi allt du behöver.'
            variant
          />
        ) : (
          <Title
            title='Tjänster'
            subtitle='Gör det enkelt att flytta'
            description='Vi erbjuder ett brett utbud av tjänster för att göra din flytt så smidig som möjligt. Oavsett om du behöver hjälp med packning, transport, flyttstädning eller magasinering, har vi allt du behöver.'
          />
        )}
      </div>
      <div className='grid grid-cols-1 gap-x-12 gap-y-20 md:grid-cols-4'>
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} variant={titleVariant} />
        ))}
      </div>
    </div>
  );
}
