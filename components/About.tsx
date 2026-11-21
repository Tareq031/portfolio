import { Code2, GraduationCap, Lightbulb } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";

export default function About() {
  return (
    <section className="section section-muted" id="about">
      <div className="container">
        <SectionHeading eyebrow="A LITTLE INTRODUCTION" title="About Me" description="A curious developer who enjoys learning by building real things." />
        <div className="about-grid">
          <div className="about-text">
            <h3>Turning ideas into <span className="accent">digital experiences.</span></h3>
            <p>{personalInfo.intro}</p>
            <p>I enjoy solving problems, exploring new technologies, and improving a product step by step. My current goal is to become a confident full stack developer and contribute to a collaborative development team.</p>
          </div>
          <div className="about-cards">
            <div className="info-card"><span className="info-icon"><GraduationCap /></span><div><b>CSE Student</b><small>Computer Science & Engineering</small></div></div>
            <div className="info-card"><span className="info-icon"><Code2 /></span><div><b>Web Development</b><small>Frontend + Backend fundamentals</small></div></div>
            <div className="info-card"><span className="info-icon"><Lightbulb /></span><div><b>Growth Mindset</b><small>Learn, build, improve, repeat</small></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
