"use client";

import { useEffect } from "react";

const CATEGORY_KO: Record<string, string> = {
  Flutter: "매장 관리",
  Android: "자동장부 · 결제",
  FinTech: "핀테크 · 결제",
  Social: "소셜 · 데이팅",
  SNS: "소셜 · 데이팅",
  Reward: "리워드 광고",
  Side: "코인주식 관리",
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
  storeUrl?: string;
  detail?: ProjectDetail;
  duties?: string[];
  devEnv?: string[];
  status?: string;
  projectType?: string;
  achievement?: string;
}

interface Props {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-[fadeIn_0.3s_ease_both]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-[560px] animate-[modalIn_0.4s_ease_both]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-dark-3 text-text-2 hover:text-accent flex items-center justify-center text-lg transition-colors z-20"
        >
          &times;
        </button>

        <div className="rounded-2xl border border-white/8 bg-dark-2 overflow-hidden shadow-2xl shadow-black/60">
          <div className="max-h-[85vh] overflow-y-auto scrollbar-hide">
            {/* Top hero block */}
            <div className={`relative bg-gradient-to-br ${project.color} px-6 py-6`}>
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative flex items-center gap-4 mb-6">
                {project.img ? (
                  <img src={project.img} alt={project.title} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-accent"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h2 className="text-white text-2xl font-bold leading-tight truncate">{project.title}</h2>
                </div>
              </div>

              {/* Description card */}
              <div className="relative rounded-lg bg-white/[0.03] border border-white/5 px-4 py-3 mb-4">
                <p className="text-white/50 text-[10px] uppercase tracking-[2px] mb-1.5">프로젝트 설명</p>
                <p className="relative text-white/80 text-sm leading-6">{project.desc}</p>
              </div>

              {/* Tech stack card */}
              <div className="relative rounded-lg bg-white/[0.03] border border-white/5 px-4 py-3 mb-4">
                <p className="text-white/50 text-[10px] uppercase tracking-[2px] mb-2">기술 스택</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, i) => (
                    <span key={i} className="text-[11px] text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/15">{t}</span>
                  ))}
                </div>
              </div>

              {/* Unified info card */}
              <div className="relative rounded-lg bg-white/[0.03] border border-white/5 px-4 py-4 mb-4">
                {/* Status + Type + Category badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4 pb-3 border-b border-white/5">
                  {project.status && (
                    <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium ${
                      project.status === "운영 중" ? "bg-green-500/10 border border-green-500/30 text-green-400" :
                      project.status === "출시 완료" ? "bg-blue-500/10 border border-blue-500/30 text-blue-400" :
                      "bg-white/5 border border-white/10 text-white/50"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        project.status === "운영 중" ? "bg-green-400 animate-pulse" :
                        project.status === "출시 완료" ? "bg-blue-400" : "bg-white/30"
                      }`} />
                      {project.status}
                    </span>
                  )}
                  {project.projectType && (
                    <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] text-accent">{project.projectType}</span>
                  )}
                  <span className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-[11px] text-accent">{CATEGORY_KO[project.cat] || project.cat}</span>
                </div>

                {/* Period + Team row */}
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60 shrink-0"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    <span className="text-white/70 text-xs">{project.period}</span>
                  </div>
                  {project.team && (
                    <div className="flex items-center gap-2">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent/60 shrink-0"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      <span className="text-white/70 text-xs">{project.team}</span>
                    </div>
                  )}
                </div>

                {/* Duties flow */}
                {project.duties && project.duties.length > 0 && (
                  <div className="flex items-center gap-1 mb-3">
                    {project.duties.map((d, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <span className="px-2 py-0.5 rounded bg-white/5 text-[11px] text-white/70 border border-white/8">{d}</span>
                        {i < project.duties!.length - 1 && (
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent/40 shrink-0"><polyline points="9 18 15 12 9 6"/></svg>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Achievement */}
                {project.achievement && (
                  <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent/8 border border-accent/15 mb-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent shrink-0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                    <p className="text-white/90 text-xs font-medium">{project.achievement}</p>
                  </div>
                )}

                {/* Store link */}
                {project.storeUrl && (
                  <a href={project.storeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-accent text-[11px] hover:underline">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Google Play에서 보기
                  </a>
                )}
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
        </div>
      </div>
    </div>
  );
}
