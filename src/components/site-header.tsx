import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";
import { ResumeButton } from "./resume-button";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ variant = "home" }: { variant?: "home" | "case-study" }) {
  return (
    <header className="band topbar-sticky">
      <div className="topbar">
        {variant === "home" ? (
          <a className="monogram" href="#top" aria-label="Nithu S Kishore, home">
            nsk
          </a>
        ) : (
          <Link className="back-link" href="/">
            ← Home
          </Link>
        )}
        <nav className="topnav" aria-label="Primary">
          {variant === "home" &&
            navLinks.map((link) => (
              <a key={link.href} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          <span className="nav-divider" aria-hidden="true" />
          <a
            className="btn btn-secondary btn-linkedin"
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.5 4.77 5.75v5.7h-4v-5.05c0-1.2-.02-2.75-1.75-2.75-1.75 0-2.02 1.3-2.02 2.66v5.14h-4v-11z"
              />
            </svg>
            LinkedIn
          </a>
          <ResumeButton />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
