import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const bootLines = [
  { text: "> AARON_OS v2.6 booting...", delay: 0 },
  { text: "> Loading front-end modules...", delay: 400 },
  { text: "> Mounting React runtime... OK", delay: 900 },
  { text: "> Initializing design systems... OK", delay: 1300 },
  { text: "", delay: 1700 },
  { text: "  HELLO, PLAYER ONE", delay: 1900, highlight: true },
  { text: "", delay: 2300 },
  { text: "  I'm Aaron Bryant", delay: 2500, highlight: true },
  { text: "  Front-End Engineer", delay: 2900 },
  { text: "", delay: 3300 },
  {
    text: "  I build thoughtful, responsive interfaces",
    delay: 3500,
  },
  {
    text: "  with clean code and seamless user flows.",
    delay: 3800,
  },
  { text: "", delay: 4200 },
  { text: "  Ready to play.", delay: 4400, accent: true },
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
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative w-full max-w-3xl">
        <div className="tv-bezel rounded-2xl p-3 sm:p-4">
          <div className="crt-screen min-h-[320px] sm:min-h-[360px]">
            <div className="crt-content flex min-h-[280px] flex-col justify-between sm:min-h-[320px]">
              <div>
                <p className="crt-badge">
                  PLAYER 1 · INSERT COIN
                </p>
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
                        <span className="blink text-[var(--color-accent)]">_</span>
                      )}
                    </p>
                  ))}
                </div>
              </div>

              {bootComplete && (
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <Link to="tools" smooth={true} duration={600}>
                    <button className="retro-btn retro-btn-active">
                      ▶ Start
                    </button>
                  </Link>
                  <Link to="work" smooth={true} duration={600}>
                    <button className="retro-btn">Case Studies</button>
                  </Link>
                  <span className="text-lg text-[var(--color-muted)] blink">
                    press start
                  </span>
                </div>
              )}
            </div>
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
