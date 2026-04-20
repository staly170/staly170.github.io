"use client";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import type { ProjectData } from "../ProjectModal";
import { startupProjects } from "@/data/startup";

interface StartupProps {
  onSelect: (project: ProjectData) => void;
}

export default function Startup({ onSelect }: StartupProps) {
  return (
    <section id="startup" className="py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionHeader tag="Startup" title="창업 경험" />

        <div className="grid md:grid-cols-1 gap-0">
          {startupProjects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div
                className="group flex gap-6 py-8 border-b border-border last:border-b-0 cursor-pointer"
                onClick={() => onSelect(p)}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3 mb-1">
                    <h4 className="text-white text-lg font-semibold group-hover:text-accent transition-colors">{p.title}</h4>
                    <span className="text-text-3 text-xs shrink-0">{p.period}</span>
                  </div>
                  <p className="text-accent/70 text-xs font-medium tracking-wide mb-2">{p.role}</p>
                  <p className="text-text-2 text-sm leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] text-accent">CEO</span>
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] text-accent">MAU 5,000</span>
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] text-accent">KIBO 기술보증</span>
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] text-accent">50+ 매장 제휴</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
