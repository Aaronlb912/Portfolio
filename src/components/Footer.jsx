import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[#30363d] px-4 py-8 text-center">
      <p className="text-lg text-[var(--color-muted)]">
        © {new Date().getFullYear()} AARON BRYANT - GAME OVER? PRESS START
      </p>
    </footer>
  );
};

export default Footer;
