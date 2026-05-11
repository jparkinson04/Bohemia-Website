export default function LocationsList() {
  return (
    <div className="split__media split__media--locations">
      <h3 className="locations__title">Find Claire</h3>
      <ul className="locations">
        <li>
          <p className="locations__name">Claire Whitfield Beauty Salon</p>
          <p className="locations__addr">
            18 High St, Askern,<br />Doncaster DN6 0AB
          </p>
        </li>
        <li>
          <p className="locations__name">Phone</p>
          <p className="locations__addr">
            <a href="tel:+447766588607">+44 7766 588607</a>
          </p>
        </li>
        <li>
          <p className="locations__name">Find Bohemia online</p>
          <p className="locations__addr">
            <a href="https://www.instagram.com/bohemiawellbeing" target="_blank" rel="noopener">
              @bohemiawellbeing on Instagram
            </a>
            <br />
            <a href="https://www.facebook.com/share/1Ea2wMYMwz/" target="_blank" rel="noopener">
              @bohemiawellbeing on Facebook
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
