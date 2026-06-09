import Image from "next/image";
import { CopyEmailButton } from "@/components/copy-email-button";
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
                <p>Quality is built in the details.</p>
                <p>The first impression should be unforgettable.</p>
                <p>Designed to work beautifully.</p>
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
          <article className="work-note">
            <p className="work-note-label">A Note on the Work</p>
            <div className="work-note-message">
              <p>Made for people who care how things look, feel, and function.</p>
              <p>Build with care. Keep what matters.</p>
            </div>
            <div className="work-note-signature" aria-label="Signed PWG">
              <Image
                src="/images/signature-pwg.png"
                alt=""
                width={575}
                height={988}
                sizes="(max-width: 767px) 96px, 132px"
              />
              <span>PWG</span>
            </div>
          </article>
        </section>

        <section className="contact shell" id="contact">
          <h2>Let&apos;s build something precise.</h2>
          <div className="contact-links">
            <CopyEmailButton />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingAssistant />
    </>
  );
}
