"use client";

import { personalInfo } from "@/data/portfolio";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"],
  ["Education", "#education"], ["Experience", "#experience"], ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar-wrap">
      <nav className="navbar container">
        <a className="brand" href="#home" aria-label="Tarequl Islam home">
          <span className="brand-mark">T</span>
          <span>Tareq<span className="brand-dot">.</span></span>
        </a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        
       <a
  className="button button-secondary"
  href={personalInfo.resume}
  target="_blank"
  rel="noopener noreferrer"
  style={{ backgroundColor: "#6366f1", color: "#ffffff" }}
>
  View Resume
</a>
        <button className="mobile-menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="mobile-menu container">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a href={personalInfo.resume} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>View resume</a>
        </div>
      )}
    </header>
  );
}
