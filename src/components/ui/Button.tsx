import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5',
  }[size];

  const variantStyles = {
    primary:
      'bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white shadow-sm hover:shadow active:scale-[0.99] focus-visible:ring-zinc-900 dark:focus-visible:ring-zinc-100',
    secondary:
      'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 focus-visible:ring-zinc-500',
    outline:
      'border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900/60 focus-visible:ring-zinc-500',
    ghost:
      'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 focus-visible:ring-zinc-500',
  }[variant];

  const fullClassName = `${baseStyles} ${sizeStyles} ${variantStyles} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={fullClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={fullClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={fullClassName} {...props}>
      {children}
    </button>
  );
}
