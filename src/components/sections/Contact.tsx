import Reveal from "../Reveal";

interface ContactCardProps {
  href: string;
  target?: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}

function ContactCard({ href, target, label, value, icon }: ContactCardProps) {
  return (
    <a href={href} target={target} className="group flex flex-col items-center text-center p-6 border border-border rounded-xl hover:border-accent/20 transition-all bg-white/[0.01]">
      <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center mb-4 group-hover:border-accent/30 group-hover:bg-accent-dim transition-all">
        {icon}
      </div>
      <p className="text-accent text-xs uppercase tracking-wider mb-2">{label}</p>
      <p className="text-text text-sm font-medium group-hover:text-accent transition-colors whitespace-nowrap">{value}</p>
    </a>
  );
}

const mailIcon = (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-text-3 group-hover:text-accent transition-colors">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const githubIcon = (
  <svg viewBox="0 0 496 512" width="22" height="22" fill="currentColor" className="text-text-3 group-hover:text-accent transition-colors">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
  </svg>
);


export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2/50 via-dark to-dark-2/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.05),transparent_60%)]" />
      <div className="relative max-w-[1200px] mx-auto px-8">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
            <div>
              <p className="text-accent uppercase tracking-[4px] text-xs font-semibold mb-3">Contact</p>
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
                함께 만들어갈<br />
                <span className="text-accent">다음 프로젝트</span>를<br />
                기다리고 있습니다.
              </h2>
              <p className="text-text-2 text-base leading-8">
                새로운 기회, 협업, 기술 논의 등 어떤 주제든 편하게 연락 주세요.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <ContactCard href="mailto:dmlxo62@naver.com" label="Email" value="dmlxo62@naver.com" icon={mailIcon} />
              <ContactCard href="https://github.com/staly170" target="_blank" label="GitHub" value="github.com/staly170" icon={githubIcon} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
