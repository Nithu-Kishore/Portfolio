import Image from "next/image";
import { writingTile, labTile } from "@/content/site";

function ArticleOneArt() {
  return (
    <svg viewBox="0 0 240 160" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M58 160c4-30 22-44 48-44s44 14 48 44" stroke="#8a8a86" strokeWidth="2.5" />
      <path d="M76 126l-12 10" stroke="#8a8a86" strokeWidth="2.5" />
      <rect x="38" y="120" width="26" height="34" rx="3" transform="rotate(-10 51 137)" stroke="#8a8a86" strokeWidth="2" />
      <path d="M51 129v10M46 134h10" stroke="#6e9bf5" strokeWidth="2.2" />
      <path d="M138 124l14-20" stroke="#8a8a86" strokeWidth="2.5" />
      <rect x="146" y="78" width="22" height="36" rx="4" transform="rotate(12 157 96)" stroke="#ededea" strokeWidth="2.5" />
      <path d="M151 104l12 2" stroke="#6e9bf5" strokeWidth="2.5" />
      <circle cx="106" cy="72" r="24" stroke="#ededea" strokeWidth="2.5" />
      <path d="M84 66c3-14 13-22 24-22s20 8 22 20" stroke="#ededea" strokeWidth="2.5" />
      <circle cx="104" cy="74" r="2" fill="#ededea" />
      <circle cx="118" cy="74" r="2" fill="#ededea" />
      <path d="M100 66l7-2M114 63l7 2" stroke="#ededea" strokeWidth="2" />
      <path d="M106 86c3-2 7-2 10 0" stroke="#ededea" strokeWidth="2" />
      <path d="M150 50l10-8" stroke="#3a3a3a" strokeWidth="2.5" />
      <circle cx="182" cy="32" r="24" stroke="#3a3a3a" strokeWidth="2.5" />
      <path d="M175 26c0-5 4-8 8-8s8 3 8 7c0 5-8 5-8 11" stroke="#6e9bf5" strokeWidth="2.5" />
      <circle cx="183" cy="44" r="1.8" fill="#6e9bf5" />
    </svg>
  );
}

function ArticleTwoArt() {
  return (
    <svg viewBox="0 0 240 160" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M62 160c4-30 22-44 48-44s44 14 48 44" stroke="#8a8a86" strokeWidth="2.5" />
      <path d="M80 124l-14-38 20-22" stroke="#8a8a86" strokeWidth="2.5" />
      <path d="M140 124l14-38-20-22" stroke="#8a8a86" strokeWidth="2.5" />
      <circle cx="110" cy="72" r="24" stroke="#ededea" strokeWidth="2.5" />
      <path d="M88 64c4-14 14-20 24-20s20 6 22 18" stroke="#ededea" strokeWidth="2.5" />
      <path d="M84 60c-2 6-2 12 0 18M136 60c2 6 2 12 0 18" stroke="#8a8a86" strokeWidth="5" />
      <path d="M99 72l5-3M99 72l5 3M121 72l-5-3M121 72l-5 3" stroke="#ededea" strokeWidth="2" />
      <circle cx="110" cy="85" r="2.5" stroke="#ededea" strokeWidth="2" />
      <path d="M146 50l10-8" stroke="#3a3a3a" strokeWidth="2.5" />
      <circle cx="178" cy="32" r="24" stroke="#3a3a3a" strokeWidth="2.5" />
      <path d="M164 34c2-10 16-12 20-4s-8 12-12 6 6-14 14-10 4 14-4 14-14-4-10-12 18-8 20 2-6 12-14 8" stroke="#6e9bf5" strokeWidth="2" />
    </svg>
  );
}

const articleArt: Record<string, React.ComponentType> = {
  "article-1": ArticleOneArt,
  "article-2": ArticleTwoArt,
};

function MediumIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <ellipse cx="7" cy="12" rx="5.2" ry="5.6" fill="currentColor" />
      <ellipse cx="15.6" cy="12" rx="2.6" ry="5.3" fill="currentColor" />
      <ellipse cx="20.2" cy="12" rx="0.95" ry="4.8" fill="currentColor" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v6.5L4.8 18.2A2 2 0 0 0 6.5 21h11a2 2 0 0 0 1.7-2.8L14 9.5V3" />
      <path d="M7.5 15h9" />
    </svg>
  );
}

export function WritingTile() {
  return (
    <article className="tile" id={writingTile.id}>
      <header className="tile-head">
        <span className="tile-icon" aria-hidden="true">
          <MediumIcon />
        </span>
        <div>
          <h2 className="tile-title">{writingTile.title}</h2>
          <p className="tile-meta">{writingTile.meta}</p>
        </div>
        <a className="text-link tile-more" href={writingTile.moreHref} target="_blank" rel="noopener">
          All ↗
        </a>
      </header>
      <p className="tile-desc">{writingTile.description}</p>

      <div className="strip" tabIndex={0} aria-label="Selected articles, scroll sideways">
        {writingTile.cards.map((card) => {
          const Art = articleArt[card.art];
          return (
            <a className="shot" href={card.href} target="_blank" rel="noopener" key={card.href}>
              <div className="shot-art" aria-hidden="true">
                <Art />
              </div>
              <div className="shot-cap">
                <span className="shot-title">{card.title}</span>
                <span className="shot-meta">{card.meta}</span>
              </div>
            </a>
          );
        })}
      </div>
    </article>
  );
}

export function LabTile() {
  return (
    <article className="tile" id={labTile.id}>
      <header className="tile-head">
        <span className="tile-icon" aria-hidden="true">
          <FlaskIcon />
        </span>
        <div>
          <h2 className="tile-title">{labTile.title}</h2>
          <p className="tile-meta">{labTile.meta}</p>
        </div>
      </header>
      <p className="tile-desc">{labTile.description}</p>

      <div className="strip" tabIndex={0} aria-label="AI experiments, scroll sideways">
        {labTile.cards.map((card) => (
          <a className="shot" href={card.href} target="_blank" rel="noopener" key={card.href}>
            <div className="shot-art shot-art-img">
              <Image src={card.image} alt={card.imageAlt} width={240} height={160} loading="lazy" />
            </div>
            <div className="shot-cap">
              <span className="shot-title">{card.title}</span>
              <span className="shot-meta">
                {card.meta} <span className="arrow">↗</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </article>
  );
}
