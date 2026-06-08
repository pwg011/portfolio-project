import Image from "next/image";
import { FloatingAssistant } from "@/components/floating-assistant";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Services } from "@/components/services";

const capabilities = [
  {
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, responsive design.",
  },
  {
    title: "Backend Development",
    description:
      "Supabase, PostgreSQL, REST APIs, authentication, file storage.",
  },
  {
    title: "Python Automation",
    description:
      "Automation scripts, file processing, transcription, document processing.",
  },
  {
    title: "Web Application Features",
    description:
      "Forms, dashboards, user accounts, uploads, search, filters, admin panels.",
  },
  {
    title: "Deployment",
    description:
      "Vercel, GitHub, custom domains, production deployment.",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero shell">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                Shape the idea until
                <br />
                it feels inevitable.
              </h1>
              <div className="hero-principles">
                <p>Presence is built in the details.</p>
                <p>Make the first look unforgettable.</p>
                <p>Great work feels obvious when it arrives.</p>
              </div>
              <div className="hero-action">
                <a href="#contact">
                  <span>START A CONVERSATION</span>
                  <span className="hero-action-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
            </div>

            <div className="hero-media glass-card">
              <Image
                src="/images/hero-product.jpg"
                alt="A premium, luxury editorial-style digital product visual."
                fill
                priority
                sizes="(max-width: 767px) calc(100vw - 48px), 33vw"
              />
            </div>
          </div>
        </section>

        <section className="section shell" id="work">
          <h2 className="section-label">
            <span aria-hidden="true" />
            Selected Work
          </h2>
          <div className="projects-grid">
            <ProjectCard
              className="project-featured"
              image="/images/applyflow.jpg"
              alt="ApplyFlow Case Study"
              category="APPLICATION WORKFLOW"
              title="Job Post Analyser + Application Manager"
              showArrow
            />
            <ProjectCard
              image="/images/transcription-tool.jpg"
              alt="Video Transcription Tool"
              category="SYSTEM AUTOMATION"
              title="Video Transcription Workflow"
            />
            <ProjectCard
              image="/images/portfolio-ui.jpg"
              alt="Portfolio UI Build"
              category="DOCUMENT GENERATION"
              title="Resume Builder"
            />
          </div>
        </section>

        <Services />

        <section className="section shell">
          <div className="capabilities-grid">
            <div>
              <h2 className="section-heading sticky-heading">Tools &amp; Systems</h2>
            </div>
            <div className="capability-list">
              {capabilities.map((capability) => (
                <div className="capability-row" key={capability.title}>
                  <div className="eyebrow capability-title">
                    {capability.title}
                  </div>
                  <div>{capability.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about shell" id="about">
          <div className="about-grid">
            <h2>The Builder Behind the Code.</h2>
            <div className="about-copy">
              <p className="body-large">
                I approach software development as a craft. Every line of code
                should serve a distinct purpose, eliminating redundancy and
                focusing on scalable performance. My background blends deep
                technical expertise with a keen eye for minimalist design,
                ensuring that what I build not only functions flawlessly but
                feels inherently premium.
              </p>
              <a className="text-link" href="#">
                More About Me <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="contact shell" id="contact">
          <h2>Let&apos;s build something precise.</h2>
          <div className="contact-links">
            <a href="#">Email</a>
            <a href="#">LinkedIn</a>
            <a href="#github">GitHub</a>
            <a href="#">Resume</a>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingAssistant />
    </>
  );
}
