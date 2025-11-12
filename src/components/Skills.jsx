import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import PHP from "../assets/php.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full bg-gradient-to-b from-white via-[#f4f4f2] to-[#eceee9] text-slate-700 py-24"
    >
      {/* Container */}
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted)]">
            Skills
          </p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900">
            Tools I use to craft memorable interfaces
          </h2>
          <p className="mt-4 text-base text-slate-600">
            From foundational web technologies to the frameworks powering modern
            products.
          </p>
        </div>

        <div className="mt-12 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { label: "DRUPAL 10", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg" },
            { label: "PHP", src: PHP },
            { label: "HTML5", src: HTML },
            { label: "CSS3", src: CSS },
            { label: "JAVASCRIPT (ES6+)", src: JavaScript },
          { label: "TYPESCRIPT", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { label: "REACT", src: ReactImg },
            { label: "NEXT.JS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { label: "FIGMA", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            { label: "GIT", src: GitHub },
            { label: "NODE.JS", src: Node },
            { label: "MYSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { label: "TAILWIND", src: Tailwind },
            { label: "FIREBASE", src: FireBase },
            { label: "LINUX", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
            { label: "WORDPRESS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
            { label: "CI/CD", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg" },
          ].map(({ label, src }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/70 bg-white/90 px-6 py-8 shadow-sm shadow-slate-200 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img className="w-16 h-16 mx-auto object-contain" src={src} alt={`${label} icon`} />
              <p className="mt-6 text-sm font-semibold tracking-wide text-slate-600 group-hover:text-[#6a9ae6]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
