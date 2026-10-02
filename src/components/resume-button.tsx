import { siteConfig } from "@/content/site";

export function ResumeButton() {
  return (
    <a
      className="btn btn-primary btn-resume"
      href={siteConfig.resumeHref}
      download={siteConfig.resumeFilename}
      aria-label="Download resume (PDF)"
    >
      <span className="swap" aria-hidden="true">
        <span>Resume ↓</span>
        <span>Download ↓</span>
      </span>
    </a>
  );
}
