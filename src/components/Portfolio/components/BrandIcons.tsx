type BrandIconProps = {
  size?: number;
  className?: string;
};

export function GithubIcon({ size = 24, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.6-1.2-3.6.2-.9.2-1.8-.1-2.7 0 0-1-.3-3.4 1.2a11.5 11.5 0 0 0-6.2 0C6.7 1.9 5.7 2.2 5.7 2.2c-.3.9-.3 1.8-.1 2.7A5 5 0 0 0 4.4 8.5c0 3.5 3 5.5 6 5.5-.4.5-.7 1.2-.8 2" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ size = 24, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 24, className }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
    >
      <path d="M3 20.5 4.3 16A8.5 8.5 0 1 1 8 19.7Z" />
      <path d="M9.2 8.5c.2-.4.3-.4.6-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c.6 1.1 1.5 2 2.7 2.7l.5-.4c.2-.2.5-.2.7-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .4-.4.6-.6.4-1.3.5-2 .4-3.1-.6-5.6-3-6.2-6.2-.1-.7 0-1.4.4-2Z" />
    </svg>
  );
}
