import { SectionDividerRoadStraight } from '../SectionDividerRoad';
import Container from '../../essentials/Container';

interface SlantedDividerProps {
  color?: string;
}

export default function SlantedDivider({ color }: SlantedDividerProps) {
  return (
    <svg
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='none'
      width='100vw'
      height='100px'
    >
      <path
        d='M0 100L100 0V120H0Z'
        fill={color ? color : 'var(--primary-color)'}
      />
    </svg>
  );
}

export function RoadSectionStraight() {
  return (
    <Container className='absolute bottom-0 left-0 right-0 z-20 w-full'>
      <div className='absolute bottom-0 left-0 w-full'>
        <div className='flex items-center justify-center'>
          <SectionDividerRoadStraight />
        </div>
      </div>
    </Container>
  );
}
