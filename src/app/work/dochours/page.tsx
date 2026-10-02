import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CsHero } from "@/components/case-study/cs-hero";
import { Toc } from "@/components/case-study/toc";
import { SummaryCards } from "@/components/case-study/summary-cards";
import { PullQuote } from "@/components/case-study/pull-quote";
import { FlowExisting } from "@/components/case-study/flow-existing";
import { FlowUpdated } from "@/components/case-study/flow-updated";
import { Insights } from "@/components/case-study/insights";
import { IterationCard } from "@/components/case-study/iteration-card";
import { SolutionRow } from "@/components/case-study/solution-row";
import { NextSteps } from "@/components/case-study/next-steps";
import { CtaCard } from "@/components/case-study/cta-card";
import {
  dochours,
  summary,
  backstory,
  problem,
  discovery,
  exploration,
  solution,
  learnings,
  type Run,
} from "@/content/dochours";

export const metadata: Metadata = {
  title: dochours.meta.title,
  description: dochours.meta.description,
  alternates: { canonical: "/work/dochours" },
  openGraph: {
    title: dochours.meta.title,
    description: dochours.meta.description,
    type: "article",
  },
};

function Runs({ runs }: { runs: Run[] }) {
  return (
    <>
      {runs.map((run, i) => {
        if (typeof run === "string") return <span key={i}>{run}</span>;
        if ("bold" in run) return <strong key={i}>{run.bold}</strong>;
        return <em key={i}>{run.em}</em>;
      })}
    </>
  );
}

export default function DocHoursPage() {
  return (
    <div className="frame" id="top">
      <SiteHeader variant="case-study" />

      <CsHero />

      <div className="band cs-body">
        <Toc />

        <article className="cs-content">
          <section id="summary" className="cs-section">
            <h2 className="cs-h2">{summary.title}</h2>
            <SummaryCards />
          </section>

          <section id="backstory" className="cs-section">
            <h2 className="cs-h2">{backstory.title}</h2>
            {backstory.paragraphs.map((p, i) => (
              <p className="cs-p" key={i}>
                {p}
              </p>
            ))}
            <PullQuote text={backstory.quote.text} caption={backstory.quote.caption} />
          </section>

          <section id="problem" className="cs-section">
            <h2 className="cs-h2">{problem.title}</h2>
            {problem.paragraphs.map((runs, i) => (
              <p className="cs-p" key={i}>
                <Runs runs={runs} />
              </p>
            ))}

            <FlowExisting />

            <details className="cs-details">
              <summary>{problem.scope.summary}</summary>
              <div className="cs-scope">
                <div>
                  <p className="label">In scope</p>
                  <ul>
                    {problem.scope.inScope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="label">Out of scope</p>
                  <ul>
                    {problem.scope.outOfScope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          </section>

          <section id="discovery" className="cs-section">
            <h2 className="cs-h2">{discovery.title}</h2>
            <p className="cs-p">{discovery.intro}</p>
            <Insights />
          </section>

          <section id="exploration" className="cs-section">
            <h2 className="cs-h2">{exploration.title}</h2>
            <p className="cs-p">{exploration.intro}</p>
            <div className="cs-iters">
              {exploration.iterations.map((iteration) => (
                <IterationCard iteration={iteration} key={iteration.title} />
              ))}
            </div>
          </section>

          <section id="solution" className="cs-section">
            <h2 className="cs-h2">{solution.title}</h2>
            {solution.rows.map((row) => (
              <SolutionRow row={row} key={row.title} />
            ))}
            <FlowUpdated />
          </section>

          <section id="learnings" className="cs-section">
            <h2 className="cs-h2">{learnings.title}</h2>
            <ul className="cs-learnings">
              {learnings.items.map((item, i) => (
                <li key={i}>
                  <strong>{item.bold}</strong>
                  {item.rest}
                </li>
              ))}
            </ul>
            <NextSteps />
          </section>

          <CtaCard />
        </article>
      </div>

      <SiteFooter />
    </div>
  );
}
