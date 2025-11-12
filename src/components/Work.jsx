import React from "react";
import { data } from "../data/data.js";

const Work = ({ className }) => {
  const project = data;

  return (
    <div name="work" className={`w-full bg-white text-slate-700 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col gap-12">
        <div className="text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--color-muted)]">
            Work
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">
            Selected projects that blend polish with performance
          </h2>
          <div className="mt-5 h-1 w-20 md:w-24 rounded-full bg-[#6a9ae6] md:ml-0 mx-auto md:mx-0" />
          <p className="mt-6 text-base text-slate-600 max-w-2xl">
            A curated mix of recent engagements: platform redesigns, accessible
            marketing sites, and product experiments that ship fast and scale
            with teams.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.4em] text-slate-400">
            Live previews load below; some sites may restrict embedding.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid gap-10">
          {/* Grid Item */}
          {project.map((item, index) => {
            const canEmbed = item.url && item.embedPreview !== false;

            const previewContent = canEmbed ? (
              <div className="relative w-full min-h-[360px] h-full overflow-hidden rounded-3xl border border-white/80 bg-white shadow-sm shadow-slate-200 transition-transform duration-300 group-hover:-translate-y-1">
                <iframe
                  src={item.url}
                  title={`${item.name} live preview`}
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  allow="fullscreen"
                  referrerPolicy="no-referrer"
                ></iframe>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/90 via-white/40 to-transparent" />
                <div className="absolute top-3 right-3">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-white/90 bg-white/95 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#1f3f75] shadow-md transition hover:bg-white"
                  >
                    Open Site
                  </a>
                </div>
                <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f3f75] shadow-sm">
                  Live Preview
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />
              </div>
            ) : (
              <div
                className="relative flex justify-center items-center mx-auto content-div w-full min-h-[360px] h-full rounded-3xl border border-white/80 bg-gradient-to-br from-[#faf3ef] via-[#f3f5f7] to-[#f3f6f6] shadow-sm shadow-slate-200 transition-transform duration-300 group-hover:-translate-y-1"
                role={item.image ? undefined : "img"}
                aria-label={
                  item.image
                    ? undefined
                    : item.placeholderLabel || item.alt || item.name
                }
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.alt || item.name}
                    className={`${
                      item.name === "Pasteproof"
                        ? "max-w-[128px] max-h-[128px]"
                        : "w-full h-full"
                    } object-contain p-6 transition-transform duration-300 group-hover:scale-105`}
                  />
                ) : (
                  <span className="text-3xl font-semibold tracking-wide text-slate-500 uppercase">
                    {item.placeholderLabel || item.name}
                  </span>
                )}
                {item.url && !canEmbed && (
                  <div className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-500 shadow-sm">
                    Preview Disabled
                  </div>
                )}
              </div>
            );

            return (
              <div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-stretch group"
              >
                {/* Left Column: Preview */}
                {item.url && !canEmbed ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/35 rounded-3xl"
                    aria-label={`Open ${item.name}`}
                  >
                    {previewContent}
                  </a>
                ) : (
                  previewContent
                )}

                {/* Right Column: Description Box */}
                <div className="p-8 rounded-3xl bg-white/95 border border-slate-100 shadow-md shadow-slate-200 min-h-[360px] h-full transition-transform duration-300 group-hover:-translate-y-1 flex flex-col">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-900 hover:text-[#6a9ae6] hover:no-underline transition-colors duration-200"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </h2>

                  <p className="text-base text-slate-600 leading-relaxed">
                    {item.description
                      ? item.description.split("\n").map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex <
                              item.description.split("\n").length - 1 && <br />}
                          </React.Fragment>
                        ))
                      : "No description provided for this project."}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
