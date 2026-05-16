import { ChevronRight, Mail } from 'lucide-react';
import { ButtonLink } from '../components/ButtonLink';
import { ProfilePhoto } from '../components/ProfilePhoto';
import { SocialLinks } from '../components/SocialLinks';
import type { SectionId } from '../types';

type HeroProps = {
  onNavigate: (sectionId: SectionId) => void;
};

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative grid min-h-screen place-items-center overflow-hidden px-6 py-28 text-center">
      <div className="absolute -left-1/2 -top-1/2 h-full w-full rounded-full bg-gradient-to-br from-cyan-400/20 to-transparent blur-3xl dark:from-cyan-500/10" />
      <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-tl from-purple-400/20 to-transparent blur-3xl dark:from-purple-500/10" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <ProfilePhoto />

        <h1 className="mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-6xl font-black leading-none tracking-normal text-transparent md:text-8xl">
          Muhammad Hegazy
        </h1>

        <p className="mb-8 text-2xl font-light text-slate-600 md:text-3xl dark:text-slate-400">
          Frontend Developer
        </p>

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl dark:text-slate-500">
          Crafting responsive, scalable web applications with React.js & Next.js. Building seamless user experiences
          with modern technologies.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <ButtonLink href="mailto:muhammadhegazy.m@gmail.com">
            <Mail size={20} />
            <span>Get in Touch</span>
          </ButtonLink>
          <ButtonLink variant="secondary" onClick={() => onNavigate('projects')}>
            <span>View Projects</span>
            <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
          </ButtonLink>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}
