import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { contactMailto } from "../../data/data.js";

const ClassicContact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: "",
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const canContinue = formData.reason && formData.message.trim();

  return (
    <section id="contact" name="contact" className="relative px-6 py-16 sm:px-8 md:py-20">
      <div className="blob -right-20 top-0 h-[280px] w-[280px] bg-[#6a9ae6]/15" />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
            Always interested in new opportunities, technical challenges, or
            collaborations.
          </p>
          <div className="mt-10">
            <p className="text-lg font-semibold text-[var(--color-text)]">
              Aaron Bryant
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Front-End Engineer · React · Drupal · TypeScript
            </p>
          </div>
        </div>

        <div className="contact-card">
          <form
            method="POST"
            action="https://getform.io/f/fa7fe5ae-e77b-4c0e-b807-a6fca3cde8bd"
          >
            {step === 1 ? (
              <>
                <label className="contact-label">
                  I&apos;m reaching out about *
                </label>
                <select
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleChange}
                  className="classic-input mt-2"
                >
                  <option value="" disabled>
                    Select one…
                  </option>
                  <option value="full-time">A full-time role</option>
                  <option value="contract">Contract work</option>
                  <option value="freelance">A freelance project</option>
                  <option value="hello">Just saying hi</option>
                </select>

                <label className="contact-label mt-5 block">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A few words about what you have in mind…"
                  className="classic-input mt-2 resize-none"
                />

                <button
                  type="button"
                  onClick={() => canContinue && setStep(2)}
                  disabled={!canContinue}
                  className="btn-primary mt-6 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Continue
                  <HiArrowNarrowRight className="text-lg" />
                </button>
              </>
            ) : (
              <>
                <input type="hidden" name="reason" value={formData.reason} />
                <input type="hidden" name="message" value={formData.message} />

                <label className="contact-label">Your name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="classic-input mt-2"
                />

                <label className="contact-label mt-5 block">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="classic-input mt-2"
                />

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn-primary flex-1">
                    Send message
                  </button>
                </div>
              </>
            )}
          </form>

          <div className="mt-8 flex flex-wrap gap-4 border-t border-black/5 pt-6">
            <a
              href="https://www.linkedin.com/in/aaron-bryant-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a href={contactMailto} className="contact-link">
              <HiOutlineMail /> Email
            </a>
            <a
              href="https://github.com/Aaronlb912"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassicContact;
