import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="section-wrap not-found">
      <p className="eyebrow">404</p>
      <h2>SIGNAL<br /><span>LOST.</span></h2>
      <p className="intro">This route doesn't exist.</p>
      <p>
        <Link className="button button-primary" to="/">RETURN HOME <b>↗</b></Link>
      </p>
    </section>
  );
}

export default NotFound;
