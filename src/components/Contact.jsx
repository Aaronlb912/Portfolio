import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { contactMailto } from "../data/data.js";

const Contact = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    reason: "",
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section name="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <p className="section-label text-center">save point</p>
        <h2 className="mt-3 text-center pixel-heading text-[var(--color-text)]">
          Send a message
        </h2>

        <div className="tv-bezel mt-10 rounded-xl p-2 sm:p-3">
          <div className="crt-screen">
            <div className="crt-content">
              <p className="crt-badge">
                NEW GAME · CONTACT
              </p>

              <form
                method="POST"
                action="https://getform.io/f/fa7fe5ae-e77b-4c0e-b807-a6fca3cde8bd"
                className="mt-6"
              >
                {step === 1 ? (
                  <>
                    <label className="retro-label">
                      QUEST TYPE *
                    </label>
                    <select
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      className="mt-2 w-full rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
                    >
                      <option value="" disabled>
                        Select one…
                      </option>
                      <option value="full-time">Full-time role</option>
                      <option value="contract">Contract work</option>
                      <option value="freelance">Freelance project</option>
                      <option value="hello">Just saying hi</option>
                    </select>

                    <label className="mt-5 block retro-label">
                      MESSAGE *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your quest details..."
                      className="mt-2 w-full resize-none rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)] focus:outline-none"
                    />

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="retro-btn retro-btn-active mt-6"
                    >
                      Continue ▶
                    </button>
                  </>
                ) : (
                  <>
                    <input type="hidden" name="reason" value={formData.reason} />
                    <input type="hidden" name="message" value={formData.message} />

                    <label className="retro-label">
                      PLAYER NAME *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
                    />

                    <label className="mt-5 block retro-label">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] focus:border-[var(--color-accent)] focus:outline-none"
                    />

                    <div className="mt-6 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="retro-btn"
                      >
                        ◀ Back
                      </button>
                      <button
                        type="submit"
                        className="retro-btn retro-btn-active flex-1"
                      >
                        Send ▶
                      </button>
                    </div>
                  </>
                )}
              </form>

              <div className="mt-8 flex flex-wrap justify-center gap-4 border-t border-[#30363d] pt-6">
                <a
                  href="https://www.linkedin.com/in/aaron-bryant-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href={contactMailto}
                  className="flex items-center gap-2 text-xl text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                >
                  <HiOutlineMail /> Email
                </a>
                <a
                  href="https://github.com/Aaronlb912"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xl text-[var(--color-muted)] hover:text-[var(--color-accent)]"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
