import { MARQUEE_TOOLS } from "@/lib/site";

const LOOP = [...MARQUEE_TOOLS, ...MARQUEE_TOOLS];

export default function StackMarquee() {
  return (
    <div className="pf-stack" id="stack" aria-label="Technologies I work with">
      <div className="pf-stack-track">
        {LOOP.map((tool, index) => (
          <span key={`${tool}-${index}`}>{tool}</span>
        ))}
      </div>
    </div>
  );
}
