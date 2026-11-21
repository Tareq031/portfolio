import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading eyebrow="HAVE A PROJECT IN MIND?" title="Let’s Work Together"  />
        <div className="contact-box">
          <div><span className="contact-icon"><Mail /></span><div><small>EMAIL ME AT</small><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></div></div>
          <div><span className="contact-icon"><MapPin /></span><div><small>BASED IN</small><b>{personalInfo.location}</b></div></div>
          <a className="button button-primary contact-button" href={`mailto:${personalInfo.email}?subject=Let's%20connect`}>Send a message <Send size={16} /></a>
        </div>
      </div>
    </section>
  );
}
