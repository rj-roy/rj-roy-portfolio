"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { HOME_NAV } from "@/lib/site";

function readStoredTheme() {
  try {
    const t = window.localStorage.getItem("theme");
    return t === "light" || t === "dark" ? t : "dark";
  } catch {
    return "dark";
  }
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(readStoredTheme);

  useEffect(() => {
    const ids = HOME_NAV.map((item) => item.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem("theme", next);
    } catch {
      /* noop */
    }
  };

  return (
    <header className="pf-header">
      <nav className="pf-nav">
        <Link href="/" className="pf-brand" aria-label="Jibon Roy — home">
          <span className="pf-brand-mark">JR</span>
          Jibon Roy
        </Link>

        <div className="pf-nav-links">
          {HOME_NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="pf-nav-actions">
          <button
            type="button"
            className="pf-theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle colour theme"
          >
            <Sun className="icon-sun" />
            <Moon className="icon-moon" />
          </button>
          <a href="#contact" className="pf-btn pf-btn-red pf-btn-sm">
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="pf-nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`pf-mobile-menu${open ? " open" : ""}`}>
        {HOME_NAV.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <Link href="/projects" onClick={() => setOpen(false)}>
          All projects
        </Link>
        <Link href="/resume" onClick={() => setOpen(false)}>
          Resume
        </Link>
        <a href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
