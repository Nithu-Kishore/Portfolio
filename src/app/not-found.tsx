import Link from "next/link";

export default function NotFound() {
  return (
    <div className="frame" id="top">
      <section className="band header" aria-label="Page not found" style={{ paddingTop: "var(--s8)", paddingBottom: "var(--s8)" }}>
        <div style={{ gridColumn: "1 / -1" }}>
          <p className="label">404</p>
          <h1 className="name" style={{ marginTop: "var(--s3)" }}>
            Page not found
          </h1>
          <p className="headline" style={{ marginTop: "var(--s3)" }}>
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link className="btn btn-secondary" href="/" style={{ marginTop: "var(--s6)", display: "inline-flex" }}>
            ← Back to home
          </Link>
        </div>
      </section>
    </div>
  );
}
