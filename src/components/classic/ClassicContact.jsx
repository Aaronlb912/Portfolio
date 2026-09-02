import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

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
    <section
      id="contact"
      name="contact"
      className="border-t border-[var(--color-rule)] px-6 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            04 / Contact
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl">
            Hiring for front-end? Got a UI that needs to ship?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--color-muted)]">
            Full-time, contract, or a one-off build. Write me and I will write back.
          </p>
          <div className="mt-10">
            <p className="font-display text-lg font-medium text-[var(--color-text)]">
              Aaron Bryant
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Front-End Engineer
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
                <label htmlFor="reason" className="contact-label">
                  I&apos;m reaching out about *
                </label>
                <select
                  id="reason"
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

                <label htmlFor="message" className="contact-label mt-5 block">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="A few words about the role or the interface…"
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

                <label htmlFor="name" className="contact-label">
                  Your name *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="classic-input mt-2"
                />

                <label htmlFor="email" className="contact-label mt-5 block">
                  Email *
                </label>
                <input
                  id="email"
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
        </div>
      </div>
    </section>
  );
};

export default ClassicContact;
