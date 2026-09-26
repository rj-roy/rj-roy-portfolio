"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { getProjects } from "@/lib/data";
import Reveal from "./Reveal";

function ProjectCard({ project }) {
  const tags = (project.technologies || project.tags || []).slice(0, 3);

  return (
    <article className="pf-proj-card">
      <div className="pf-proj-thumb">
        <span className="pf-proj-badge">{project.stack}</span>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={800}
          height={450}
        />
      </div>
      <div className="pf-proj-body">
        <div className="pf-proj-top">
          <h3>{project.title}</h3>
          <span className="pf-arrow-btn" aria-hidden="true">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p>{project.projectDetails || project.description}</p>
        <div className="pf-tags">
          {tags.map((tag) => (
            <span key={tag} className="pf-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="pf-proj-links">
          <Link href={`/projects/${project.slug}`}>
            Case study
            <ArrowUpRight size={13} />
          </Link>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live site
            <ExternalLink size={12} />
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            Source
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    getProjects()
      .then((data) => {
        if (!cancelled) setProjects(Array.isArray(data) ? data.slice(0, 4) : []);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="pf-section" id="work">
      <div className="pf-wrap">
        <Reveal className="pf-section-head">
          <div>
            <p className="pf-eyebrow">Work</p>
            <h2>Featured solutions &amp; projects</h2>
          </div>
          <Link href="/projects" className="pf-btn pf-btn-outline pf-btn-sm">
            All case studies
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>

        <div className="pf-proj-grid">
          {loading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="pf-skeleton" aria-hidden="true" />
              ))
            : projects.map((project, index) => (
                <Reveal key={project.id} delay={index * 90}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
        </div>
      </div>
    </section>
  );
}
