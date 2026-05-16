import { Mail, Phone } from 'lucide-react';
import { WhatsAppIcon } from '../components/BrandIcons';
import { ButtonLink } from '../components/ButtonLink';
import { SectionTitle } from '../components/SectionTitle';
import { SocialLinks } from '../components/SocialLinks';

export function Contact() {
  return (
    <section id="contact" className="bg-cyan-50/50 px-6 py-32 text-center dark:bg-slate-900/30">
      <div className="mx-auto max-w-4xl">
        <SectionTitle centered>Get In Touch</SectionTitle>

        <p className="mx-auto mb-12 max-w-2xl text-xl leading-relaxed text-slate-600 dark:text-slate-400">
          I'm currently available for freelance work and full-time opportunities. If you have a project in mind or just
          want to chat, feel free to reach out!
        </p>

        <div className="mb-12 flex flex-col justify-center gap-6 sm:flex-row sm:flex-wrap">
          <ButtonLink href="mailto:muhammadhegazy.m@gmail.com" large>
            <Mail size={24} />
            <span>Send Email</span>
          </ButtonLink>
          <ButtonLink href="tel:01127650351" variant="secondary" large>
            <Phone size={24} />
            <span>Call Me</span>
          </ButtonLink>
          <ButtonLink
            href="https://wa.me/201127650351"
            variant="secondary"
            large
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon size={24} />
            <span>WhatsApp</span>
          </ButtonLink>
        </div>

        <SocialLinks boxed />
      </div>
    </section>
  );
}
