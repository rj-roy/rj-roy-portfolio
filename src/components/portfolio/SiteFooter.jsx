import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { CONTACT, HOME_NAV, SOCIALS } from "@/lib/site";

const SOCIAL_ICONS = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Twitter: FaTwitter,
  WhatsApp: FaWhatsapp,
};

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="pf-footer">
      <div className="pf-wrap">
        <div className="pf-foot-top">
          <div>
            <h3>{CONTACT.name}</h3>
            <nav className="pf-foot-links">
              {HOME_NAV.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
            </nav>
          </div>

          <div className="pf-social">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.name];
              if (!Icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pf-foot-bottom">
          <span>
            © {year} {CONTACT.name}. All rights reserved.
          </span>
          <span>{CONTACT.location}</span>
        </div>

        <div className="pf-giant">JIBON ROY</div>
      </div>
    </footer>
  );
}
