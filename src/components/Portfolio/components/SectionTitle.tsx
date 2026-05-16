import type { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
  centered?: boolean;
};

export function SectionTitle({ children, centered = false }: SectionTitleProps) {
  return (
    <div className={`mb-12 flex items-center gap-4 ${centered ? 'justify-center' : ''}`}>
      <div className="h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
      <h2 className="text-4xl font-bold tracking-normal text-slate-950 md:text-5xl dark:text-slate-50">{children}</h2>
      {centered && <div className="h-1 w-12 shrink-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />}
    </div>
  );
}
