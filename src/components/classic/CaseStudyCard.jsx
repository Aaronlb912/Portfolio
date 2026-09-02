import React from "react";
import { Link } from "react-router-dom";

const CaseStudyCard = ({ project, compact = false, index = 0 }) => {
  const hero = project.screenshots?.[0];

  return (
    <Link
      to={`/case-studies/${project.slug}`}
      className="project-card work-reveal group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div
        className={`project-card-shot ${compact ? "h-44 sm:h-48" : "h-48 sm:h-56"}`}
        style={{ borderTop: `3px solid ${project.color}` }}
      >
        {hero ? (
          <img src={hero.src} alt={hero.alt} />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[var(--color-muted)]">
            {project.name}
          </div>
        )}
      </div>

      <div className={compact ? "flex flex-1 flex-col p-4" : "flex flex-1 flex-col p-5"}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
          {project.category}
        </p>
        <h3 className={`font-medium ${compact ? "mt-1.5 text-xl" : "mt-2 text-2xl"}`}>
          {project.name}
        </h3>
        <p
          className={`leading-relaxed text-[var(--color-muted)] ${
            compact ? "mt-2 line-clamp-2 text-sm" : "mt-3 text-sm"
          }`}
        >
          {project.description}
        </p>
        <div className={`mt-auto flex flex-wrap gap-1.5 ${compact ? "pt-3" : "pt-4"}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
