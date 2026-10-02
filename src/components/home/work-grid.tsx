import Image from "next/image";
import Link from "next/link";
import { workSection } from "@/content/site";

export function WorkGrid() {
  return (
    <section className="band section section-tight" id="work" aria-labelledby="work-title">
      <h2 className="section-title" id="work-title">
        {workSection.title}
      </h2>

      <div className="work-grid">
        <Link className="work-card work-lead" href={workSection.lead.href}>
          <div className="work-img">
            <Image
              src={workSection.lead.image}
              alt={workSection.lead.imageAlt}
              width={960}
              height={600}
              sizes="(min-width: 1200px) 760px, 100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="work-info">
            <p className="work-meta">{workSection.lead.meta}</p>
            <h3 className="work-title">{workSection.lead.title}</h3>
            <p className="work-desc">{workSection.lead.description}</p>
            <span className="work-cta">
              {workSection.lead.cta} <span className="arrow">→</span>
            </span>
          </div>
        </Link>

        {workSection.soon.map((item) => (
          <div className="work-card work-soon" aria-label={item.ariaLabel} key={item.title}>
            <p className="work-meta">{item.meta}</p>
            <h3 className="work-title">{item.title}</h3>
            <span className="chip">{item.chip}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
