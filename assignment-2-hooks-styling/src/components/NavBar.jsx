function NavBar({ cartCount, dark, onToggleDark, onSearch }) {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top ${dark ? "navbar-dark bg-dark" : "navbar-light bg-white"} shadow-sm`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
          📚 Slim Reads
        </a>

        <div className="d-flex align-items-center gap-2 order-lg-2">
          {/* Inline Styling approach */}
          <button
            className="btn btn-outline-secondary btn-sm"
            style={{ borderRadius: "50px", paddingInline: "14px" }}
            onClick={onToggleDark}
            aria-label="Toggle dark mode"
          >
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <span className="badge text-bg-primary rounded-pill px-3 py-2">
            🛒 Cart: {cartCount}
          </span>
        </div>

        <div className="collapse navbar-collapse order-lg-1">
          <form className="d-flex flex-grow-1 ms-lg-4" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search books by title or author..."
              aria-label="Search"
              onChange={(e) => onSearch(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;