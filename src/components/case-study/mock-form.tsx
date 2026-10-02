import { dochours, nextSteps } from "@/content/dochours";

export function MockForm({ variant }: { variant: "before" | "proposed" }) {
  if (variant === "proposed") {
    return (
      <div className="mock-form" role="img" aria-label={nextSteps.proposedAriaLabel}>
        <p className="mock-title">New appointment</p>
        <div className="mock-field">
          <span className="mock-label">Department *</span>
          <span className="mock-select">
            Select department <i aria-hidden="true">▾</i>
          </span>
          <span className="mock-menu mock-menu-help">
            {nextSteps.proposedMenuText}
            <b>{nextSteps.proposedLinkText}</b>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="mock-form" role="img" aria-label={dochours.beforeAfter.before.ariaLabel}>
      <p className="mock-title">New appointment</p>
      <div className="mock-field">
        <span className="mock-label">Department *</span>
        <span className="mock-select">
          Select department <i aria-hidden="true">▾</i>
        </span>
        <span className="mock-menu">No options available</span>
      </div>
      <div className="mock-field">
        <span className="mock-label">Doctor *</span>
        <span className="mock-select">
          Select doctor <i aria-hidden="true">▾</i>
        </span>
        <span className="mock-menu">No options available</span>
      </div>
      <span className="mock-btn">Book appointment</span>
    </div>
  );
}
