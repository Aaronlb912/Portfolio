import React, { useState, useCallback } from "react";
import { data } from "../data/data.js";

const Cartridge = ({ project, isSelected, isInserted, onSelect }) => {
  return (
    <button
      onClick={() => onSelect(project.id)}
      className={`cartridge flex-shrink-0 ${isSelected ? "cartridge-selected" : ""} ${isInserted ? "cartridge-inserted" : ""}`}
      aria-label={`Select ${project.name} cartridge`}
      aria-pressed={isSelected}
    >
      <div
        className="relative overflow-hidden rounded-t-lg rounded-b-sm border-2 border-[#484f58]"
        style={{
          background: `linear-gradient(180deg, ${project.labelColor} 0%, ${project.color} 40%, ${project.color} 100%)`,
          height: "110px",
        }}
      >
        <div className="mx-2 mt-2 rounded-sm border border-white/30 bg-white/90 px-1 py-2 text-center shadow-sm">
          {project.image ? (
            <img
              src={project.image}
              alt=""
              className="mx-auto h-8 w-8 object-contain"
            />
          ) : (
            <span className="text-sm font-bold text-[var(--color-bg)]">
              {project.shortCode}
            </span>
          )}
        </div>
        <p className="mt-1 px-1 text-center text-sm leading-tight text-white drop-shadow">
          {project.name}
        </p>
        <div className="absolute bottom-8 left-0 right-0 h-px bg-black/20" />
        <div className="absolute bottom-10 left-0 right-0 h-px bg-white/10" />
      </div>
      <div className="flex justify-center gap-[2px] rounded-b bg-[#c9a227] px-1 py-1">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="h-3 w-[3px] rounded-sm bg-[#e8c547]" />
        ))}
      </div>
    </button>
  );
};

