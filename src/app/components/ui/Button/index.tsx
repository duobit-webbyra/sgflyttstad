import React from 'react';
import { Link } from '@/app/components/essentials/Link';

interface Props extends Omit<React.ComponentProps<'button'>, 'className'> {
  href?: string;
  variants: 'primary' | 'secondary';
}

const style = {
  primary:
    'px-6 py-3 bg-tertiary rounded-full text-white hover:bg-tertiary-hover',
  secondary: 'px-6 py-3 border-2 border-tertiary rounded-full text-tertiary',
};

export default function Button({
  children,
  href,
  variants = 'primary',
}: Props) {
  return (
    <button
      className={`${style[variants]} relative flex w-full items-center justify-center gap-4
        whitespace-nowrap text-sm font-medium transition-all duration-200`}
    >
      {href && (
        <Link
          className='absolute left-0 top-0 h-full w-full font-medium'
          href={href}
        />
      )}
      {children}
    </button>
  );
}
