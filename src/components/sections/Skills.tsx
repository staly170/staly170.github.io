import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { skillBars, skillCircles } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2/50 via-dark to-dark-2/50" />
      <div className="relative max-w-[1200px] mx-auto px-8">
        <SectionHeader tag="Skills" title="기술 스택" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Circular grid */}
          <Reveal>
            <div className="grid grid-cols-3 gap-3">
              {skillCircles.map((s, i) => (
                <div key={i} className="group relative overflow-hidden flex flex-col items-center justify-center py-7 px-3 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 hover:border-accent/30 transition-all duration-500 cursor-default">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-accent/10 via-transparent to-transparent transition-opacity duration-500" />
                  <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative w-[72px] h-[72px] mb-3">
                    <svg className="w-[72px] h-[72px] -rotate-90" viewBox="0 0 72 72">
                      <defs>
                        <linearGradient id={`grad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--color-accent-2)" />
                          <stop offset="100%" stopColor="var(--color-accent)" />
                        </linearGradient>
                      </defs>
                      <circle cx="36" cy="36" r="30" fill="none" stroke="currentColor" strokeWidth="3" className="text-white/5" />
                      <circle cx="36" cy="36" r="30" fill="none" strokeWidth="3" strokeLinecap="round" stroke={`url(#grad-${i})`} strokeDasharray={`${s.value * 1.885} 188.5`} className="transition-all duration-700 group-hover:drop-shadow-[0_0_6px_rgba(139,92,246,0.6)]" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold leading-none">{s.value}</span>
                      <span className="text-accent/60 text-[9px] font-mono leading-none mt-0.5">%</span>
                    </div>
                  </div>
                  <p className="relative text-text-2 group-hover:text-white text-[11px] text-center leading-4 whitespace-pre-line font-medium tracking-wide transition-colors">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Bar Chart */}
          <Reveal delay={200}>
            <div className="flex flex-col gap-5">
              {skillBars.map((s, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-text text-sm font-medium">{s.name}</span>
                    <span className="text-accent text-xs font-mono">{s.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-3 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-accent/70 to-accent transition-all duration-700" style={{ width: `${s.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
