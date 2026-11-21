import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section className="section section-muted" id="projects">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title="Featured Projects" description="A selection of academic and personal projects I’m working on." />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.name}>
              <div className={`project-art art-${index + 1}`}>
                <span className="project-number">0{index + 1}</span>
                <div className="art-window"><div className="art-window-bar"><i /><i /><i /></div><div className="art-lines"><b /><b /><b /></div><div className="art-blocks"><i /><i /><i /></div></div>
                <span className="project-status">{project.status}</span>
              </div>
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>{project.highlights.map(point => <li key={point}>{point}</li>)}</ul>
                <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Code <ArrowUpRight size={14} /></a>
                  {project.live !== "#" && <a href={project.live} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Live demo</a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
