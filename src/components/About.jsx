import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="relative px-6 py-12 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          About
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-[var(--color-muted)]">
          I build well-crafted web experiences that merge thoughtful design
          with pragmatic engineering. From agencies to in-house teams, I
          collaborate across disciplines - translating needs into clear interface
          patterns, mentoring teammates, and shipping code that grows with the
          product.
        </p>
      </div>
    </div>
  );
};

export default About;
