import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div
      name="home"
      className="relative w-full min-h-screen bg-gradient-to-b from-[var(--color-background)] via-white to-[#eef1f4]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#6a9ae6]/14 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-8 w-80 h-80 bg-[#8fb6d3]/14 blur-3xl rounded-full" />
      </div>
      {/* Container */}
      <div className="relative max-w-5xl mx-auto px-8 sm:px-10 flex flex-col justify-center min-h-screen py-24">
        <span className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[var(--color-muted)]">
          Front-End Engineer
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
          Aaron Bryant
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
          I create thoughtful, responsive interfaces with clean code and
          seamless user flows. My focus is designing digital experiences that
          feel intuitive, inclusive, and genuinely helpful.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            <button className="group relative overflow-hidden rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#6a9ae6]/25 transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/40">
              <span className="absolute inset-0 bg-gradient-to-r from-[#6a9ae6] via-[#5f8fd6] to-[#7fb6f4] transition-transform duration-300 group-hover:scale-110" />
              <span className="relative flex items-center justify-center gap-2">
                View Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <HiArrowNarrowRight className="text-lg" />
                </span>
              </span>
            </button>
          </Link>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            <button className="rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-semibold tracking-wide text-slate-700 shadow-sm transition-all duration-300 hover:border-[#6a9ae6] hover:text-[#6a9ae6] focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/30">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

