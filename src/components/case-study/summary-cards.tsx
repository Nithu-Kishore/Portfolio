import { summary } from "@/content/dochours";

export function SummaryCards() {
  return (
    <div className="cs-summary">
      {summary.cards.map((card) => (
        <div className="cs-summary-card" key={card.title}>
          <h3 className="cs-summary-title">{card.title}</h3>
          {card.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
