"use client";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import type { ProjectData } from "../ProjectModal";
import { projects } from "@/data/projects";

interface WorksProps {
  onSelect: (project: ProjectData) => void;
}

const CATEGORY_KO: Record<string, string> = {
  Flutter: "매장 관리",
  Android: "자동장부 · 결제",
  FinTech: "핀테크 · 결제",
  Social: "소셜 · 매칭",
  SNS: "소셜 · 매칭",
  Reward: "리워드 광고",
};

function WorkCategory({ title, items, onSelect, withBottomMargin }: { title: string; items: ProjectData[]; onSelect: (p: ProjectData) => void; withBottomMargin?: boolean }) {
  return (
    <>
      <Reveal>
        <h3 className="text-accent text-sm font-semibold uppercase tracking-[3px] mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-accent/30" />{title}
        </h3>
      </Reveal>
      <div className={`grid md:grid-cols-2 gap-x-16 gap-y-0 ${withBottomMargin ? "mb-16" : ""}`}>
        {items.map((w, i) => (
          <Reveal key={w.title} delay={i * 60}>
            <div className="group flex gap-5 py-6 border-b border-border last:border-b-0 cursor-pointer" onClick={() => onSelect(w)}>
              <img src={w.img} alt={w.title} className="w-12 h-12 rounded-xl object-cover shrink-0 group-hover:scale-105 transition-transform" loading="lazy" />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h4 className="text-white text-lg font-semibold group-hover:text-accent transition-colors truncate">{w.title}</h4>
                  <span className="text-text-3 text-xs shrink-0">{w.period}</span>
                </div>
                <p className="text-accent/70 text-xs font-medium tracking-wide">{CATEGORY_KO[w.cat] || w.cat}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

export default function Works({ onSelect }: WorksProps) {
  const android = projects.filter((p) => p.cat !== "Flutter");
  const flutter = projects.filter((p) => p.cat === "Flutter");

  return (
    <section id="works" className="py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionHeader tag="Portfolio" title="프로젝트" />
        <WorkCategory title="Android" items={android} onSelect={onSelect} withBottomMargin />
        <WorkCategory title="Flutter" items={flutter} onSelect={onSelect} />
      </div>
    </section>
  );
}
