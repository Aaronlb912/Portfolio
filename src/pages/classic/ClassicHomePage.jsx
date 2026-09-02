import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import { data } from "../../data/data.js";
import InteractiveTechPills from "../../components/classic/InteractiveTechPills.jsx";
import CaseStudyCard from "../../components/classic/CaseStudyCard.jsx";
import ClassicSkills from "../../components/classic/ClassicSkills.jsx";

const ClassicHomePage = () => {
  const featured = data.slice(0, 3);

  return (
    <>
      <section className="px-6 pb-16 pt-6 sm:px-8 md:pb-24 md:pt-10">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
              01 / Front-End Engineer
            </p>
            <h1 className="mt-4 text-5xl font-medium tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-[4.75rem] lg:leading-[1.05]">
              Aaron Bryant
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-text)] sm:text-xl">
              I build the UI for product sites, design systems, and CMS
              platforms. Fast pages that work for people.
            </p>
            <p className="mt-5 text-sm text-[var(--color-muted)]">
              React · TypeScript · Drupal · accessibility
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-primary">
                See the work
                <HiArrowNarrowRight className="text-lg" />
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>
          </div>

          <div className="lg:pt-10">
            <InteractiveTechPills />
          </div>
        </div>
      </section>

      <section
        id="work"
        className="border-t border-[var(--color-rule)] px-6 py-16 sm:px-8 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                02 / Work
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
                Selected interfaces
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="classic-link hidden items-center gap-1 text-sm sm:inline-flex"
            >
              All case studies
              <HiArrowNarrowRight />
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
            {featured.map((project, index) => (
              <CaseStudyCard
                key={project.id}
                project={project}
                compact
                index={index}
              />
            ))}
          </div>

          <Link
            to="/case-studies"
            className="classic-link mt-8 inline-flex items-center gap-1 text-sm sm:hidden"
          >
            All case studies
            <HiArrowNarrowRight />
          </Link>
        </div>
      </section>

      <ClassicSkills />
    </>
  );
};

export default ClassicHomePage;
