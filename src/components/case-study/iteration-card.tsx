import Image from "next/image";

type Iteration = {
  image: string;
  imageAlt: string;
  label: string;
  title: string;
  description: string;
  whyNotBold: string;
  whyNotRest: string;
};

export function IterationCard({ iteration }: { iteration: Iteration }) {
  return (
    <div className="cs-iter-card">
      <figure className="cs-shot">
        <Image
          src={iteration.image}
          alt={iteration.imageAlt}
          width={400}
          height={280}
          sizes="(min-width: 768px) 50vw, 100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </figure>
      <p className="label">{iteration.label}</p>
      <h3 className="cs-h3">{iteration.title}</h3>
      <p className="cs-p">{iteration.description}</p>
      <p className="cs-learn">
        <strong>{iteration.whyNotBold}</strong>
        {iteration.whyNotRest}
      </p>
    </div>
  );
}
