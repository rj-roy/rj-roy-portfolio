import { Gauge, Layers, Server, Zap } from "lucide-react";
import { CAPABILITIES } from "@/lib/site";
import Reveal from "./Reveal";

const ICONS = {
  layers: Layers,
  paintbrush: Gauge,
  server: Server,
  zap: Zap,
};

export default function WhyPartner() {
  return (
    <section className="pf-section" id="about">
      <div className="pf-wrap">
        <Reveal className="pf-centered-head">
          <p className="pf-eyebrow">
            Why partner with me
          </p>
          <h2>What you get when we work together</h2>
          <p>
            Clear communication, production-grade code and a bias toward
            shipping — the same four promises on every engagement.
          </p>
        </Reveal>

        <div className="pf-why-grid">
          {CAPABILITIES.map((capability, index) => {
            const Icon = ICONS[capability.icon] || Layers;
            return (
              <Reveal
                key={capability.title}
                delay={index * 70}
                className={`pf-why-card${index % 2 ? " accent" : ""}`}
              >
                <div className="pf-why-glyph">
                  <Icon />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
