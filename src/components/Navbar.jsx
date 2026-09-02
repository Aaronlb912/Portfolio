import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import CV from "../assets/front_end_resume.pdf";
import PortfolioSwitch from "./PortfolioSwitch.jsx";
import SocialLinks from "./SocialLinks.jsx";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const links = [
    { to: "home", label: "Start" },
    { to: "tools", label: "Tools" },
    { to: "work", label: "Games" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2e36] bg-[var(--color-bg)]/92 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex cursor-pointer items-center gap-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded border-2 border-[var(--color-green)] bg-[var(--color-bg-card)] text-lg text-[var(--color-green)] shadow-[0_0_10px_rgba(61,255,138,0.35)]">
            AB
          </span>
          <span className="hidden text-lg text-[var(--color-muted)] sm:inline">
            BRYANT.EXE
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(({ to, label }) => (
            <li key={to} className="px-0">
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="px-3 py-2 text-xl text-[var(--color-muted)] transition-colors hover:text-[var(--color-green)]"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="px-0 pl-2">
            <SocialLinks variant="retro" compact />
          </li>
          <li className="px-0 pl-2">
            <PortfolioSwitch />
          </li>
          <li className="px-0 pl-2">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn py-2"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          onClick={handleClick}
          className="text-lg text-[var(--color-muted)] lg:hidden"
          aria-label={nav ? "Close menu" : "Open menu"}
          aria-expanded={nav}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </nav>

      {nav && (
        <div className="border-t border-[#2a2e36] bg-[var(--color-bg-panel)] px-4 py-4 lg:hidden">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              onClick={handleClick}
              to={to}
              smooth={true}
              duration={500}
              className="block py-3 text-2xl text-[var(--color-text)]"
            >
              {label}
            </Link>
          ))}
          <div className="mt-4 border-t border-[#2a2e36] pt-4">
            <SocialLinks variant="retro" compact />
          </div>
          <div className="mt-4">
            <PortfolioSwitch className="justify-center" />
          </div>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block retro-btn"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
