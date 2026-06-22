import Image from "next/image";
import { CopyEmailButton } from "@/components/copy-email-button";
import { FloatingAssistant } from "@/components/floating-assistant";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProjectCard } from "@/components/project-card";
import { Services } from "@/components/services";
import { ToolsSystems } from "@/components/tools-systems";
import { projects } from "@/data/projects";

const WHATSAPP_MESSAGE =
  "Hi Peter-William, I came across your portfolio and would like to discuss a project or opportunity with you.";
const WHATSAPP_URL = `https://wa.me/2348024030965?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

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
            <div className="work-note-strip">
              <p>
                Made for people who care how things look, feel, and function.
              </p>
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
            <a
              className="contact-whatsapp-icon"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Peter-William on WhatsApp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.89-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                <path d="M12.04 2a9.94 9.94 0 0 0-8.45 15.18L2 22l4.96-1.54A9.94 9.94 0 1 0 12.04 2Zm0 1.78a8.16 8.16 0 1 1-4.61 14.9l-.34-.22-2.42.75.78-2.34-.23-.36a8.16 8.16 0 0 1 6.82-12.73Z" />
              </svg>
            </a>
          </div>
          <p className="contact-signature">PETER-WILLIAM</p>
        </section>
      </main>
      <Footer />
      <FloatingAssistant />
    </>
  );
}
