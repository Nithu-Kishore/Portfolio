"use client";

import { useEffect, useRef, useState } from "react";
import { dochours } from "@/content/dochours";

export function Toc() {
  const [active, setActive] = useState(dochours.toc[0]?.id);
  const listRef = useRef<HTMLOListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const sections = dochours.toc
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const list = listRef.current;
    const link = active ? linkRefs.current[active] : null;
    if (!list || !link) return;
    const target = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollLeft = Math.max(0, target);
  }, [active]);

  return (
    <nav className="cs-toc" aria-label="On this page">
      <p className="label">On this page</p>
      <ol ref={listRef}>
        {dochours.toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? "active" : undefined}
              ref={(el) => {
                linkRefs.current[item.id] = el;
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
