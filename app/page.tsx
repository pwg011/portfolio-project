import Image from "next/image";
import { CopyEmailButton } from "@/components/copy-email-button";
import { FloatingAssistant } from "@/components/floating-assistant";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Services } from "@/components/services";
import { ToolsSystems } from "@/components/tools-systems";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Header />
      <div className="navbar-guard" aria-hidden="true" />
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
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                className={project.featured ? "project-featured" : undefined}
                image={project.image}
                alt={project.alt}
                category={project.category}
                title={project.title}
                href={project.href}
                showArrow
              />
            ))}
          </div>
        </section>

        <Services />

        <section className="section shell">
          <ToolsSystems />
        </section>

        <section className="about shell" id="about">
          <article className="work-note">
            <p className="work-note-label">A Note on the Work</p>
            <div className="work-note-strip">
              <p>
                Made for people who care how things look, feel, and function.
              </p>
            </div>
            <p className="work-note-message">
              Build with care. Keep what matters.
            </p>
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
