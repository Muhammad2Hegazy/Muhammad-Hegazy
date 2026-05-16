export function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-12 text-center dark:border-slate-800">
      <p className="text-slate-500 dark:text-slate-500">
        (c) {new Date().getFullYear()} Muhammad Hegazy. Crafted with <span className="text-cyan-400">React</span> and{' '}
        <span className="text-cyan-400">Tailwind CSS</span>
      </p>
    </footer>
  );
}
