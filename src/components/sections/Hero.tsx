import ParticleBackground from "../ParticleBackground";
import TypeWriter from "../TypeWriter";
import { stats } from "@/data/stats";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[#080d10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(52,211,153,0.07),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(52,211,153,0.05),transparent_45%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      <ParticleBackground />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-accent tracking-[6px] text-xs font-semibold mb-6 animate-[fadeInUp_0.6s_ease_0.2s_both]">
            모바일 아키텍트 · 시니어 개발자
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-3 uppercase animate-[fadeInUp_0.8s_ease_0.4s_both]">
            <TypeWriter words={["ANDROID", "iOS", "FLUTTER"]} className="text-accent" />
          </h1>
          <h1 className="text-white/80 text-xl md:text-2xl font-bold mb-0 animate-[fadeInUp_0.8s_ease_0.6s_both]">
            안녕하세요,
          </h1>
          <h1 className="text-white/80 text-xl md:text-2xl font-bold mb-8 animate-[fadeInUp_0.8s_ease_0.6s_both]">
            모바일 개발자 이의태입니다.
          </h1>
          <p className="text-text-2 text-base leading-relaxed max-w-[440px] mb-0 animate-[fadeInUp_0.8s_ease_0.8s_both]">
            12년간 핀테크·커머스·소셜 등 다양한 도메인에서
          </p>
          <p className="text-text-2 text-base leading-relaxed max-w-[440px] mb-10 animate-[fadeInUp_0.8s_ease_0.8s_both]">
            설계부터 출시·운영까지 직접 해온 모바일 개발자입니다.
          </p>
          <div className="flex gap-4 animate-[fadeInUp_0.8s_ease_1s_both]">
            <a href="#works" className="group relative inline-flex items-center gap-3 px-8 py-3.5 text-sm font-medium tracking-wider text-accent border border-accent/30 rounded-lg overflow-hidden hover:text-white transition-colors duration-300">
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">프로젝트 보기</span>
              <svg className="relative w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        {/* Right - Stats */}
        <div className="hidden md:flex flex-col gap-0 animate-[fadeInUp_1s_ease_0.8s_both]">
          {stats.map((s, i) => (
            <div key={i} className="group relative flex items-end justify-between py-8 border-b border-border last:border-b-0 cursor-default">
              <div className="flex items-center gap-4">
                <span className="w-6 h-px bg-accent/40 group-hover:w-10 group-hover:bg-accent transition-all duration-500" />
                <div>
                  <p className="text-text-3 text-[11px] uppercase tracking-[3px] mb-1">{s.sub}</p>
                  <p className="text-white text-xl font-medium tracking-wide">{s.label}</p>
                </div>
              </div>
              <p className="text-accent text-5xl lg:text-6xl font-bold leading-none tracking-tight">{s.num}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeInUp_0.8s_ease_1.2s_both]">
        <span className="text-text-3 text-[10px] uppercase tracking-[3px]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
