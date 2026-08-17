import BookCard from "./BookCard";

function BookList({ books, bookCount = 0, onAddToCart }) {
  if (bookCount === 0) {
    return <p className="text-center text-secondary py-5 my-5 fs-5">No books match your search.</p>;
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      {books.map((book) => (
        <div className="col" key={book.id}>
          <BookCard book={book} onAddToCart={onAddToCart} />
        </div>
      ))}
    </div>
  );
}

export default BookList;