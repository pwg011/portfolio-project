import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingAssistant } from "@/components/floating-assistant";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getProject, projects } from "@/data/projects";

const placeholderSections = [
  { title: "Overview", content: ["Content to be added."] },
  { title: "Purpose", content: ["Content to be added."] },
  { title: "What was built", content: ["Content to be added."] },
  { title: "Workflow", content: ["Content to be added."] },
  { title: "Tools", content: ["Content to be added."] },
  { title: "Outcome", content: ["Content to be added."] },
  { title: "Screenshots", content: ["Content to be added."] },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const sections = project.sections ?? placeholderSections;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const previousProjectTitle = previousProject.navTitle ?? previousProject.title;
  const nextProjectTitle = nextProject.navTitle ?? nextProject.title;

  return (
    <>
      <Header />
      <div className="navbar-guard" aria-hidden="true" />
      <main className="project-detail-page" data-project={project.slug}>
        <section className="hero shell project-case-hero">
          <div className="hero-grid">
            <div className="hero-copy project-case-copy">
              <div className="project-case-heading">
                <p className="eyebrow project-case-category">{project.category}</p>
                <h1>
                  {project.slug === "applyflow" ? (
                    <>Job Post Analyser + Application&nbsp;Manager</>
                  ) : (
                    project.title
                  )}
                </h1>
                <div className="project-case-overview">
                  {(project.overview ?? ["Content to be added."]).map((paragraph) => (
                    <p className="body-large" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  {project.heroBenefits ? (
                    <ul className="project-case-hero-list">
                      {project.heroBenefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="project-case-media-column">
              <div className="hero-media glass-card project-case-media">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  priority
                  sizes="(max-width: 767px) calc(100vw - 48px), 42vw"
                />
              </div>
              <div className="hero-action project-case-image-action">
                <Link href={nextProject.href}>
                  <span>Next project: {nextProjectTitle}</span>
                  <span className="hero-action-arrow" aria-hidden="true">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section shell project-case-sections" aria-label="Project details">
          {sections.map((section) => (
            <article className="project-case-section" key={section.title}>
              <h2>{section.title}</h2>
              <div className="project-case-section-copy">
                {section.title !== "Screenshots"
                  ? section.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))
                  : null}
                {section.list ? (
                  <ul className="project-case-feature-list">
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {section.walkthrough ? (
                  <div className="project-walkthrough-list">
                    {section.walkthrough.map((item) => (
                      <div className="project-walkthrough-row" key={item.number}>
                        <span className="project-walkthrough-number">{item.number}</span>
                        <div className="project-walkthrough-copy">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                        <div className="project-walkthrough-placeholder" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </article>
          ))}
        </section>

        <div className="shell project-case-footer-nav">
          <div className="hero-action hero-action-backward">
            <Link href={previousProject.href}>
              <span className="hero-action-arrow" aria-hidden="true">
                &larr;
              </span>
              <span className="hero-action-label">Previous project: {previousProjectTitle}</span>
            </Link>
          </div>
          <div className="hero-action hero-action-backward">
            <Link href="/">
              <span className="hero-action-arrow" aria-hidden="true">
                &larr;
              </span>
              <span className="hero-action-label">Back to home</span>
            </Link>
          </div>
          <div className="hero-action">
            <Link href={nextProject.href}>
              <span>Next project: {nextProjectTitle}</span>
              <span className="hero-action-arrow" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingAssistant />
    </>
  );
}
