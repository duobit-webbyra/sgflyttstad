import Image from 'next/image';

interface Props {
  size: number;
}

export default function Icon({ size }: Props) {
  return <Image src='' alt='' width={size} height={size} />;
}
