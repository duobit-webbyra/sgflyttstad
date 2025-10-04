import BoxRight from '../../icons/Title';

export interface TitleProps {
  title?: string;
  subtitle: string;
  description: string;
  variant?: boolean;
}

export default function Title({
  title,
  subtitle,
  description,
  variant,
}: TitleProps) {
  return (
    <div className='flex flex-col gap-4'>
      {title && (
        <span
          className={`flex items-center gap-2 ${variant && 'text-[#4D2F00]'}`}
        >
          <BoxRight />
          <h1
            className={`font-medium tracking-widest ${variant && 'text-[#4D2F00]'}`}
          >
            {title.toUpperCase()}
          </h1>
        </span>
      )}
      <h2 className={`text-4xl font-bold ${variant && 'text-[#4D2F00]'}`}>
        {subtitle}
      </h2>
      <p className={`whitespace-pre-line ${variant && 'text-[#4D2F00]'}`}>
        {description}
      </p>
    </div>
  );
}
