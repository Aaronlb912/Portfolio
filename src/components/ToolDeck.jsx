import React, { useEffect, useRef, useState } from "react";
import { tools } from "../data/data.js";

const buttonLayout = {
  up: { label: "▲", className: "col-start-2 row-start-1 h-12 w-12 bg-[#30363d] border-[#484f58] text-white" },
  down: { label: "▼", className: "col-start-2 row-start-3 h-12 w-12 bg-[#30363d] border-[#484f58] text-white" },
  left: { label: "◀", className: "col-start-1 row-start-2 h-12 w-12 bg-[#30363d] border-[#484f58] text-white" },
  right: { label: "▶", className: "col-start-3 row-start-2 h-12 w-12 bg-[#30363d] border-[#484f58] text-white" },
  A: { label: "A", className: "h-14 w-14 bg-[#6a9ae6] border-[#7fb6f4] text-[var(--color-bg)]" },
  B: { label: "B", className: "h-14 w-14 bg-[#e5534b] border-[#ff7b72] text-white" },
  X: { label: "X", className: "h-14 w-14 bg-[#3ddc84] border-[#56d364] text-[var(--color-bg)]" },
  Y: { label: "Y", className: "h-14 w-14 bg-[#ffd166] border-[#ffe082] text-[var(--color-bg)]" },
  lb: { label: "◀", className: "h-9 w-16 rounded-md bg-[#30363d] border-[#484f58] text-white text-base" },
  rb: { label: "▶", className: "h-9 w-16 rounded-md bg-[#30363d] border-[#484f58] text-white text-base" },
};

const getColumnCount = (width) => {
  if (width >= 1024) return 6;
  if (width >= 768) return 4;
  if (width >= 640) return 3;
  return 2;
};

const ToolDeck = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cols, setCols] = useState(2);
  const [pressedButton, setPressedButton] = useState(null);
  const inventoryRefs = useRef([]);

  const activeTool = tools[activeIndex];
  const total = tools.length;

  useEffect(() => {
    const updateCols = () => setCols(getColumnCount(window.innerWidth));
    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  const flashButton = (key) => {
    setPressedButton(key);
    setTimeout(() => setPressedButton(null), 150);
  };

  const goTo = (index) => {
    const next = Math.max(0, Math.min(index, total - 1));
    setActiveIndex(next);
    inventoryRefs.current[next]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "nearest",
    });
  };

  const navigate = (direction, key) => {
    flashButton(key);

    const row = Math.floor(activeIndex / cols);
    const col = activeIndex % cols;
    const lastRow = Math.floor((total - 1) / cols);
    let next = activeIndex;

    if (direction === "left" && col > 0) {
      next = activeIndex - 1;
    }

    if (direction === "right" && col < cols - 1 && activeIndex + 1 < total) {
      next = activeIndex + 1;
    }

    if (direction === "up" && row > 0) {
      next = (row - 1) * cols + col;
    }

    if (direction === "down" && row < lastRow) {
      const candidate = (row + 1) * cols + col;
      if (candidate < total) {
        next = candidate;
      } else {
        const lastInCol = lastRow * cols + col;
        if (lastInCol < total) next = lastInCol;
      }
    }

    if (next !== activeIndex) goTo(next);
  };

  return (
    <section name="tools" className="relative px-4 pt-8 pb-16 sm:px-6 sm:pb-20">
      <div className="mx-auto max-w-6xl">
        <p className="section-label">loadout station</p>
        <h2 className="mt-3 pixel-heading text-[var(--color-text)]">
          Browse the toolkit.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-[var(--color-muted)]">
          Use the D-pad to move through the inventory grid - left/right and
          up/down. You can also tap any item below.
        </p>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-md">
            <div className="relative rounded-[3rem] bg-[#21262d] px-8 py-10 shadow-2xl border border-[#30363d]">
              <div className="mb-6 flex justify-between px-2">
                <button
                  type="button"
                  onClick={() => navigate("left", "lb")}
                  aria-label="Move left"
                  className={`controller-btn ${pressedButton === "lb" ? "controller-btn-active" : ""} ${buttonLayout.lb.className}`}
                >
                  {buttonLayout.lb.label}
                </button>
                <button
                  type="button"
                  onClick={() => navigate("right", "rb")}
                  aria-label="Move right"
                  className={`controller-btn ${pressedButton === "rb" ? "controller-btn-active" : ""} ${buttonLayout.rb.className}`}
                >
                  {buttonLayout.rb.label}
                </button>
              </div>

              <div className="flex items-center justify-center gap-8 sm:gap-14">
                <div className="grid w-fit grid-cols-3 grid-rows-3 gap-1">
                  {(["up", "left", "right", "down"]).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => navigate(key, key)}
                      aria-label={`Move ${key}`}
                      className={`controller-btn ${pressedButton === key ? "controller-btn-active" : ""} ${buttonLayout[key].className}`}
                    >
                      {buttonLayout[key].label}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2" aria-hidden="true">
                  {["Y", "X", "B", "A"].map((key) => (
                    <div
                      key={key}
                      className={`controller-btn pointer-events-none opacity-90 ${buttonLayout[key].className}`}
                    >
                      {key}
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-6 text-center text-base text-[var(--color-muted)]">
                D-pad moves in the grid · {activeIndex + 1} / {total}
              </p>
              <p className="mt-2 text-center text-lg text-[var(--color-muted)]">
                AARON PAD PRO
              </p>
            </div>
          </div>

          <div className="tv-bezel rounded-xl p-2 sm:p-3">
            <div className="crt-screen min-h-[320px]">
              <div className="crt-content min-h-[280px]">
                <div className="animate-[tv-power-on_0.3s_ease-out]">
                  <p className="crt-badge">
                    TOOL {activeIndex + 1} OF {total}
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 p-2">
                      <img
                        src={activeTool.icon}
                        alt=""
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-3xl text-[var(--color-accent-glow)]">
                      {activeTool.name}
                    </h3>
                  </div>
                  <p className="mt-6 text-2xl leading-relaxed text-[var(--color-text)]">
                    {activeTool.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="section-label">full inventory</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {tools.map((tool, index) => (
              <button
                key={tool.id}
                ref={(el) => {
                  inventoryRefs.current[index] = el;
                }}
                type="button"
                onClick={() => goTo(index)}
                className={`flex flex-col items-center gap-2 rounded-lg border-2 p-4 transition-all duration-150 ${
                  activeIndex === index
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10 shadow-[0_0_20px_rgba(106,154,230,0.3)]"
                    : "border-[#30363d] bg-[var(--color-bg-panel)] hover:border-[var(--color-accent)]/50"
                }`}
              >
                <img src={tool.icon} alt="" className="h-10 w-10 object-contain" />
                <span className="text-lg text-[var(--color-text)]">{tool.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolDeck;
