import Reveal from "./Reveal";

interface SectionHeaderProps {
  tag: string;
  title: string;
  withLine?: boolean;
}

export default function SectionHeader({ tag, title, withLine = true }: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="text-accent uppercase tracking-[4px] text-xs font-semibold mb-3">{tag}</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold">{title}</h2>
        </div>
        {withLine && (
          <div className="hidden md:block w-[200px] h-px bg-gradient-to-r from-accent/30 to-transparent" />
        )}
      </div>
    </Reveal>
  );
}
