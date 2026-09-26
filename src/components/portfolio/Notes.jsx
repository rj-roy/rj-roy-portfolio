"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JOURNAL_POSTS } from "@/lib/site";
import Reveal from "./Reveal";

export default function Notes() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

  return (
    <section className="pf-section" id="notes">
      <div className="pf-wrap">
        <Reveal className="pf-section-head">
          <div>
            <p className="pf-eyebrow">Notes</p>
            <h2>What I&apos;m building &amp; thinking about</h2>
          </div>
          <div className="pf-arrows">
            <button type="button" onClick={() => scroll(-1)} aria-label="Previous notes">
              <ArrowLeft />
            </button>
            <button type="button" onClick={() => scroll(1)} aria-label="Next notes">
              <ArrowRight />
            </button>
          </div>
        </Reveal>

        <div className="pf-notes" ref={trackRef}>
          {JOURNAL_POSTS.map((post) => (
            <article key={post.slug} className="pf-note-card">
              <div className="pf-note-thumb">
                <Image src={post.image} alt="" width={600} height={340} />
              </div>
              <div className="pf-note-body">
                <p className="pf-note-meta">
                  <em>{post.category}</em>
                  <span>·</span>
                  <span>{post.date}</span>
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
