function BookCard({ book }) {
  const { title, author, genre, rating, price, stock, bestSeller } = book;

  return (
    <div className={`book-card ${stock === 0 ? "out" : ""}`}>
      {/* && operator: only render the badge when the book is a best seller */}
      {bestSeller && <span className="badge">Best Seller</span>}

      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <span className="book-genre">{genre}</span>

      <div className="book-meta">
        <span className="book-rating">★ {rating}</span>
        <span className="book-price">${price}</span>
      </div>

      {/* Ternary operator: conditional availability message */}
      {stock > 0 ? (
        <p className="in-stock">✓ In Stock ({stock} left)</p>
      ) : (
        <p className="out-of-stock">✗ Out of Stock</p>
      )}
    </div>
  );
}

export default BookCard;