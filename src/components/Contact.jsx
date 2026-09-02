import React, { useState } from "react";

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
        <h2 className="pixel-heading mt-3 text-center text-[var(--color-text)]">
          Send a message
        </h2>

        <div className="tv-bezel mt-10 rounded-xl p-3 sm:p-4">
          <div className="tv-screws" aria-hidden="true">
            <span /><span /><span /><span />
          </div>
          <div className="crt-screen crt-on">
            <div className="crt-content">
              <p className="crt-badge">NEW GAME · CONTACT</p>

              <form
                method="POST"
                action="https://getform.io/f/fa7fe5ae-e77b-4c0e-b807-a6fca3cde8bd"
                className="mt-6"
              >
                {step === 1 ? (
                  <>
                    <label className="retro-label" htmlFor="arcade-reason">
                      QUEST TYPE *
                    </label>
                    <select
                      id="arcade-reason"
                      name="reason"
                      required
                      value={formData.reason}
                      onChange={handleChange}
                      className="mt-2 w-full rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] focus:border-[var(--color-green)] focus:outline-none"
                    >
                      <option value="" disabled>
                        Select one…
                      </option>
                      <option value="full-time">Full-time role</option>
                      <option value="contract">Contract work</option>
                      <option value="freelance">Freelance project</option>
                      <option value="hello">Just saying hi</option>
                    </select>

                    <label className="retro-label mt-5 block" htmlFor="arcade-message">
                      MESSAGE *
                    </label>
                    <textarea
                      id="arcade-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="What's the gig?"
                      className="mt-2 w-full resize-none rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-green)] focus:outline-none"
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

                    <label className="retro-label" htmlFor="arcade-name">
                      PLAYER NAME *
                    </label>
                    <input
                      id="arcade-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] focus:border-[var(--color-green)] focus:outline-none"
                    />

                    <label className="retro-label mt-5 block" htmlFor="arcade-email">
                      EMAIL *
                    </label>
                    <input
                      id="arcade-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded border-2 border-[#30363d] bg-[var(--color-bg)] px-4 py-3 font-vt323 text-xl text-[var(--color-text)] focus:border-[var(--color-green)] focus:outline-none"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
