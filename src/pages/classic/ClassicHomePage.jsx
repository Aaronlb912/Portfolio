import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { data } from "../../data/data.js";
import InteractiveTechPills from "../../components/classic/InteractiveTechPills.jsx";
import CaseStudyCard from "../../components/classic/CaseStudyCard.jsx";

const ClassicHomePage = () => {
  const featured = data.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden px-6 pb-10 pt-4 sm:px-8 md:pb-16">
        <div className="blob -top-32 -left-32 h-[500px] w-[500px] bg-[#6a9ae6]/20" />
        <div className="blob top-1/4 -right-32 h-[400px] w-[400px] bg-[#8fb6d3]/25" />
        <div className="blob-shape -left-[7%] top-1/2 hidden h-[90%] w-[58%] -translate-y-1/2 text-[#d4c4f0] opacity-20 lg:block" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Aaron Bryant
            </h1>
            <p className="mt-6 text-xl font-medium text-[var(--color-text)] sm:text-2xl">
              Building thoughtful interfaces from idea to launch.
            </p>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[var(--color-muted)] sm:text-lg lg:mx-0">
              I create responsive, accessible web experiences with clean code and
              seamless user flows - from enterprise CMS platforms to product builds,
              with a focus on design and performance.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="#contact" className="btn-primary">
                Get in touch
                <HiArrowNarrowRight className="text-lg" />
              </a>
              <Link to="/case-studies" className="btn-secondary">
                See case studies
              </Link>
            </div>
          </div>

          <div className="relative lg:min-h-[500px]">
            <InteractiveTechPills />
          </div>
        </div>
      </section>

      <section className="relative px-6 py-12 sm:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured work
            </h2>
            <Link
              to="/case-studies"
              className="hidden items-center gap-1 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] sm:flex"
            >
              All case studies
              <HiArrowNarrowRight />
            </Link>
          </div>

          <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
            {featured.map((project) => (
              <CaseStudyCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClassicHomePage;
