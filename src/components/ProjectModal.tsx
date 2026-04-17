"use client";

import { useEffect, useState } from "react";

const CATEGORY_KO: Record<string, string> = {
  Flutter: "매장 관리",
  Android: "자동장부 · 결제",
  FinTech: "핀테크 · 결제",
  Social: "소셜 · 데이팅",
  SNS: "소셜 · 데이팅",
  Reward: "리워드 광고",
};

export interface ProjectDetail {
  problem?: string[];
  approach?: string[];
  impact?: string[];
}

export interface ProjectData {
  img: string;
  title: string;
  cat: string;
  color: string;
  period: string;
  role: string;
  desc: string;
  highlights: string[];
  tags: string[];
  screenshots?: string[];
  team?: string;
  store?: string;
  detail?: ProjectDetail;
}

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

function PhoneFrame({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="relative bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl shadow-black/60 border border-white/10"
         style={{ animationDelay: `${delay}ms` }}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-[#1a1a1a] rounded-b-2xl z-20" />
      <div className="relative bg-dark rounded-[28px] overflow-hidden">
        <div className="h-8 flex items-end justify-center pb-1">
          <div className="w-16 h-1 bg-white/20 rounded-full" />
        </div>
        {children}
        <div className="h-5 flex items-center justify-center">
          <div className="w-28 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}

function TabletFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-[#1a1a1a] rounded-[24px] p-3 shadow-2xl shadow-black/60 border border-white/10">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white/10 z-20" />
      <div className="relative bg-dark rounded-[16px] overflow-hidden">
        <div className="h-6" />
        {children}
        <div className="h-5 flex items-center justify-center">
          <div className="w-24 h-1 bg-white/15 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose }: Props) {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
      setCurrentImg(0);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease_both]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <div
        className="relative flex gap-14 items-center animate-[modalIn_0.4s_ease_both]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-dark-3 text-text-2 hover:text-accent flex items-center justify-center text-lg transition-colors z-20"
        >
          &times;
        </button>

        {/* Left Phone - Screenshots */}
        {hasScreenshots && (
          <div className="hidden md:block w-[300px] md:w-[340px] animate-[modalIn_0.4s_ease_0.1s_both]">
            <PhoneFrame>
              <div className="h-[580px] md:h-[640px] flex flex-col">
                {/* Screenshot display */}
                <div className="flex-1 flex items-center justify-center p-4 relative">
                  <img
                    src={project.screenshots![currentImg]}
                    alt={`${project.title} screenshot ${currentImg + 1}`}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>

                {/* Dots navigation */}
                {project.screenshots!.length > 1 && (
                  <div className="flex items-center justify-center gap-3 pb-2">
                    <button
                      onClick={() => setCurrentImg((prev) => (prev - 1 + project.screenshots!.length) % project.screenshots!.length)}
                      className="text-text-3 hover:text-accent transition-colors text-sm"
                    >
                      ‹
                    </button>
                    <div className="flex gap-1.5">
                      {project.screenshots!.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImg(i)}
                          className={`w-2 h-2 rounded-full transition-all ${i === currentImg ? "bg-accent scale-125" : "bg-white/20 hover:bg-white/40"}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setCurrentImg((prev) => (prev + 1) % project.screenshots!.length)}
                      className="text-text-3 hover:text-accent transition-colors text-sm"
                    >
                      ›
                    </button>
                  </div>
                )}
              </div>
            </PhoneFrame>
          </div>
        )}

        {/* Divider */}
        {hasScreenshots && (
          <div className="hidden md:flex flex-col items-center gap-5 px-2 animate-[fadeIn_0.6s_ease_0.4s_both]">
            <div className="w-[2px] h-24 bg-gradient-to-b from-transparent via-accent-2/60 to-accent" />
            <div className="relative flex items-center justify-center">
              <div className="absolute w-14 h-14 rounded-full border-2 border-accent/40 animate-pulse" />
              <div className="absolute w-8 h-8 rounded-full border border-accent/60" />
              <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_24px_rgba(167,139,250,1)]" />
            </div>
            <p className="text-accent text-sm font-bold font-mono tracking-[4px] [writing-mode:vertical-rl] py-3 drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]">PROJECT</p>
            <div className="relative flex items-center justify-center">
              <div className="absolute w-10 h-10 rounded-full border border-accent/40 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-accent-2 shadow-[0_0_20px_rgba(167,139,250,0.9)]" />
            </div>
            <div className="w-[2px] h-24 bg-gradient-to-t from-transparent via-accent-2/60 to-accent" />
          </div>
        )}

        {/* Right Tablet - Project Info */}
        <div className="w-[380px] md:w-[460px] animate-[modalIn_0.4s_ease_0.25s_both]">
          <TabletFrame>
            <div className="h-[580px] md:h-[640px] overflow-y-auto scrollbar-hide">
              {/* Top hero block */}
              <div className={`relative bg-gradient-to-br ${project.color} px-6 py-6`}>
                <div className="absolute inset-0 bg-black/30" />
                <div className="relative flex items-center gap-4 mb-6">
                  <img src={project.img} alt={project.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-white text-2xl font-bold leading-tight truncate">{project.title}</h2>
                  </div>
                </div>

                {/* Description */}
                <div className="relative flex items-center gap-2 mb-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                  <p className="text-white text-[15px] font-semibold tracking-wide">프로젝트 설명</p>
                </div>
                <p className="relative text-white/70 text-xs leading-5 mb-6">{project.desc}</p>

                {/* Info grid */}
                <div className="relative grid grid-cols-2 gap-x-5 gap-y-4 pt-5 border-t border-white/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      <p className="text-white text-[15px] font-semibold tracking-wide">기간</p>
                    </div>
                    <p className="text-white/70 text-xs">{project.period}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <p className="text-white text-[15px] font-semibold tracking-wide">참여 인원</p>
                    </div>
                    <p className="text-white/70 text-xs">{project.team || "-"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                      <p className="text-white text-[15px] font-semibold tracking-wide">스토어</p>
                    </div>
                    <p className="text-white/70 text-xs">{project.store || "-"}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                      <p className="text-white text-[15px] font-semibold tracking-wide">카테고리</p>
                    </div>
                    <p className="text-white/70 text-xs">{CATEGORY_KO[project.cat] || project.cat}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="relative pt-5 mt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/80"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                    <p className="text-white text-[15px] font-semibold tracking-wide">기술 스택</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 6).map((t, i) => (
                      <span key={i} className="text-xs text-white/80 px-2.5 py-1 rounded bg-white/10 border border-white/10">{t}</span>
                    ))}
                    {project.tags.length > 6 && (
                      <span className="text-xs text-white/60 px-2 py-1">+{project.tags.length - 6}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-6 py-6">
                {/* Section title */}
                <div className="flex items-center gap-2.5 mb-6">
                  <span className="w-1 h-5 bg-accent rounded-full" />
                  <h4 className="text-white text-lg font-bold">상세 내용</h4>
                </div>

                {/* Detail sections - Problem / Approach / Impact */}
                {project.detail ? (
                  <div className="space-y-7">
                    {[
                      { label: "핵심 과제", items: project.detail.problem },
                      { label: "전략적 선택", items: project.detail.approach },
                      { label: "비즈니스 임팩트", items: project.detail.impact },
                    ].map((section, idx) =>
                      section.items && section.items.length > 0 ? (
                        <div key={idx}>
                          <div className="flex items-baseline gap-3 mb-3">
                            <span className="text-accent font-mono text-[11px] tracking-[2px]">0{idx + 1}</span>
                            <h5 className="text-white text-base font-bold tracking-tight">{section.label}</h5>
                            <span className="flex-1 h-px bg-border ml-1" />
                          </div>
                          <ol className="space-y-2 pl-5">
                            {section.items.map((t, i) => (
                              <li key={i} className="relative text-text-2 text-[14px] leading-6 before:content-[''] before:absolute before:-left-4 before:top-[11px] before:w-2 before:h-px before:bg-accent/60">
                                {t}
                              </li>
                            ))}
                          </ol>
                        </div>
                      ) : null
                    )}
                  </div>
                ) : (
                  <ol className="space-y-3.5 mb-7">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-accent text-base font-bold shrink-0 leading-7">{i + 1}.</span>
                        <p className="text-text-2 text-[15px] leading-7">{h}</p>
                      </li>
                    ))}
                  </ol>
                )}

              </div>
            </div>
          </TabletFrame>
        </div>
      </div>
    </div>
  );
}
