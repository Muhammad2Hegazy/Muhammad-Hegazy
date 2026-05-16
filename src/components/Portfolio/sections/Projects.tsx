import { Code, ExternalLink } from 'lucide-react';
import { Chip } from '../components/Chip';
import { GlassCard } from '../components/GlassCard';
import { SectionTitle } from '../components/SectionTitle';
import { projects } from '../data';

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Projects</SectionTitle>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <GlassCard key={project.title} className="group p-8 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
              <div className="mb-4 flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400 transition-colors group-hover:bg-cyan-500/20">
                  <Code size={28} />
                </div>
                <a
                  href={project.link}
                  aria-label={`Open ${project.title}`}
                  className="text-slate-500 transition-colors hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-slate-950 transition-colors group-hover:text-cyan-600 dark:text-slate-50 dark:group-hover:text-cyan-400">
                {project.title}
              </h3>
              <p className="mb-6 leading-relaxed text-slate-600 dark:text-slate-400">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Chip key={tech} accent>
                    {tech}
                  </Chip>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
