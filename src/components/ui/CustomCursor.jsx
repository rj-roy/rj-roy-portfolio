"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let ringX = mouse.x;
    let ringY = mouse.y;
    let raf = 0;
    let visible = false;

    const onMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = e.clientX;
        ringY = e.clientY;
      }
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
    };

    const onOver = (e) => {
      const target = e.target;
      const interactive =
        target.closest &&
        target.closest(
          'a, button, input, select, textarea, [role="button"], [data-detail], .pf-proj-card, .pf-note-card, .pf-skill'
        );
      ring.style.width = interactive ? "52px" : "34px";
      ring.style.height = interactive ? "52px" : "34px";
    };

    const loop = () => {
      ringX += (mouse.x - ringX) * 0.18;
      ringY += (mouse.y - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}