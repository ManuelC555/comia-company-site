import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LanguageDropdown from "./LanguageDropdown";


export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleTheme = () => {
  document.body.classList.toggle("dark");
};


  return (
    <header className="navbar">
      <div className="nav-inner">

        <div className="nav-logo">
          <Link to="/" className="brand">
            <img src="/logo.png" alt="Comia Construction" className="logo" />
            <span>COMIA CONSTRUCTION</span>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          <NavLink onClick={() => setOpen(false)} className="nav-link" to="/">
            {t("nav.home")}
          </NavLink>

          <NavLink onClick={() => setOpen(false)} className="nav-link" to="/about">
            {t("nav.about")}
          </NavLink>

          <NavLink onClick={() => setOpen(false)} className="nav-link" to="/projects">
            {t("nav.projects")}
          </NavLink>

          <NavLink onClick={() => setOpen(false)} className="nav-link" to="/contact">
            {t("nav.contact")}
          </NavLink>

          <div className="nav-phone">
  <span className="phone-icon">📞</span>
  <a href="tel:+50933262490">+509 33262490</a>
</div>
<LanguageDropdown />
<button
  className="theme-toggle"
  onClick={() => document.body.classList.toggle("dark")}
  aria-label="Toggle dark mode"
>🌙
</button>

        </nav>

      </div>
    </header>
  );
}
