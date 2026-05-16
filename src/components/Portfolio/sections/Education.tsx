import { GraduationCap } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';

export function Education() {
  return (
    <section id="education" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Education</SectionTitle>

        <div className="grid gap-8 md:grid-cols-2">
          <GlassCard className="p-8 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="flex items-start gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-bold text-cyan-400">MTI University</h3>
                <p className="mb-2 text-xl text-slate-700 dark:text-slate-300">BSc in Computers & AI</p>
                <p className="font-mono text-sm text-slate-500 dark:text-slate-500">Oct 2021 - Jun 2025</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
