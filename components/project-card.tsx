import Image from "next/image";

type ProjectCardProps = {
  image: string;
  alt: string;
  category: string;
  title: string;
  className?: string;
  showArrow?: boolean;
};

export function ProjectCard({
  image,
  alt,
  category,
  title,
  className = "",
  showArrow = false,
}: ProjectCardProps) {
  return (
    <article className={`project-card glass-card ${className}`.trim()}>
      <Image src={image} alt={alt} fill sizes="(max-width: 767px) calc(100vw - 48px), 50vw" />
      <div className="project-overlay" />
      <div className="project-content">
        <div>
          <span className="eyebrow project-category">{category}</span>
          <h3 className="project-title">{title}</h3>
        </div>
        {showArrow ? (
          <span className="project-arrow" aria-hidden="true">
            →
          </span>
        ) : null}
      </div>
    </article>
  );
}
