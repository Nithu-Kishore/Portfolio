import Image from "next/image";
import { dochours } from "@/content/dochours";
import { MockForm } from "./mock-form";

export function BeforeAfter() {
  const { before, after } = dochours.beforeAfter;
  return (
    <div className="cs-ba" role="group" aria-label="Before and after">
      <figure className="cs-ba-item">
        <p className="cs-ba-tag cs-ba-tag-before">{before.tag}</p>
        <div className="cs-ba-frame">
          <MockForm variant="before" />
        </div>
        <figcaption>
          <strong>{before.captionBold}</strong>
          {before.captionRest} <span className="cs-ba-note">{before.note}</span>
        </figcaption>
      </figure>

      <figure className="cs-ba-item">
        <p className="cs-ba-tag cs-ba-tag-after">{after.tag}</p>
        <div className="cs-ba-frame">
          <Image
            src={after.image}
            alt={after.imageAlt}
            width={700}
            height={460}
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <figcaption>
          <strong>{after.captionBold}</strong>
          {after.captionRest}
        </figcaption>
      </figure>
    </div>
  );
}
