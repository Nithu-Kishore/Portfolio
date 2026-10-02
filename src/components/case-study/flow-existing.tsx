import { existingFlowCaption } from "@/content/dochours";

export function FlowExisting() {
  return (
    <figure className="cs-flow">
      <div className="cs-flow-scroll">
        <svg className="flow" viewBox="0 0 760 290" role="img" aria-labelledby="flow1-t flow1-d">
          <title id="flow1-t">Existing flow</title>
          <desc id="flow1-d">
            Start, clinic sign-up, dashboard, add appointment, appointment form. The form needs a
            department and a doctor. If either has not been added in Settings, the dropdown is
            empty and the user abandons the booking.
          </desc>
          <defs>
            <marker
              id="ah1"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0L10 5L0 10z" className="flow-head" />
            </marker>
          </defs>

          <g className="node pill">
            <rect x="10" y="24" width="70" height="40" rx="20" />
            <text x="45" y="49">Start</text>
          </g>
          <g className="node">
            <rect x="104" y="24" width="120" height="40" rx="8" />
            <text x="164" y="49">Clinic sign-up</text>
          </g>
          <g className="node">
            <rect x="248" y="24" width="104" height="40" rx="8" />
            <text x="300" y="49">Dashboard</text>
          </g>
          <g className="node">
            <rect x="376" y="24" width="150" height="40" rx="8" />
            <text x="451" y="49">Add appointment</text>
          </g>
          <g className="node">
            <rect x="550" y="24" width="200" height="40" rx="8" />
            <text x="650" y="49">Appointment form</text>
          </g>

          <path className="edge" d="M80 44H104M224 44H248M352 44H376M526 44H550" markerEnd="url(#ah1)" />
          <path className="edge" d="M650 64V92H215V112M650 92H555V112" markerEnd="url(#ah1)" />

          <g className="node ask">
            <rect x="130" y="112" width="170" height="40" rx="8" />
            <text x="215" y="137">Department added?</text>
          </g>
          <g className="node ask">
            <rect x="470" y="112" width="170" height="40" rx="8" />
            <text x="555" y="137">Doctor added?</text>
          </g>

          <path
            className="edge"
            d="M175 152V176H120V196M255 152V176H300V196M515 152V176H460V196M595 152V176H640V196"
            markerEnd="url(#ah1)"
          />
          <text className="edge-label" x="138" y="172">Yes</text>
          <text className="edge-label" x="282" y="172">No</text>
          <text className="edge-label" x="478" y="172">Yes</text>
          <text className="edge-label" x="622" y="172">No</text>

          <g className="node">
            <rect x="45" y="196" width="150" height="40" rx="8" />
            <text x="120" y="221">Pick department</text>
          </g>
          <g className="node dead">
            <rect x="225" y="196" width="150" height="40" rx="8" />
            <text x="300" y="221">Empty dropdown</text>
          </g>
          <g className="node">
            <rect x="385" y="196" width="150" height="40" rx="8" />
            <text x="460" y="221">Pick doctor</text>
          </g>
          <g className="node dead">
            <rect x="565" y="196" width="150" height="40" rx="8" />
            <text x="640" y="221">Empty dropdown</text>
          </g>

          <text className="dead-note" x="300" y="262">Abandons booking</text>
          <text className="dead-note" x="640" y="262">Abandons booking</text>
        </svg>
      </div>
      <figcaption>{existingFlowCaption}</figcaption>
    </figure>
  );
}
