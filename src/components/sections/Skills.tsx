"use client";

import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2/50 via-dark to-dark-2/50" />
      <div className="relative max-w-[1200px] mx-auto px-8">
        <SectionHeader tag="Skills" title="기술 스택" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <Reveal key={gi} delay={gi * 80}>
              <div className="group relative rounded-2xl bg-white/[0.02] border border-white/5 p-5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                   style={{ ["--group-color" as string]: group.color }}>

                {/* Group title with colored accent */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-1.5 h-5 rounded-full" style={{ backgroundColor: group.color }} />
                  <p className="text-white text-xs font-bold uppercase tracking-[3px]">{group.title}</p>
                </div>

                {/* Skill items */}
                <div className="space-y-3.5">
                  {group.items.map((skill, si) => (
                    <div key={si} className="cursor-default">
                      {/* Name + Level */}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-white/70 text-[13px] font-medium">{skill.name}</span>
                        <span className="text-[11px] font-mono font-bold" style={{ color: group.color }}>
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="absolute inset-y-0 left-0 rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${group.color}40, ${group.color})`,
                            boxShadow: `0 0 12px ${group.color}50`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-10 h-[2px] rounded-full opacity-30 group-hover:opacity-60 group-hover:w-14 transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.color})` }}
                />
                <div
                  className="absolute top-0 right-0 h-10 w-[2px] rounded-full opacity-30 group-hover:opacity-60 group-hover:h-14 transition-all duration-300"
                  style={{ background: `linear-gradient(180deg, transparent, ${group.color}00)`, backgroundImage: `linear-gradient(180deg, ${group.color}, transparent)` }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