const TvScreen = ({ project, isLoading, isEmpty }) => {
  const [view, setView] = useState("info");
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = project?.screenshots ?? [];
  const hero = photos[0];

  const tabClass = (active) =>
    `rounded border px-3 py-1 text-lg transition-colors ${
      active
        ? "border-[var(--color-accent)] bg-[var(--color-accent)]/20 text-[var(--color-accent-glow)]"
        : "border-[#484f58] text-[var(--color-muted)] hover:border-[var(--color-accent)]/50"
    }`;

  const prevPhoto = () =>
    setPhotoIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const nextPhoto = () =>
    setPhotoIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  if (isEmpty) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center text-center sm:min-h-[340px]">
        <p className="retro-label blink">
          NO CARTRIDGE
        </p>
        <p className="mt-4 text-xl text-[var(--color-muted)]">
          Insert a game to begin
        </p>
        <div
          className="mt-6 h-16 w-16 rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            animation: "static-flicker 0.15s infinite",
          }}
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[280px] flex-col items-center justify-center sm:min-h-[340px]">
        <p className="crt-badge">
          LOADING...
        </p>
        <div className="mt-4 w-48 overflow-hidden rounded border border-[var(--color-green)]/30">
          <div
            className="h-2 bg-[var(--color-green)]"
            style={{ animation: "loading-bar 1.2s ease-out forwards" }}
          />
        </div>
        <p className="mt-4 text-lg text-[var(--color-muted)] blink">
          reading cartridge...
        </p>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="tv-power-on">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="crt-badge">NOW PLAYING</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setView("info")}
            className={tabClass(view === "info")}
          >
            Info
          </button>
          {photos.length > 1 && (
            <button
              type="button"
              onClick={() => setView("photos")}
              className={tabClass(view === "photos")}
            >
              Photos
            </button>
          )}
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={tabClass(false)}
            >
              Live ↗
            </a>
          ) : (
            <button
              type="button"
              disabled
              className={`${tabClass(false)} cursor-not-allowed opacity-40`}
              title={project.live === false ? "Site no longer live" : undefined}
            >
              {project.live === false ? "Offline" : "Live"}
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-start gap-4">
        {project.image && view === "info" && (
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded bg-white/10 p-2">
            <img
              src={project.image}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
          </div>
        )}
        <div>
          <h3 className="text-3xl text-[var(--color-accent-glow)]">
            {project.name}
          </h3>
          <p className="mt-1 text-lg text-[var(--color-amber)]">
            {project.category.toUpperCase()}
          </p>
        </div>
      </div>

      {view === "info" && (
        <div className="mt-5">
          {hero && (
            <button
              type="button"
              onClick={() => photos.length > 1 && setView("photos")}
              className={`group mb-5 block w-full overflow-hidden rounded-lg border-2 border-[#484f58] bg-black/30 text-left transition-colors ${
                photos.length > 1
                  ? "hover:border-[var(--color-accent)] cursor-pointer"
                  : "cursor-default"
              }`}
            >
              <img
                src={hero.src}
                alt={hero.alt}
                className="max-h-56 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] sm:max-h-64"
              />
              {photos.length > 1 && (
                <p className="px-3 py-2 text-base text-[var(--color-muted)]">
                  Click to browse {photos.length} page screenshots →
                </p>
              )}
            </button>
          )}

          <p className="text-2xl leading-relaxed text-[var(--color-text)]">
            {project.description}
          </p>

          {project.highlights?.length > 0 && (
            <ul className="mt-4 space-y-2 text-xl text-[var(--color-muted)]">
              {project.highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[var(--color-green)]">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-[var(--color-accent)]/40 px-2 py-0.5 text-lg text-[var(--color-accent)]"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="retro-btn mt-6 inline-flex"
            >
              ▶ Launch Site
            </a>
          )}
        </div>
      )}

      {view === "photos" && photos.length > 0 && (
        <div className="mt-5">
          <div className="relative overflow-hidden rounded-lg border-2 border-[#484f58] bg-black/40">
            <img
              src={photos[photoIndex].src}
              alt={photos[photoIndex].alt}
              className="max-h-72 w-full object-contain sm:max-h-80"
            />
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded border border-[#484f58] bg-[var(--color-bg)]/90 px-3 py-2 text-xl text-[var(--color-text)] hover:border-[var(--color-accent)]"
                  aria-label="Previous screenshot"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded border border-[#484f58] bg-[var(--color-bg)]/90 px-3 py-2 text-xl text-[var(--color-text)] hover:border-[var(--color-accent)]"
                  aria-label="Next screenshot"
                >
                  ▶
                </button>
              </>
            )}
          </div>

          <p className="mt-2 text-center text-lg text-[var(--color-muted)]">
            {photoIndex + 1} / {photos.length} - {photos[photoIndex].alt}
          </p>

          {photos.length > 1 && (
            <div className="mt-3 flex justify-center gap-2 overflow-x-auto pb-1">
              {photos.map((shot, index) => (
                <button
                  key={shot.alt}
                  type="button"
                  onClick={() => setPhotoIndex(index)}
                  className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded border-2 transition-colors ${
                    index === photoIndex
                      ? "border-[var(--color-accent)]"
                      : "border-[#484f58] opacity-70 hover:opacity-100"
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
          )}
        </div>
      )}
    </div>
  );
};

const GameRoom = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [insertedId, setInsertedId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const insertedProject = data.find((p) => p.id === insertedId);
  const selectedProject = data.find((p) => p.id === selectedId);

  const insertCartridge = useCallback(() => {
    if (!selectedId || isLoading) return;

    setIsLoading(true);
    setInsertedId(null);

    setTimeout(() => {
      setInsertedId(selectedId);
      setIsLoading(false);
    }, 1200);
  }, [selectedId, isLoading]);

  const ejectCartridge = () => {
    setInsertedId(null);
    setSelectedId(null);
  };

  return (
    <section name="work" className="relative px-4 py-20 sm:px-6 grid-floor">
      <div className="mx-auto max-w-5xl">
        <p className="section-label">case study arcade</p>
        <h2 className="mt-3 pixel-heading text-[var(--color-text)]">
          Pick a cartridge. Insert. Play.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-[var(--color-muted)]">
          Each cart is a project I've shipped. Insert one, then browse the
          case study, page screenshots, or visit the live site.
        </p>

        <div className="mt-12">
          <div className="tv-bezel mx-auto max-w-4xl rounded-2xl p-3 sm:p-5">
            <div className="mb-2 flex items-center justify-between px-2">
              <span className="text-base text-[var(--color-muted)]">
                BRYANT-TV
              </span>
              <div className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${insertedId ? "bg-[var(--color-green)] shadow-[0_0_8px_var(--color-green)]" : "bg-[#484f58]"}`}
                />
                <span className="text-base text-[var(--color-muted)]">
                  {insertedId ? "ON" : "STBY"}
                </span>
              </div>
            </div>

            <div className="crt-screen">
              <div className="crt-content">
                <TvScreen
                  key={insertedId ?? "empty"}
                  project={insertedProject}
                  isLoading={isLoading}
                  isEmpty={!insertedId && !isLoading}
                />
              </div>
            </div>

            <div className="mx-auto mt-3 h-3 w-32 rounded-b-lg bg-[#30363d]" />
            <div className="mx-auto h-2 w-48 rounded-b-xl bg-[#21262d]" />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <div className="console-body rounded-2xl border border-[#484f58] p-5 sm:p-6">
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
              <div className="flex flex-col items-center">
                <div
                  className={`relative w-20 rounded-b-lg border-2 border-[#484f58] bg-[#0d1117] transition-all duration-300 ${selectedProject && !isLoading ? "h-16 shadow-[inset_0_0_20px_rgba(106,154,230,0.3)]" : "h-12"}`}
                >
                  {selectedProject && !insertedId && !isLoading && (
                    <div
                      className="absolute inset-x-1 top-0 h-8 rounded-b-sm"
                      style={{
                        background: `linear-gradient(180deg, ${selectedProject.labelColor}, ${selectedProject.color})`,
                      }}
                    />
                  )}
                  {insertedProject && !isLoading && (
                    <div
                      className="absolute inset-x-1 top-0 h-10 rounded-b-sm cartridge-inserted"
                      style={{
                        background: `linear-gradient(180deg, ${insertedProject.labelColor}, ${insertedProject.color})`,
                      }}
                    />
                  )}
                </div>
                <span className="mt-2 text-base text-[var(--color-muted)]">
                  CARTRIDGE SLOT
                </span>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={insertCartridge}
                    disabled={!selectedId || isLoading}
                    className={`retro-btn ${!selectedId || isLoading ? "opacity-40 cursor-not-allowed" : ""}`}
                  >
                    ⬇ Insert
                  </button>
                  <button
                    onClick={ejectCartridge}
                    disabled={!insertedId || isLoading}
                    className={`retro-btn ${!insertedId || isLoading ? "opacity-40 cursor-not-allowed" : ""}`}
                  >
                    ⬆ Eject
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-[#484f58] bg-[#30363d]"
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-3 w-3 rounded-full ${isLoading ? "bg-[var(--color-amber)] animate-pulse" : insertedId ? "bg-[var(--color-green)]" : "bg-[#484f58]"}`}
                    />
                    <span className="text-base text-[var(--color-muted)]">
                      POWER
                    </span>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <p className="text-xl text-[var(--color-accent)]">
                  BRYANT
                </p>
                <p className="text-base text-[var(--color-muted)]">
                  ENTERTAINMENT
                </p>
                <p className="text-base text-[var(--color-muted)]">
                  SYSTEM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="section-label text-center">game shelf</p>
          <div className="mt-4 rounded-xl border-2 border-[#30363d] bg-[var(--color-bg-panel)] p-4 sm:p-6">
            <div className="flex gap-4 overflow-x-auto pb-2 justify-center sm:justify-start">
              {data.map((project) => (
                <Cartridge
                  key={project.id}
                  project={project}
                  isSelected={selectedId === project.id}
                  isInserted={insertedId === project.id && !isLoading}
                  onSelect={setSelectedId}
                />
              ))}
            </div>
            <p className="mt-4 text-center text-xl text-[var(--color-muted)]">
              {selectedProject
                ? `${selectedProject.name} selected - press Insert`
                : "Tap a cartridge to select"}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default GameRoom;
