import React from "react";
import { usePortfolioMode } from "../context/PortfolioModeContext.jsx";

const PortfolioSwitch = ({ className = "" }) => {
  const { mode, toggleMode } = usePortfolioMode();
  const isRetro = mode === "retro";

  return (
    <button
      type="button"
      onClick={toggleMode}
      className={`portfolio-switch ${className}`}
      aria-label={`Switch to ${isRetro ? "classic" : "arcade"} portfolio`}
      title={isRetro ? "Switch to classic portfolio" : "Switch to arcade portfolio"}
    >
      <span className={isRetro ? "opacity-60" : ""}>Classic</span>
      <span className="portfolio-switch-track" aria-hidden="true">
        <span
          className={`portfolio-switch-thumb ${isRetro ? "is-retro" : "is-classic"}`}
        />
      </span>
      <span className={!isRetro ? "opacity-60" : ""}>Arcade</span>
    </button>
  );
};

export default PortfolioSwitch;
