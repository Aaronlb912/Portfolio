import React from "react";
import { tools } from "../data/data.js";

const Skills = () => {
  return (
    <div name="skills" className="relative px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-accent)]">
            Skills
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I use to ship
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
            From enterprise CMS work to product builds - the stack behind my
            recent projects.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {tools.map((tool) => (
            <div key={tool.id} className="skill-card group">
              <img
                src={tool.icon}
                alt=""
                className="mx-auto h-12 w-12 object-contain"
              />
              <p className="mt-4 text-center text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] group-hover:text-[var(--color-accent)]">
                {tool.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
