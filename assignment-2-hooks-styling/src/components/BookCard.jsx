import styles from "./BookCard.module.css";

function BookCard({ book, onAddToCart }) {
  const { title, author, rating, price, stock, bestSeller } = book;

  return (
    <div className={`card h-100 border-0 ${styles.card}`}>
      <div className="card-body d-flex flex-column">
        {/* CSS Modules approach: classes from BookCard.module.css */}
        {bestSeller && <span className={`badge bg-warning text-dark ${styles.badge}`}>Best Seller</span>}

        <h5 className="card-title fw-bold">{title}</h5>
        <p className={`card-text text-secondary ${styles.author}`}>{author}</p>

        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="text-warning fw-semibold">★ {rating}</span>
          <span className={`fs-5 fw-bold ${styles.price}`}>${price}</span>
        </div>

        {/* Ternary operator: availability message */}
        <p className={`mb-3 ${stock > 0 ? styles.inStock : styles.outOfStock}`}>
          {stock > 0 ? `✓ In Stock (${stock} left)` : "✗ Out of Stock"}
        </p>

        <div className="mt-auto">
          <button
            className="btn btn-primary w-100"
            /* Inline Styling approach */
            style={{ borderRadius: "10px", fontWeight: 600 }}
            disabled={stock === 0}
            onClick={() => onAddToCart(book)}
          >
            {stock > 0 ? "Add to Cart" : "Sold Out"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;