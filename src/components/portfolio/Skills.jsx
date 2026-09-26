import {
  Code2,
  Database,
  Monitor,
  Server,
  Terminal,
} from "lucide-react";
import { SKILL_GROUPS } from "@/lib/site";
import { getTechIcon } from "@/lib/techIcons";
import Reveal from "./Reveal";

const GROUP_ICONS = {
  monitor: Monitor,
  server: Server,
  database: Database,
  terminal: Terminal,
};

export default function Skills() {
  return (
    <section className="pf-section" id="skills">
      <div className="pf-wrap">
        <Reveal className="pf-centered-head">
          <p className="pf-eyebrow">
            Skills
          </p>
          <h2>The stack I build and ship with</h2>
          <p>
            A pragmatic React + Node toolchain, picked for shipping speed and
            maintainability rather than hype.
          </p>
        </Reveal>

        <div className="pf-skills-grid">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = GROUP_ICONS[group.icon] || Code2;
            return (
              <Reveal key={group.title} delay={index * 80} className="pf-skill-group">
                <h3>
                  <Icon />
                  {group.title}
                </h3>
                <p>{group.caption}</p>
                <div className="pf-skill-list">
                  {group.items.map((item) => {
                    const TechIcon = getTechIcon(item);
                    return (
                      <span key={item} className="pf-skill">
                        <span className="pf-skill-icon">
                          <TechIcon />
                        </span>
                        {item}
                      </span>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="pf-skill-foot">
          <strong>Also in the toolkit:</strong>
          Git &amp; GitHub, route guards, JWT sessions, rate limiting, Docker,
          Vercel, Railway, Netlify, Lighthouse audits, accessibility passes.
        </Reveal>
      </div>
    </section>
  );
}
