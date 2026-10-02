import Image from "next/image";

type Row = { image: string; imageAlt: string; title: string; description: string };

export function SolutionRow({ row }: { row: Row }) {
  return (
    <div className="cs-iter">
      <figure className="cs-shot">
        <Image
          src={row.image}
          alt={row.imageAlt}
          width={760}
          height={520}
          sizes="(min-width: 768px) 60vw, 100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </figure>
      <div>
        <h3 className="cs-h3">{row.title}</h3>
        <p className="cs-p">{row.description}</p>
      </div>
    </div>
  );
}
