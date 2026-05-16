import { SectionTitle } from '../components/SectionTitle';

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <SectionTitle>About Me</SectionTitle>

        <div className="space-y-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          <p>
            I'm a passionate Frontend Developer with expertise in building modern, responsive web applications. Currently
            working at{' '}
            <a
              href="https://www.linkedin.com/company/t-for-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-cyan-400 transition-colors hover:text-cyan-500"
            >
              T for IT
            </a>
            , developing the Tamawal platform.
          </p>
          <p>
            I specialize in React.js, Next.js, and TypeScript, creating scalable solutions that prioritize user
            experience and performance. My approach combines technical excellence with creative problem-solving.
          </p>
        </div>
      </div>
    </section>
  );
}
