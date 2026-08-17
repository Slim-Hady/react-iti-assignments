import { NavLink, Outlet } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `nav-link px-3 ${isActive ? "active fw-semibold" : ""}`;

function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-4">
          <NavLink to="/" className="navbar-brand fw-bold">
            📚 Slim Reads
          </NavLink>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Layout() {
  return (
    <div className="layout">
      <NavBar />
      <main className="content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Slim Reads — All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;