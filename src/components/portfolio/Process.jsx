import { PROCESS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section className="pf-section" id="services">
      <div className="pf-wrap">
        <Reveal className="pf-centered-head">
          <p className="pf-eyebrow">
            How I work
          </p>
          <h2>From idea to production in three moves</h2>
        </Reveal>

        <Reveal className="pf-process-frame">
          <div className="pf-process-grid">
            {PROCESS.map((step) => (
              <div key={step.num} className="pf-step">
                <span className="pf-step-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="pf-process-meta">
            <span>Discovery</span>
            <span>Build</span>
            <span>Ship &amp; iterate</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
