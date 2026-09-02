import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { contactMailto } from "../data/data.js";

export const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/aaron-bryant-dev/",
    label: "LinkedIn",
    Icon: FaLinkedin,
    external: true,
  },
  {
    href: contactMailto,
    label: "Email",
    Icon: HiOutlineMail,
    external: false,
  },
  {
    href: "https://github.com/Aaronlb912",
    label: "GitHub",
    Icon: FaGithub,
    external: true,
  },
];

const SocialLinks = ({ variant = "classic", compact = false, className = "" }) => {
  const isRetro = variant === "retro";
  const itemClass = isRetro
    ? `social-btn-retro${compact ? " social-btn-retro-compact" : ""}`
    : compact
      ? "social-btn-classic-compact"
      : "social-btn-classic";

  return (
    <nav
      className={`flex flex-wrap items-center gap-2 ${className}`}
      aria-label="Social"
    >
      {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          className={itemClass}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
