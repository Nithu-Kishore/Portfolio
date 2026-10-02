"use client";

export function BackToTop() {
  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  }

  return (
    <a className="btn btn-secondary btn-top" href="#top" onClick={handleClick}>
      Back to top ↑
    </a>
  );
}
