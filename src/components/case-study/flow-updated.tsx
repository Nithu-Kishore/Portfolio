import { solution } from "@/content/dochours";

export function FlowUpdated() {
  return (
    <figure className="cs-flow">
      <div className="cs-flow-scroll">
        <svg className="flow" viewBox="0 0 760 470" role="img" aria-labelledby="flow2-t flow2-d">
          <title id="flow2-t">Updated flow</title>
          <desc id="flow2-d">
            After clinic sign-up, a Getting Started section appears. Users either complete setup
            in order, add department, add doctor, complete clinic profile, or explore other
            modules, where a Getting Started widget lets them resume pending setup. Both paths
            lead to creating an appointment and continuing to use the platform.
          </desc>
          <defs>
            <marker
              id="ah2"
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
            <rect x="345" y="10" width="70" height="40" rx="20" />
            <text x="380" y="35">Start</text>
          </g>
          <g className="node">
            <rect x="305" y="74" width="150" height="40" rx="8" />
            <text x="380" y="99">Clinic sign-up</text>
          </g>
          <g className="node key">
            <rect x="270" y="138" width="220" height="40" rx="8" />
            <text x="380" y="163">Getting Started appears</text>
          </g>

          <path className="edge" d="M380 50V74M380 114V138" markerEnd="url(#ah2)" />
          <path className="edge" d="M380 178V198H200V218M380 198H560V218" markerEnd="url(#ah2)" />
          <text className="edge-label" x="232" y="192">Set up now</text>
          <text className="edge-label" x="470" y="192">Explore first</text>

          <g className="node">
            <rect x="110" y="218" width="180" height="40" rx="8" />
            <text x="200" y="243">Add department</text>
          </g>
          <g className="node">
            <rect x="110" y="278" width="180" height="40" rx="8" />
            <text x="200" y="303">Add doctor</text>
          </g>
          <g className="node">
            <rect x="110" y="338" width="180" height="40" rx="8" />
            <text x="200" y="363">Complete clinic profile</text>
          </g>

          <g className="node">
            <rect x="470" y="218" width="180" height="40" rx="8" />
            <text x="560" y="243">Explore other modules</text>
          </g>
          <g className="node key">
            <rect x="470" y="278" width="180" height="40" rx="8" />
            <text x="560" y="303">Setup widget follows</text>
          </g>
          <g className="node">
            <rect x="470" y="338" width="180" height="40" rx="8" />
            <text x="560" y="363">Resume pending setup</text>
          </g>

          <path
            className="edge"
            d="M200 258V278M200 318V338M560 258V278M560 318V338"
            markerEnd="url(#ah2)"
          />
          <path className="edge" d="M200 378V398H380V410" markerEnd="url(#ah2)" />
          <path className="edge" d="M560 378V398H380" />

          <g className="node done">
            <rect x="290" y="410" width="180" height="40" rx="8" />
            <text x="380" y="435">Create appointment</text>
          </g>
        </svg>
      </div>
      <figcaption>{solution.flowCaption}</figcaption>
    </figure>
  );
}
