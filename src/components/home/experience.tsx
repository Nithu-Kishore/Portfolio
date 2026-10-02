import Image from "next/image";
import { experience } from "@/content/site";

export function Experience() {
  return (
    <section className="band section section-tight" id="experience" aria-labelledby="experience-title">
      <h2 className="section-title" id="experience-title">
        Experience
      </h2>

      <ol className="xp-grid">
        {experience.map((item) => {
          const logoClass =
            item.logo.type === "image"
              ? "xp-logo xp-logo-img" +
                (item.logo.variant === "flat" ? " logo-flat" : "") +
                (item.logo.variant === "tcs" ? " logo-tcs" : "")
              : "xp-logo";
          return (
            <li className="xp" key={item.role}>
              <span className={logoClass} aria-hidden="true">
                {item.logo.type === "letter" ? (
                  item.logo.value
                ) : (
                  <Image src={item.logo.src} alt="" width={40} height={40} />
                )}
              </span>
              <div>
                <h3 className="xp-role">
                  {item.role}
                  {item.tag ? <span className="xp-tag">{item.tag}</span> : null}
                </h3>
                <p className="xp-org">{item.org}</p>
                <p className="xp-date">{item.date}</p>
                <p className="xp-desc">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
