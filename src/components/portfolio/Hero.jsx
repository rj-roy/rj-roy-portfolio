import Image from "next/image";
import { Download, Mail } from "lucide-react";
import { HERO, HERO_STATS } from "@/lib/site";
import portrait from "@/assets/images/roy-ji-tr.png";

export default function Hero() {
  return (
    <section className="pf-hero" id="home">
      <div className="pf-wrap">
        <div className="pf-hero-grid">
          <div>
            <span className="pf-hero-badge">
              <span className="dot" />
              {HERO.badge}
            </span>

            <h1>
              Full-Stack developer building{" "}
              <b>scalable</b>, <b>production-ready</b> products
            </h1>

            <p>{HERO.tagline}</p>

            <div className="pf-hero-actions">
              <a href="#contact" className="pf-btn pf-btn-red">
                <Mail size={15} />
                Let&apos;s Talk
              </a>
              <a
                href="/CV_Rj_Roy.pdf"
                download="Jibon_Roy_CV.pdf"
                className="pf-btn pf-btn-outline"
              >
                <Download size={15} />
                {HERO.resumeLabel}
              </a>
            </div>

            <div className="pf-hero-stats">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <span className="value">{stat.value}</span>
                  <span className="label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pf-hero-figure">
            <Image
              src={portrait}
              alt="Jibon Roy, Full-Stack Developer"
              className="pf-portrait"
              width={460}
              height={460}
              priority
            />
            <div className="pf-figure-chip">
              <div>
                <strong>Jibon Roy</strong>
                <span>{HERO.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
