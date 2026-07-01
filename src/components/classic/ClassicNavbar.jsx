import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import CV from "../../assets/front_end_resume.pdf";
import PortfolioSwitch from "../PortfolioSwitch.jsx";

const ClassicNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navClass = ({ isActive }) =>
    `rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
      isActive ? "bg-white/10 text-white" : "text-white/80 hover:text-white"
    }`;

  const links = [{ to: "/case-studies", label: "Case Studies" }];

  return (
    <header className="classic-nav fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6">
      <nav className="nav-pill mx-auto flex max-w-5xl items-center px-4 py-2 sm:px-6">
        <Link to="/" className="flex-shrink-0" onClick={() => setNav(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-white">
            AB
          </span>
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className={navClass}>
              {label}
            </NavLink>
          ))}
          <a
            href="#contact"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            Contact
          </a>
          <PortfolioSwitch className="ml-2" />
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-2 py-2 text-sm"
          >
            Resume
          </a>
        </div>

        <button
          onClick={handleClick}
          className="ml-auto text-white md:hidden"
          aria-label="Toggle menu"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </nav>

      {nav && (
        <div className="nav-mobile-menu mx-auto mt-2 max-w-5xl px-4 py-4 text-right md:hidden">
          <Link to="/" onClick={handleClick} className="block py-2 text-base text-white/90">
            Home
          </Link>
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={handleClick}
              className="block py-2 text-base text-white/90"
            >
              {label}
            </Link>
          ))}
          <a href="#contact" onClick={handleClick} className="block py-2 text-base text-white/90">
            Contact
          </a>
          <div className="mt-4 flex flex-col items-end gap-3 border-t border-white/10 pt-4">
            <PortfolioSwitch />
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary justify-center text-sm"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default ClassicNavbar;
