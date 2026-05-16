import { Briefcase } from 'lucide-react';
import { Chip } from '../components/Chip';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';

export function Experience() {
  return (
    <section id="experience" className="bg-cyan-50/50 px-6 py-32 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Experience</SectionTitle>

        <div className="relative">
          <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:left-8" />

          <div className="ml-8 md:ml-20">
            <article className="group relative">
              <div className="absolute left-[-2.45rem] top-6 h-4 w-4 rounded-full border-4 border-white bg-cyan-500 transition-transform group-hover:scale-150 dark:border-slate-950 md:left-[-3.25rem]" />

              <GlassCard className="p-8 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3 text-cyan-400">
                      <Briefcase size={24} />
                      <h3 className="text-2xl font-bold">Frontend Developer</h3>
                    </div>
                    <p className="text-xl text-slate-700 dark:text-slate-300">T for IT</p>
                  </div>
                  <span className="inline-flex min-h-10 items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 font-mono text-sm text-cyan-400">
                    Aug 2025 - Present
                  </span>
                </div>

                <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                  Developed responsive Admin and Provider portals using React.js and Next.js at Tamawal, improving user
                  experience and performance. Integrated REST APIs, collaborated with backend developers, and built
                  reusable UI components for scalable web applications.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'REST APIs', 'UI Components'].map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </GlassCard>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
