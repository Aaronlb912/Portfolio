import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { techStack } from "../data/data.js";

const pillPositions = [
  "top-[8%] left-[10%]",
  "top-[5%] right-[5%]",
  "top-[35%] left-[0%]",
  "top-[30%] right-[0%]",
  "bottom-[30%] left-[5%]",
  "bottom-[25%] right-[10%]",
  "bottom-[8%] left-[20%]",
  "bottom-[5%] right-[20%]",
];

const Home = () => {
  return (
    <div
      name="home"
      className="relative overflow-hidden pt-28 pb-10 sm:pb-12"
    >
      <div className="blob -top-32 -left-32 h-[500px] w-[500px] bg-[#6a9ae6]/20" />
      <div className="blob top-1/4 -right-32 h-[400px] w-[400px] bg-[#8fb6d3]/25" />
      <div className="blob bottom-0 left-1/4 h-[350px] w-[350px] bg-[#dbe5f9]/40" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Aaron Bryant
            </h1>
            <p className="mt-6 text-xl font-medium text-[var(--color-text)] sm:text-2xl">
              Building thoughtful interfaces from idea to launch.
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
              I create responsive, accessible web experiences with clean code and
              seamless user flows - from marketing sites to product dashboards,
              with a focus on design and performance.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn-primary">
                  Get in touch
                  <HiArrowNarrowRight className="text-lg" />
                </button>
              </Link>
              <Link to="work" smooth={true} duration={500}>
                <button className="btn-secondary">See my work</button>
              </Link>
            </div>
          </div>

          <div className="relative hidden h-[420px] lg:block">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`tech-pill absolute ${pillPositions[index]} animate-[float_6s_ease-in-out_infinite]`}
                style={{ animationDelay: `${index * 0.4}s` }}
              >
                <img
                  src={tech.icon}
                  alt=""
                  className="h-5 w-5 object-contain"
                />
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 lg:hidden">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-pill">
              <img
                src={tech.icon}
                alt=""
                className="h-4 w-4 object-contain"
              />
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
