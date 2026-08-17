import Header from "./components/Header";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import books from "./data/books";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header
        title="📚 Slim Reads"
        subtitle="Your favorite programming books, one click away."
      />

      {/* Ternary operator: friendly message if the list is empty */}
      {books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <p className="empty-message">No books available right now.</p>
      )}

      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;