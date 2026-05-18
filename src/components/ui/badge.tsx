import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?:
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'purple'
    | 'outline';

  size?: 'sm' | 'md';
}

export function Badge({
  children,
  variant = 'default',
  size = 'md'
}: BadgeProps) {

  const variants = {
    default:
      'bg-muted text-muted-foreground',

    secondary:
      'bg-secondary text-secondary-foreground',

    success:
      'bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400',

    warning:
      'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',

    error:
      'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',

    purple:
      'bg-purple-100 text-purple-700 dark:bg-violet-500/10 dark:text-violet-400',

    outline:
    'border border-border bg-transparent text-foreground',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-1 text-sm'
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-md font-medium
        ${variants[variant]}
        ${sizes[size]}
      `}
    >
      {children}
    </span>
  );
}