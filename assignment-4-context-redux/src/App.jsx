import { useState } from "react";
import NavBar from "./components/NavBar";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import { useTheme } from "./context/ThemeContext";
import "./App.css";

function App() {
  const { theme } = useTheme();
  const [view, setView] = useState("products");

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <div className="tabs">
        <button
          className={`tab ${view === "products" ? "active" : ""}`}
          onClick={() => setView("products")}
        >
          Products
        </button>
        <button
          className={`tab ${view === "cart" ? "active" : ""}`}
          onClick={() => setView("cart")}
        >
          Cart
        </button>
      </div>
      <main>{view === "products" ? <ProductsPage /> : <CartPage />}</main>
    </div>
  );
}

export default App;