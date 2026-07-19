import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion as Motion, useTransform } from "motion/react";
import { contactLinks } from "../../../services/contact";
import "./Footer.scss";
export function Footer({ scrollProgress }) {
  const width = useTransform(scrollProgress, [0, 1], ["0%", "100%"]);
  return (
    <footer className="footer shell">
      <p>Priya Gupta, Azure Data Engineer</p>
      <div>
        <a href={contactLinks.email} aria-label="Email">
          <EnvelopeSimple size={20} />
        </a>
        <a href={contactLinks.linkedin} aria-label="LinkedIn">
          <LinkedinLogo size={20} />
        </a>
        <a href={contactLinks.github} aria-label="GitHub">
          <GithubLogo size={20} />
        </a>
      </div>
      <Motion.span style={{ width }} />
    </footer>
  );
}
