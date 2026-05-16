import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { skillGroups, softSkills } from '../data';

export function Skills() {
  return (
    <section id="skills" className="bg-cyan-50/50 px-6 py-32 dark:bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Skills</SectionTitle>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <GlassCard key={group.category} className="p-8">
              <h3 className="mb-6 text-2xl font-bold text-cyan-400">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex min-h-10 items-center rounded-lg border border-slate-200 bg-white/80 px-4 text-sm text-slate-700 transition-all hover:border-cyan-500/50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:text-cyan-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="p-8">
          <h3 className="mb-6 text-2xl font-bold text-cyan-400">Soft Skills</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {softSkills.map((skill) => (
              <div key={skill} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
