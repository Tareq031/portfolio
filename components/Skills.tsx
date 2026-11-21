import { Database, Laptop, Server } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/portfolio";

const icons = [<Laptop key="frontend" />, <Server key="backend" />, <Database key="database" />];
export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeading eyebrow="WHAT I WORK WITH" title="Skills & Technologies" description="Tools and technologies I use while learning and building projects." />
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className="skill-card" key={group.category}>
              <div className="skill-icon">{icons[index]}</div>
              <h3>{group.category}</h3>
              <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
