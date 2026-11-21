import { ArrowUp, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">T</span><span>Tarequl<span className="brand-dot">.</span></span></a>
        <p>Designed & built with care by {personalInfo.name}.</p>
        <div className="footer-right"><a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a></div>
      </div>
      <div className="container copyright">© {new Date().getFullYear()} Tarequl Islam. All rights reserved.</div>
    </footer>
  );
}
