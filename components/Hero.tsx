import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";

import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">

        {/* Left Side */}
        <div className="hero-copy">


          <p className="hero-kicker">HELLO, I&apos;M</p>

          <h1>
            {personalInfo.name}
            <span className="accent">.</span>
          </h1>

          <h2>{personalInfo.role}</h2>

          <p className="hero-description">
            {personalInfo.tagline} I focus on thoughtful interfaces,
            clean code, and continuous learning.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Explore my work <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span>
              <MapPin size={15} />
              {personalInfo.location}
            </span>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Right Side - Profile Photo */}
        <div className="hero-visual">

          <div className="visual-glow" />

          <div className="profile-card my-profile-card">

            <div className="profile-top">
              <span>DEVELOPER PROFILE</span>
              <span className="profile-live">● ONLINE</span>
            </div>

            <div className="my-photo">
              <img
                src="/profile.png"
                alt="Tarequl Islam"
              />
            </div>

            <h3>Tarequl Islam</h3>

            <p>Aspiring Full Stack Developer</p>

            <div className="profile-tags">
              
              <span>💻 Web Developer</span>
            </div>

          </div>

          <div className="floating-chip chip-one">
            ⚡ Always Learning
          </div>

          <div className="floating-chip chip-two">
            {"</>"} Clean Code
          </div>

        </div>

      </div>

      {/* Scroll Button */}
      <a className="scroll-hint" href="#about">
        <ArrowDown size={15} />
        Scroll to explore
      </a>

    </section>
  );
}