import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-100/80 px-4 py-10 dark:border-slate-800 dark:bg-slate-900/70 sm:px-6">
      <div className="mx-auto flex max-w-none flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="flex items-center gap-2 text-lg font-medium text-slate-900 dark:text-slate-100">
            <span>Made by</span>
            <span>Muhammad Hegazy</span>
          </p>
          <p className="mt-2 text-base text-slate-500 dark:text-slate-500">
            (c) {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <SocialLinks />
      </div>
    </footer>
  );
}
