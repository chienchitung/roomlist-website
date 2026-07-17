"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: "180px 0px 0px" });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const goTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return <button className={`back-to-top${visible ? " is-visible" : ""}`} type="button" onClick={goTop} aria-label="回到頁面頂端"><small>TOP</small></button>;
}
