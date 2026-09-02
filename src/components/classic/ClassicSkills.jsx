import React from "react";
import { tools } from "../../data/data.js";

const groups = [
  {
    label: "Interface",
    note: "Components, state, and interaction.",
    ids: ["react", "typescript", "nextjs", "tailwind", "figma"],
  },
  {
    label: "Platform",
    note: "CMS and product surfaces I ship against.",
    ids: ["drupal", "wordpress", "php", "mysql", "node"],
  },
  {
    label: "Delivery",
    note: "Auth, data, payments, and putting UI in production.",
    ids: ["git", "firebase", "supabase", "stripe", "vercel", "cloudflare"],
  },
];

const ClassicSkills = () => {
  return (
    <section id="skills" className="border-t border-[var(--color-rule)] px-6 py-16 sm:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
          03 / Stack
        </p>
        <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          How I build
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
          What I reach for, grouped by the job.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {groups.map((group) => (
            <div key={group.label}>
              <h3 className="text-xl font-medium">{group.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {group.note}
              </p>
              <ul className="mt-5 space-y-2">
                {group.ids.map((id) => {
                  const tool = tools.find((item) => item.id === id);
                  if (!tool) return null;
                  return (
                    <li
                      key={tool.id}
                      className="flex items-center gap-2.5 text-sm text-[var(--color-text)]"
                    >
                      <img
                        src={tool.icon}
                        alt=""
                        className="h-4 w-4 object-contain opacity-80"
                      />
                      {tool.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassicSkills;
