import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const CaseStudyCard = ({ project, compact = false }) => {
  const hero = project.screenshots?.[0];

  return (
    <Link
      to={`/case-studies/${project.slug}`}
      className={`project-card group block ${compact ? "project-card-compact" : ""}`}
      style={{ backgroundColor: project.color }}
    >
      {hero && !compact && (
        <div className="mb-4 overflow-hidden rounded-xl border border-white/20 bg-black/15">
          <img
            src={hero.src}
            alt={hero.alt}
            className="h-36 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          {project.image ? (
            <img src={project.image} alt="" className="h-6 w-6 object-contain" />
          ) : (
            <span className="text-xs font-bold uppercase">
              {project.shortCode || project.name.slice(0, 2)}
            </span>
          )}
        </div>
        <HiArrowNarrowRight className="text-lg opacity-60 transition-opacity group-hover:opacity-100" />
      </div>

      <div className={compact ? "pt-2" : "pt-4"}>
        <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
          {project.category}
        </p>
        <h3 className="mt-2 text-2xl font-bold">{project.name}</h3>
        <p className={`leading-relaxed text-white/80 ${compact ? "mt-2 text-sm line-clamp-3" : "mt-3 text-sm"}`}>
          {project.description}
        </p>
        <div className={compact ? "mt-3 flex flex-wrap gap-2" : "mt-5 flex flex-wrap gap-2"}>
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
