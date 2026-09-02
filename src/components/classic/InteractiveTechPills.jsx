import React, { useCallback, useState } from "react";
import { tools } from "../../data/data.js";

const heroToolIds = [
  "react",
  "typescript",
  "nextjs",
  "tailwind",
  "drupal",
  "figma",
  "node",
  "supabase",
];

const heroTools = heroToolIds
  .map((id) => tools.find((tool) => tool.id === id))
  .filter(Boolean);

const InteractiveTechPills = () => {
  const [selected, setSelected] = useState(heroTools[0]);
  const handleSelect = useCallback((tool) => setSelected(tool), []);

  return (
    <div className="stack-panel">
      <div className="stack-panel-chrome">
        <span>interface.stack</span>
        <span>spec</span>
      </div>

      <div className="flex flex-wrap gap-2 p-4">
        {heroTools.map((tool) => (
          <button
            key={tool.id}
            type="button"
            onClick={() => handleSelect(tool)}
            aria-pressed={selected?.id === tool.id}
            className="stack-chip"
          >
            <img
              src={tool.icon}
              alt=""
              className="h-4 w-4 object-contain"
            />
            {tool.name}
          </button>
        ))}
      </div>

      {selected && (
        <div className="border-t border-[var(--color-rule)] px-4 py-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]">
            {selected.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
            {selected.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default InteractiveTechPills;
