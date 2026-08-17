import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <section className="book-list">
      {/* .map(): dynamically render a BookCard for every book */}
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
}

export default BookList;