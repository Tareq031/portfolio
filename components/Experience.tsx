import { BriefcaseBusiness } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <SectionHeading eyebrow="WHERE I’VE BEEN GROWING" title="Experience" description="Practical experience gained through building, experimenting, and learning." />
        <div className="timeline">
          {experience.map(item => (
            <article className="timeline-item" key={item.role}>
              <div className="timeline-icon"><BriefcaseBusiness /></div>
              <div className="timeline-content"><div className="timeline-top"><span className="timeline-date">{item.period}</span><span className="timeline-label">EXPERIENCE</span></div><h3>{item.role}</h3><h4>{item.organization}</h4><p>{item.details}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
