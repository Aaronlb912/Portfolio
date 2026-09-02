import React from "react";

const ClassicFooter = () => {
  return (
    <footer className="border-t border-[var(--color-rule)] px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <p className="font-display text-sm font-medium text-[var(--color-text)]">
          Aaron Bryant
        </p>
        <p className="text-sm text-[var(--color-muted)]">
          © {new Date().getFullYear()} · Built in the browser
        </p>
      </div>
    </footer>
  );
};

export default ClassicFooter;
