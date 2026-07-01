import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/data.js";
import CaseStudyCard from "../../components/classic/CaseStudyCard.jsx";

const CaseStudiesPage = () => {
  return (
    <section className="relative px-6 py-12 sm:px-8 md:py-16">
      <div className="blob -right-16 top-0 h-[280px] w-[280px] bg-[#6a9ae6]/15" />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          Portfolio
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Case studies
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          Selected projects across e-commerce, SaaS, and enterprise - with
          screenshots, highlights, and live links where available.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((project) => (
            <CaseStudyCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12">
          <Link to="/" className="text-sm font-medium text-[var(--color-accent)] hover:underline">
            ← Back home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPage;
