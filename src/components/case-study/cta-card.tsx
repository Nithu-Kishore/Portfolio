import { cta } from "@/content/dochours";
import { siteConfig } from "@/content/site";

export function CtaCard() {
  return (
    <aside className="cs-cta" aria-labelledby="cta-title">
      <p className="label">{cta.label}</p>
      <h2 className="cs-cta-title" id="cta-title">
        {cta.title}
      </h2>
      <p className="cs-cta-text">{cta.text}</p>
      <div className="cs-cta-actions">
        <a className="btn btn-primary" href={cta.emailHref}>
          Email me
        </a>
        <a className="btn btn-secondary" href={siteConfig.resumeHref} download={siteConfig.resumeFilename}>
          Download resume
        </a>
        <a className="btn btn-secondary" href={siteConfig.social.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </a>
      </div>
      <a className="back-link cs-cta-back" href={cta.backHref}>
        {cta.backLabel}
      </a>
    </aside>
  );
}
