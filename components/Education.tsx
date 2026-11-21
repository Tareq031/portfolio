import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <SectionHeading eyebrow="MY ACADEMIC JOURNEY" title="Education" description="The foundation behind my technical learning." />
        <div className="timeline">
          {education.map(item => (
            <article className="timeline-item" key={item.degree}>
              <div className="timeline-icon"><GraduationCap /></div>
              <div className="timeline-content"><div className="timeline-top"><span className="timeline-date">{item.period}</span><span className="timeline-label">EDUCATION</span></div><h3>{item.degree}</h3><h4>{item.institution}</h4><p>{item.details}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
