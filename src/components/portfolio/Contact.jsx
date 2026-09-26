"use client";

import { useState } from "react";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";
import Reveal from "./Reveal";

export default function Contact() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${email}`);
    const body = encodeURIComponent(
      `Hi Jibon,\n\nI found your portfolio and I'd like to talk about a project.\n\nMy email: ${email}\n\nProject details:\n`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="pf-section" id="contact">
      <div className="pf-wrap">
        <Reveal>
          <div className="pf-cta-box">
            <h2>Let&apos;s build something scalable.</h2>
            <p>Drop your email — I reply within one business day.</p>

            <form className="pf-cta-form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@company.com"
                aria-label="Your email address"
                required
              />
              <button type="submit" className="pf-btn pf-btn-red">
                Let&apos;s Talk
                <ArrowRight size={15} />
              </button>
            </form>

            <div className="pf-cta-direct">
              <a href={`mailto:${CONTACT.email}`}>
                <Mail size={14} />
                {CONTACT.email}
              </a>
              <a
                href="https://wa.me/+8801854102982"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
