import { contact, siteConfig } from "@/content/site";
import { CopyEmailIconButton } from "./copy-email-icon-button";
import { BackToTop } from "./back-to-top";

export function SiteFooter() {
  return (
    <footer className="band site-footer" id="contact" aria-labelledby="contact-title">
      <h2 className="section-title" id="contact-title">
        {contact.title}
      </h2>
      <p className="footer-lede">{contact.lede}</p>

      <div className="footer-email">
        <a className="email-link" href={"mailto:" + siteConfig.email}>
          {siteConfig.email}
        </a>
        <CopyEmailIconButton email={siteConfig.email} />
      </div>

      <p className="label footer-label">{contact.exploreLabel}</p>
      <ul className="footer-links">
        {contact.links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            ) : (
              <a href={link.href} download={link.download ? siteConfig.resumeFilename : undefined}>
                {link.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="footer-base">
        <p>{contact.copyright}</p>
        <BackToTop />
      </div>
    </footer>
  );
}
