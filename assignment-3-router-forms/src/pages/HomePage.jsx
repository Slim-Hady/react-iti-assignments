const features = [
  "Hand-picked programming books",
  "Daily new arrivals",
  "Free shipping over $30",
  "30-day money-back guarantee",
];

function HomePage() {
  return (
    <section className="home">
      <h1 className="page-title">Welcome to Slim Reads 📚</h1>
      <p className="page-subtitle">
        The best place to discover and buy programming books that actually make you better.
      </p>

      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            ✓ {feature}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage;