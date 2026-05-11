type Props = {
  children: React.ReactNode;
};

export default function PullQuote({ children }: Props) {
  return (
    <section className="quote-band">
      <div className="container">
        <p className="quote-band__text">{children}</p>
      </div>
    </section>
  );
}
