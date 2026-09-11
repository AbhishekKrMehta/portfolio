import "./Navigation.scss";

import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navigation" aria-label="Main navigation">
      <button
        className="navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul
        id="main-navigation"
        className={`navigation__list ${isOpen ? "navigation__list--open" : ""}`}
      >
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        <li>
          <a
            className="navigation__cv"
            href="/documents/Abhishek-Kumar-Mehta-CV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            CV ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
