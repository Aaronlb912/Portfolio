import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { HiArrowNarrowRight, HiOutlineExternalLink } from "react-icons/hi";
import { data } from "../../data/data.js";

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const project = data.find((item) => item.slug === slug);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!project) {
    return <Navigate to="/case-studies" replace />;
  }

  const photos = project.screenshots ?? [];
  const currentIndex = data.findIndex((item) => item.slug === slug);
  const nextProject = data[(currentIndex + 1) % data.length];

  return (
    <article className="relative px-6 py-12 sm:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
          <Link to="/" className="hover:text-[var(--color-accent)]">
            Aaron Bryant
          </Link>
          <span>/</span>
          <Link to="/case-studies" className="hover:text-[var(--color-accent)]">
            Case Studies
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text)]">{project.name}</span>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
          {project.category}
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="classic-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View live site
              <HiOutlineExternalLink />
            </a>
          ) : (
            <span className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[var(--color-muted)]">
              Site offline
            </span>
          )}
        </div>

        {photos.length > 0 && (
          <div className="mt-12">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              <img
                src={photos[photoIndex].src}
                alt={photos[photoIndex].alt}
                className="max-h-[480px] w-full object-contain object-top"
              />
            </div>
            {photos.length > 1 && (
              <>
                <p className="mt-3 text-center text-sm text-[var(--color-muted)]">
                  {photoIndex + 1} / {photos.length} - {photos[photoIndex].alt}
                </p>
                <div className="mt-4 flex justify-center gap-2 overflow-x-auto pb-1">
                  {photos.map((shot, index) => (
                    <button
                      key={shot.alt}
                      type="button"
                      onClick={() => setPhotoIndex(index)}
                      className={`h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                        index === photoIndex
                          ? "border-[var(--color-accent)]"
                          : "border-black/10 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={shot.src}
                        alt=""
                        className="h-full w-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {project.highlights?.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-bold">Highlights</h2>
            <ul className="mt-5 space-y-3">
              {project.highlights.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-[var(--color-muted)]"
                >
                  <span className="mt-1 text-[var(--color-accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mt-16 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-muted)]">
            Next
          </p>
          <Link
            to={`/case-studies/${nextProject.slug}`}
            className="mt-3 group flex items-center justify-between gap-4"
          >
            <div>
              <h3 className="text-xl font-bold group-hover:text-[var(--color-accent)]">
                {nextProject.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {nextProject.category}
              </p>
            </div>
            <HiArrowNarrowRight className="text-xl transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CaseStudyDetailPage;
