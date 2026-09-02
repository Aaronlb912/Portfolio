import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import CV from "../../assets/front_end_resume.pdf";
import SocialLinks from "../SocialLinks.jsx";

const ClassicNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((open) => !open);
  const close = () => setNav(false);

  useEffect(() => {
    if (!nav) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setNav(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nav]);

  const navClass = ({ isActive }) =>
    `rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
      isActive ? "bg-white/10 text-white" : "text-white/75 hover:text-white"
    }`;

  return (
    <header className="classic-nav fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6">
      <nav
        className="nav-pill mx-auto flex max-w-6xl items-center px-3 py-2 sm:px-5"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex-shrink-0 font-display text-lg font-medium tracking-tight text-white"
          onClick={close}
        >
          Aaron Bryant
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          <a
            href="/#work"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-white/75 transition-colors hover:text-white"
          >
            Work
          </a>
          <NavLink to="/case-studies" className={navClass}>
            Case Studies
          </NavLink>
          <a
            href="#contact"
            className="rounded-md px-3 py-1.5 text-sm font-medium text-white/75 transition-colors hover:text-white"
          >
            Contact
          </a>
          <SocialLinks variant="classic" compact className="ml-1" />
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
          className="ml-auto rounded-md p-2 text-white md:hidden"
          aria-label={nav ? "Close menu" : "Open menu"}
          aria-expanded={nav}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </nav>

      {nav && (
        <div className="nav-mobile-menu mx-auto mt-2 max-w-5xl px-5 py-4 md:hidden">
          <Link to="/" onClick={close} className="block py-2 text-base text-white/90">
            Home
          </Link>
          <a href="/#work" onClick={close} className="block py-2 text-base text-white/90">
            Work
          </a>
          <Link to="/case-studies" onClick={close} className="block py-2 text-base text-white/90">
            Case Studies
          </Link>
          <a href="#contact" onClick={close} className="block py-2 text-base text-white/90">
            Contact
          </a>
          <div className="mt-4 border-t border-white/10 pt-4">
            <SocialLinks variant="classic" compact />
          </div>
          <div className="mt-4 flex flex-col items-start gap-3">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
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
