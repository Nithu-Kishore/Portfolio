import { dochours } from "@/content/dochours";
import { BeforeAfter } from "./before-after";

export function CsHero() {
  return (
    <section className="band cs-hero" aria-labelledby="cs-title">
      <div className="cs-hero-top">
        <div className="cs-intro">
          <p className="label">{dochours.hero.label}</p>
          <h1 className="cs-title" id="cs-title">
            {dochours.hero.title}
          </h1>
          <p className="cs-lede">{dochours.hero.lede}</p>
          <p className="cs-role">
            <strong>{dochours.hero.roleBold}</strong>
            {dochours.hero.roleRest}
          </p>
        </div>

        <dl className="cs-facts">
          {dochours.hero.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="label">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <BeforeAfter />
    </section>
  );
}
