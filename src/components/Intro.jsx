import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const bootLines = [
  { text: "> plugging in the cabinet...", delay: 0 },
  { text: "> warming up the tube... OK", delay: 500 },
  { text: "> high scores: still loading", delay: 1000 },
  { text: "", delay: 1400 },
  { text: "  PLAYER 1 HAS ENTERED", delay: 1700, highlight: true },
  { text: "", delay: 2100 },
  { text: "  Aaron Bryant", delay: 2300, highlight: true },
  { text: "  Front-End Engineer", delay: 2700 },
  { text: "", delay: 3100 },
  { text: "  I build the UI for product sites,", delay: 3400 },
  { text: "  design systems, and CMS platforms.", delay: 3800 },
  { text: "", delay: 4200 },
  { text: "  Insert coin.", delay: 4500, accent: true },
];

const Intro = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [bootComplete, setBootComplete] = useState(false);

  useEffect(() => {
    const timers = bootLines.map((line, index) =>
      setTimeout(() => {
        setVisibleCount(index + 1);
        if (index === bootLines.length - 1) {
          setTimeout(() => setBootComplete(true), 600);
        }
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section
      name="home"
      className="relative flex items-center justify-center px-4 py-12 sm:py-16 grid-floor"
    >
      <div className="relative w-full max-w-3xl">
        <div className="arcade-marquee">
          <p className="text-lg sm:text-xl">Bryant // Front-End Engineer</p>
        </div>
        <div className="tv-bezel rounded-b-2xl p-4 sm:p-5">
          <div className="tv-screws" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="mb-3 flex items-center justify-between px-1">
            <span className="text-base text-[var(--color-muted)]">BRYANT-TV</span>
            <span className="flex items-center gap-2 text-base text-[var(--color-green)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-green)] shadow-[0_0_8px_var(--color-green)]" />
              ON
            </span>
          </div>
          <div className="crt-screen crt-on min-h-[320px] sm:min-h-[360px]">
            <div className="crt-content flex min-h-[280px] flex-col justify-between sm:min-h-[320px]">
              <div>
                <p className="crt-badge">PLAYER 1 · INSERT COIN</p>
                <div className="mt-6 space-y-2 font-vt323 text-xl sm:text-2xl">
                  {bootLines.slice(0, visibleCount).map((line, i) => (
                    <p
                      key={i}
                      className={
                        line.highlight
                          ? "text-[var(--color-accent-glow)] text-2xl sm:text-3xl"
                          : line.accent
                            ? "text-[var(--color-green)]"
                            : "text-[var(--color-muted)]"
                      }
                    >
                      {line.text}
                      {i === visibleCount - 1 && !bootComplete && (
                        <span className="blink text-[var(--color-green)]">_</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {bootComplete && (
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link to="tools" smooth={true} duration={600}>
                    <button className="retro-btn retro-btn-active">▶ Start</button>
                  </Link>
                  <Link to="work" smooth={true} duration={600}>
                    <button className="retro-btn">Case Studies</button>
                  </Link>
                  <span className="text-lg text-[var(--color-amber)] blink">
                    press start
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="mx-auto mt-3 h-2 w-28 rounded-b bg-[#2a2e36]" />
          <div className="mx-auto mt-1 flex justify-center gap-1">
            {[...Array(7)].map((_, i) => (
              <span key={i} className="h-1 w-5 rounded-sm bg-[#1a1c22]" />
            ))}
          </div>
        </div>

        <p className="mt-4 text-center text-lg text-[var(--color-muted)]">
          scroll to explore the arcade ▼
        </p>
      </div>
    </section>
  );
};

export default Intro;
