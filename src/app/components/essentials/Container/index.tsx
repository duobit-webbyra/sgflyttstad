import React from 'react';
import clsx from 'clsx';

interface Props extends React.ComponentProps<'div'> {
  children: React.ReactNode;
}

export default function Container({ children, className, ...rest }: Props) {
  return (
    <div
      {...rest}
      className={clsx(
        className,
        '!mx-auto !w-full px-5',
        'min-[1440px]:!w-[1440px]',
        'min-[1440px]:!px-0'
      )}
    >
      {children}
    </div>
  );
}
