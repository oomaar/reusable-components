import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { navbarLinks } from "./navbarLinks";

export function Navbar() {
  return (
    <nav className="navbar-nav soft-shadow">
      <ul className="navbar-list">
        {navbarLinks.map((link) => (
          <li key={link.id}>
            <NavLink
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
              to={link.route}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
