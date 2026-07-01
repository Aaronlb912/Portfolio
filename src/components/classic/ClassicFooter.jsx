import React from "react";

const ClassicFooter = () => {
  return (
    <footer className="border-t border-black/5 px-6 py-8 text-center sm:px-8">
      <p className="text-sm text-[var(--color-muted)]">
        © {new Date().getFullYear()} Aaron Bryant. Built with React & Tailwind.
      </p>
    </footer>
  );
};

export default ClassicFooter;
