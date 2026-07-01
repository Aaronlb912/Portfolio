import React, { useCallback, useMemo, useRef, useState } from "react";
import { tools } from "../../data/data.js";

const pillColors = ["bg-block-lime", "bg-block-pink", "bg-block-lilac"];

const buildLayouts = (count) => {
  const columns = 4;
  return Array.from({ length: count }, (_, index) => {
    const row = Math.floor(index / columns);
    const col = index % columns;
    return {
      top: `${4 + row * 21}%`,
      left: `${6 + col * 23}%`,
    };
  });
};

const heroTools = tools.filter((t) =>
  [
    "react",
    "typescript",
    "nextjs",
    "node",
    "tailwind",
    "firebase",
    "drupal",
    "figma",
    "stripe",
    "supabase",
    "cursor",
    "vercel",
  ].includes(t.id)
);

const DraggablePill = ({ tool, layout, colorClass, isSelected, onSelect }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, ox: 0, oy: 0 });
  const moved = useRef(false);

  const onPointerDown = (event) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    moved.current = false;
    dragStart.current = {
      x: event.clientX,
      y: event.clientY,
      ox: offset.x,
      oy: offset.y,
    };
  };

  const onPointerMove = (event) => {
    if (!isDragging) return;
    const dx = event.clientX - dragStart.current.x;
    const dy = event.clientY - dragStart.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) moved.current = true;
    setOffset({ x: dragStart.current.ox + dx, y: dragStart.current.oy + dy });
  };

  const onPointerUp = (event) => {
    if (!moved.current) onSelect(tool);
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      className="absolute"
      style={{
        top: layout.top,
        left: layout.left,
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onSelect(tool)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`cursor-grab touch-none select-none active:cursor-grabbing ${
          isDragging ? "z-20" : "z-10"
        }`}
        aria-pressed={isSelected}
        aria-label={`${tool.name}: ${tool.description}`}
      >
        <div
          className={`tech-pill-interactive tech-pill-interactive-sm ${colorClass} ${
            isSelected ? "tech-pill-interactive-selected" : ""
          } ${isDragging ? "" : "tech-pill-float"}`}
        >
          <img src={tool.icon} alt="" className="h-4 w-4 object-contain opacity-80" draggable={false} />
          <span>{tool.name}</span>
        </div>
      </div>
    </div>
  );
};

const InteractiveTechPills = () => {
  const [selected, setSelected] = useState(heroTools[0]);
  const layouts = useMemo(() => buildLayouts(heroTools.length), []);
  const handleSelect = useCallback((tool) => setSelected(tool), []);

  return (
    <div className="w-full">
      <div className="relative hidden h-[480px] w-full lg:block">
        {heroTools.map((tool, index) => (
          <DraggablePill
            key={tool.id}
            tool={tool}
            layout={layouts[index]}
            colorClass={pillColors[index % pillColors.length]}
            isSelected={selected?.id === tool.id}
            onSelect={handleSelect}
          />
        ))}

        {selected && (
          <div className="tool-detail-panel absolute bottom-0 left-0 right-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
              {selected.name}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {selected.description}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-3 lg:hidden">
        {heroTools.map((tool, index) => (
          <button
            key={tool.id}
            type="button"
            onClick={() => handleSelect(tool)}
            className={`tech-pill-interactive tech-pill-interactive-sm ${pillColors[index % pillColors.length]} ${
              selected?.id === tool.id ? "tech-pill-interactive-selected" : ""
            }`}
          >
            <img src={tool.icon} alt="" className="h-4 w-4 object-contain opacity-80" />
            <span>{tool.name}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="tool-detail-panel mt-4 lg:hidden">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent)]">
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
