import clsx from 'clsx';

interface LinkProps extends React.ComponentProps<'a'> {
  className?: string;
}

export function Link({ className, ...props }: LinkProps) {
  return <a className={clsx('link', className)} {...props} />;
}
