import { nextSteps } from "@/content/dochours";
import { MockForm } from "./mock-form";

export function NextSteps() {
  return (
    <div className="cs-measure">
      <h3 className="cs-h3">{nextSteps.title}</h3>
      <ol className="cs-next-list">
        {nextSteps.items.map((item, i) => (
          <li key={i}>
            <strong>{item.bold}</strong>
            {item.rest}
          </li>
        ))}
      </ol>
      <figure className="cs-proposal">
        <div className="cs-ba-frame">
          <MockForm variant="proposed" />
        </div>
        <figcaption>
          <strong>{nextSteps.proposedCaptionBold}</strong>
          {nextSteps.proposedCaptionRest}
        </figcaption>
      </figure>
    </div>
  );
}
