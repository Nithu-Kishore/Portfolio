import { identity } from "@/content/site";

export function About() {
  return (
    <div className="about" id="about">
      <h2 className="about-title">{identity.about.title}</h2>
      {identity.about.paragraphs.map((p, i) => (
        <p className="about-text" key={i}>
          {p.bold ? <strong>{p.bold}</strong> : null}
          {p.rest}
        </p>
      ))}
    </div>
  );
}
