import { discovery } from "@/content/dochours";

export function Insights() {
  return (
    <>
      <ol className="cs-insights">
        {discovery.insights.map((item) => (
          <li key={item.num}>
            <span className="cs-num">{item.num}</span>
            <strong>{item.bold}</strong>
            {item.rest}
          </li>
        ))}
      </ol>
      <blockquote className="cs-hmw">
        <span className="label">{discovery.hmw.label}</span> {discovery.hmw.text}
      </blockquote>
    </>
  );
}
