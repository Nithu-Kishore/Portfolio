import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Identity } from "@/components/home/identity";
import { About } from "@/components/home/about";
import { WorkGrid } from "@/components/home/work-grid";
import { Experience } from "@/components/home/experience";
import { WritingTile, LabTile } from "@/components/home/tiles";

export default function HomePage() {
  return (
    <div className="frame" id="top">
      <SiteHeader variant="home" />

      <section className="band header" aria-label="Introduction">
        <Identity />
        <About />
      </section>

      <WorkGrid />
      <Experience />

      <section className="band section side" aria-label="Writing and experiments">
        <WritingTile />
        <LabTile />
      </section>

      <SiteFooter />
    </div>
  );
}
