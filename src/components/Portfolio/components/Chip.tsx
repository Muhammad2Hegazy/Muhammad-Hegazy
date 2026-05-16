import type { ReactNode } from 'react';

type ChipProps = {
  children: ReactNode;
  accent?: boolean;
};

export function Chip({ children, accent = false }: ChipProps) {
  return (
    <span
      className={`inline-flex min-h-8 items-center rounded-lg border border-slate-200 bg-white/80 px-3 text-sm dark:border-slate-700 dark:bg-slate-800 ${
        accent ? 'font-mono text-cyan-700 dark:text-cyan-400' : 'text-slate-700 dark:text-slate-300'
      }`}
    >
      {children}
    </span>
  );
}
