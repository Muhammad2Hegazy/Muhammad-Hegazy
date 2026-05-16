import { GithubIcon, LinkedinIcon } from './SocialIcons';

type SocialLinksProps = {
  boxed?: boolean;
};

export function SocialLinks({ boxed = false }: SocialLinksProps) {
  const linkClass = boxed
    ? 'grid h-16 w-16 place-items-center rounded-xl border border-slate-200 bg-white/80 text-slate-500 shadow-sm transition-all hover:scale-110 hover:border-cyan-500/50 hover:bg-slate-100 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400 dark:shadow-none dark:hover:bg-slate-800 dark:hover:text-cyan-400'
    : 'text-slate-500 transition-all hover:scale-110 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400';

  return (
    <div className="flex justify-center gap-6" aria-label="Social links">
      <a href="https://github.com/Muhammad2Hegazy" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClass}>
        <GithubIcon size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-1-hegazy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className={linkClass}
      >
        <LinkedinIcon size={28} />
      </a>
    </div>
  );
}
