"use client";

import { useState } from "react";
import { Download, FileText, Eye, Mail, ArrowUpRight } from "lucide-react";

const ResumePage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/CV_Rj_Roy.pdf");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Jibon_Roy_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading CV:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-8 pb-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center reveal">Professional Resume</p>

          <h1 className="reveal" style={{ fontSize: "clamp(34px, 5vw, 56px)", marginBottom: 14 }}>
            My CV &amp; Resume
          </h1>

          <p className="reveal" style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.7, maxWidth: 560, margin: "0 auto 26px" }}>
            Download my professional CV or preview it below — a Full Stack Developer focused on
            building scalable, secure web applications and APIs.
          </p>

          <button
            onClick={handleDownload}
            disabled={isLoading}
            className="btn-iris solid"
          >
            <Download size={15} />
            {isLoading ? "Downloading…" : "Download CV (PDF)"}
          </button>
        </div>

        <div
          className="reveal"
          id="cv"
          style={{
            overflow: "hidden",
            border: "1px solid var(--line-strong)",
            borderRadius: "var(--radius-l)",
            background: "var(--bg-elev)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "14px 22px",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <div>
              <h2 style={{ fontSize: 16, marginBottom: 2 }}>CV Preview</h2>
              <p className="mono" style={{ fontSize: 11, letterSpacing: "0.06em", color: "var(--text-faint)" }}>
                Jibon Roy — Full Stack Developer
              </p>
            </div>
            <a
              href="/CV_Rj_Roy.pdf"
              download="Jibon_Roy_CV.pdf"
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--accent)" }}
            >
              <Download size={14} />
              Download
            </a>
          </div>

          <div style={{ height: "900px", background: "var(--bg)" }}>
            <iframe
              src="/CV_Rj_Roy.pdf#toolbar=0"
              title="Jibon Roy CV"
              style={{ width: "100%", height: "100%", border: "none" }}
              type="application/pdf"
            />
          </div>
        </div>

        <div className="mt-10 three-col">
          <div className="cap-card" style={{ borderRadius: "var(--radius-m)", border: "1px solid var(--line)", padding: 24, textAlign: "center", cursor: "default" }}>
            <FileText size={22} style={{ margin: "0 auto 12px", color: "var(--accent)" }} />
            <h3 style={{ fontSize: 15, marginBottom: 8 }}>Full CV</h3>
            <p className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)", marginBottom: 16, lineHeight: 1.5 }}>
              Complete professional CV with detailed experience and skills.
            </p>
            <a href="/CV_Rj_Roy.pdf" download="Jibon_Roy_CV.pdf" className="mono" style={{ color: "var(--accent)", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>
              Download <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="cap-card" style={{ borderRadius: "var(--radius-m)", border: "1px solid var(--line)", padding: 24, textAlign: "center", cursor: "default" }}>
            <Eye size={22} style={{ margin: "0 auto 12px", color: "var(--accent-2)" }} />
            <h3 style={{ fontSize: 15, marginBottom: 8 }}>View Online</h3>
            <p className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)", marginBottom: 16, lineHeight: 1.5 }}>
              Preview the CV in your browser at any time.
            </p>
            <a
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('iframe')?.focus();
              }}
              className="mono"
              style={{ color: "var(--accent-2)", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              View CV <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="cap-card" style={{ borderRadius: "var(--radius-m)", border: "1px solid var(--line)", padding: 24, textAlign: "center", cursor: "default" }}>
            <Mail size={22} style={{ margin: "0 auto 12px", color: "var(--text-muted)" }} />
            <h3 style={{ fontSize: 15, marginBottom: 8 }}>Connect</h3>
            <p className="mono" style={{ fontSize: 11.5, color: "var(--text-faint)", marginBottom: 16, lineHeight: 1.5 }}>
              Reach out to discuss projects and opportunities.
            </p>
            <a
              href="mailto:dpjdeveloper.me@gmail.com"
              className="mono"
              style={{ color: "var(--text-muted)", fontSize: 12, display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Get in Touch <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;