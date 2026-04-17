import Reveal from "../Reveal";
import { aboutTexts } from "@/data/about";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          <Reveal>
            <p className="text-accent uppercase tracking-[4px] text-xs font-semibold mb-3">About</p>
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
              모바일 경험을<br />만들어가다<br />
              <span className="text-accent">Since 2012</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            {aboutTexts.map((text, i) => (
              <div key={i} className={`flex gap-3 ${i < aboutTexts.length - 1 ? "mb-4" : ""}`}>
                <span className="text-accent shrink-0 mt-1">▹</span>
                <p className="text-text leading-8">{text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
