export function PullQuote({ text, caption }: { text: string; caption: string }) {
  return (
    <blockquote className="cs-quote">
      <p>{text}</p>
      <footer>{caption}</footer>
    </blockquote>
  );
}
