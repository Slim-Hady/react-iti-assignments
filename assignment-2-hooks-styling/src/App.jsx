import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BookList from "./components/BookList";
import useLocalStorage from "./hooks/useLocalStorage";
import books from "./data/books";
import "./App.css";

function App() {
  // useState: controlled search input
  const [query, setQuery] = useState("");

  // Custom hook (useLocalStorage): cart count persisted on refresh
  const [cartCount, setCartCount] = useLocalStorage("cartCount", 0);

  // useState: dark mode
  const [dark, setDark] = useState(false);

  // useEffect: keep the page title in sync with the cart
  useEffect(() => {
    document.title = cartCount > 0 ? `Slim Reads — ${cartCount} in cart` : "Slim Reads";
  }, [cartCount]);

  // useEffect: apply/remove Bootstrap's dark theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", dark ? "dark" : "light");
    return () => document.documentElement.removeAttribute("data-bs-theme");
  }, [dark]);

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(query.toLowerCase())
  );

  const handleAddToCart = (book) => {
    setCartCount((count) => count + 1);
    alert(`"${book.title}" added to cart!`);
  };

  return (
    <>
      <NavBar
        cartCount={cartCount}
        dark={dark}
        onToggleDark={() => setDark((d) => !d)}
        onSearch={setQuery}
      />

      <Hero dark={dark}>
        <h1>Level up your coding books</h1>
        <p>Hand-picked programming books for every developer.</p>
      </Hero>

      <main className="container py-5">
        <BookList
          books={filteredBooks}
          bookCount={filteredBooks.length}
          onAddToCart={handleAddToCart}
        />
      </main>

      <footer className="footer text-center p-4">
        <p className="mb-0 text-secondary">© {new Date().getFullYear()} Slim Reads — All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;