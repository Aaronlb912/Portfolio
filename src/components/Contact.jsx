import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-[#edeeea] to-white flex justify-center items-center px-6 py-24"
    >
      <form
        method="POST"
        action="https://getform.io/f/fa7fe5ae-e77b-4c0e-b807-a6fca3cde8bd"
        className="flex flex-col max-w-2xl w-full bg-white/95 border border-slate-100 rounded-3xl shadow-md shadow-slate-200 px-8 py-10"
      >
        <div className="pb-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-muted)]">
            Contact
          </p>
          <h2 className="mt-3 text-4xl font-semibold text-slate-900">
            Let's collaborate
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Send a note about the project or opportunity you have in mind and I'll respond within two business days.
          </p>
        </div>
        <input
          className="mt-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-[#6a9ae6] focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/30 transition"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-[#6a9ae6] focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/30 transition"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-[#6a9ae6] focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/30 transition"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="mt-8 self-start rounded-full bg-[#6a9ae6] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg shadow-[#6a9ae6]/25 transition-transform duration-300 hover:translate-y-[-2px] focus:outline-none focus:ring-4 focus:ring-[#6a9ae6]/35">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
