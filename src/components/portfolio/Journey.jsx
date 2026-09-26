import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { CONTACT, JOURNEY } from "@/lib/site";
import portrait from "@/assets/images/roy-ji.png";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section className="pf-section" id="journey">
      <div className="pf-wrap">
        <Reveal className="pf-centered-head">
          <p className="pf-eyebrow">
            Journey
          </p>
          <h2>Experience, platforms &amp; education</h2>
        </Reveal>

        <div className="pf-journey-grid">
          <Reveal as="figure" className="pf-journey-photo">
            <Image
              src={portrait}
              alt="Jibon Roy"
              width={460}
              height={460}
            />
            <figcaption>
              <strong>{CONTACT.name}</strong>
              <span>{CONTACT.role} · {CONTACT.location}</span>
              <a
                href="/CV_Rj_Roy.pdf"
                download="Jibon_Roy_CV.pdf"
                className="pf-btn pf-btn-sm pf-figure-btn"
              >
                <Download size={13} />
                Full CV
              </a>
            </figcaption>
          </Reveal>

          <div className="pf-timeline">
            {JOURNEY.map((entry, index) => (
              <Reveal
                key={entry.org}
                delay={index * 80}
                className={`pf-role${entry.current ? " current" : ""}`}
              >
                <span className="pf-role-kind">{entry.kind}</span>
                <h4>{entry.role}</h4>
                <span className="pf-role-org">{entry.org}</span>
                {entry.points?.length ? (
                  <ul>
                    {entry.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}

            <Reveal className="pf-role">
              <span className="pf-role-kind">Contact</span>
              <h4>Got a project in mind?</h4>
              <a
                href={`mailto:${CONTACT.email}`}
                className="pf-role-org"
                style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
              >
                <Mail size={14} />
                {CONTACT.email}
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
