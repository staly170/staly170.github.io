import Reveal from "../Reveal";
import SectionHeader from "../SectionHeader";
import { expertise } from "@/data/expertise";

export default function Expertise() {
  return (
    <section id="services" className="py-28 md:py-36 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-2/50 via-dark to-dark-2/50" />
      <div className="relative max-w-[1200px] mx-auto px-8">
        <SectionHeader tag="Expertise" title="전문 분야" />
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {expertise.map((s, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="group flex gap-5 py-7 border-b border-border last:border-b-0 cursor-default">
                <div className="flex flex-col items-center shrink-0 pt-2">
                  <span className="relative flex items-center justify-center w-3 h-3">
                    <span className="absolute inset-0 rounded-full bg-accent/30 group-hover:bg-accent/60 group-hover:scale-150 transition-all duration-500" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-accent group-hover:shadow-[0_0_10px_rgba(20,184,166,0.9)] transition-all duration-500" />
                  </span>
                  <span className="w-px flex-1 mt-2 bg-gradient-to-b from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-lg font-semibold mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                  <p className="text-text-2 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
