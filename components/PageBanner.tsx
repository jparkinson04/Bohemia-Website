type Props = {
  eyebrow?: string;
  title: string;
  lead?: string;
};

export default function PageBanner({ eyebrow, title, lead }: Props) {
  return (
    <section className="page-banner">
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {lead && <p className="page-banner__lead">{lead}</p>}
      </div>
    </section>
  );
}
