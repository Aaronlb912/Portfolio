import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-white text-slate-700 py-24"
    >
      <div className="flex flex-col justify-center items-center w-full h-full px-6">
        <div className="max-w-4xl w-full text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[var(--color-muted)]">
            About
          </p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold text-slate-900">
            Nice to meet you. Please, take a look around.
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#6a9ae6]" />
        </div>
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-10 mt-12">
          <p className="text-lg leading-relaxed text-slate-600">
            I build well-crafted web experiences that merge thoughtful design
            with pragmatic engineering. From marketing sites to product
            dashboards, I focus on performance, accessibility, and smooth
            interactions that make complex ideas feel effortless.
          </p>
          <p className="text-lg leading-relaxed text-slate-600">
            My background spans agencies and in-house teams, collaborating with
            stakeholders across disciplines. I love translating needs into clear
            interface patterns, mentoring teammates, and shipping code that
            grows with the product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
