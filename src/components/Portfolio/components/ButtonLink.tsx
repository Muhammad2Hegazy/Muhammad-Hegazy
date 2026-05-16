import type { ReactNode } from 'react';

type ButtonLinkProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  large?: boolean;
  target?: string;
  rel?: string;
};

export function ButtonLink({ children, href, onClick, variant = 'primary', large = false, target, rel }: ButtonLinkProps) {
  const baseClass =
    'group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105';
  const sizeClass = large ? 'min-h-14 px-8 text-lg' : 'min-h-12 px-6';
  const variantClass =
    variant === 'primary'
      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/40'
      : 'border border-slate-200 bg-white/80 text-slate-900 hover:border-cyan-500/50 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-50 dark:hover:bg-slate-800';
  const className = `${baseClass} ${sizeClass} ${variantClass}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
