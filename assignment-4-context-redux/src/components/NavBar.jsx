import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/slices/cartSlice";
import { useTheme } from "../context/ThemeContext";

function NavBar() {
  const cartCount = useSelector(selectCartCount);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`navbar ${theme === "dark" ? "dark" : "light"}`}>
      <span className="navbar-brand">📚 Slim Reads</span>
      <div className="navbar-actions">
        <span className="cart-badge">🛒 Cart: {cartCount}</span>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;