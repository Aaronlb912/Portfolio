import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data.js";
import CaseStudyCard from "../../components/classic/CaseStudyCard.jsx";

const CaseStudiesPage = () => {
  return (
    <section className="px-6 py-12 sm:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-medium tracking-tight sm:text-5xl">
          Case studies
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Selected projects across civic tech, SaaS, and enterprise, with
          screenshots, highlights, and live links where available.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((project, index) => (
            <CaseStudyCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12">
          <Link to="/" className="classic-link text-sm">
            ← Back home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
