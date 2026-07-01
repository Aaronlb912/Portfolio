import React, { createContext, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-mode";

const PortfolioModeContext = createContext(null);

export const PortfolioModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "retro" || saved === "classic") {
        return saved;
      }
      return "classic";
    } catch {
      return "classic";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.portfolio = mode;
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore */
    }
  }, [mode]);

  const toggleMode = () =>
    setMode((current) => (current === "retro" ? "classic" : "retro"));

  return (
    <PortfolioModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PortfolioModeContext.Provider>
  );
};

export const usePortfolioMode = () => {
  const context = useContext(PortfolioModeContext);
  if (!context) {
    throw new Error("usePortfolioMode must be used within PortfolioModeProvider");
  }
  return context;
};
