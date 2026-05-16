import type { ReactNode } from 'react';

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white/90 to-cyan-50/70 shadow-sm shadow-slate-200/60 transition-all duration-300 hover:border-cyan-500/40 dark:border-slate-700/50 dark:from-slate-800/50 dark:to-slate-900/50 dark:shadow-none dark:hover:border-cyan-500/30 ${className}`}
    >
      {children}
    </div>
  );
}
