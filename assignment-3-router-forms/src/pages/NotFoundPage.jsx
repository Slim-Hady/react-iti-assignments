import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="not-found">
      <h1 className="not-found-code">404</h1>
      <h2>Page Not Found</h2>
      <p className="page-subtitle">The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">
        ← Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;