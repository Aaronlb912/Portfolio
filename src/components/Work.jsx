import React from "react";
import { HiArrowNarrowRight, HiOutlineExternalLink } from "react-icons/hi";
import { data } from "../data/data.js";

const Work = () => {
  return (
    <div name="work" className="relative px-6 py-20 sm:px-8">
      <div className="blob -left-20 top-1/2 h-[300px] w-[300px] bg-[#6a9ae6]/10" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              Portfolio
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Featured work
            </h2>
          </div>
          <a
            href="#work"
            className="hidden items-center gap-1 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)] sm:flex"
          >
            All projects
            <HiArrowNarrowRight />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => {
            const hero = item.screenshots?.[0];
            const isLive = Boolean(item.url);
            const CardWrapper = isLive ? "a" : "div";
            const wrapperProps = isLive
              ? {
                  href: item.url,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={item.id}
                {...wrapperProps}
                className="project-card group"
                style={{ backgroundColor: item.color }}
              >
                {hero && (
                  <div className="mb-4 overflow-hidden rounded-lg border border-white/20 bg-black/20">
                    <img
                      src={hero.src}
                      alt={hero.alt}
                      className="h-32 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                    ) : (
                      <span className="text-xs font-bold uppercase">
                        {item.shortCode || item.name.slice(0, 2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {item.live === false && (
                      <span className="rounded-full bg-black/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                        Offline
                      </span>
                    )}
                    {isLive && (
                      <HiOutlineExternalLink className="text-lg opacity-60 transition-opacity group-hover:opacity-100" />
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    {item.description}
                  </p>
                  {item.highlights?.length > 0 && (
                    <ul className="mt-3 space-y-1 text-xs text-white/75">
                      {item.highlights.slice(0, 2).map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
