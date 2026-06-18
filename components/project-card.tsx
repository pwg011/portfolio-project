import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  image: string;
  alt: string;
  category: string;
  title: string;
  href?: string;
  className?: string;
  showArrow?: boolean;
};

export function ProjectCard({
  image,
  alt,
  category,
  title,
  href,
  className = "",
  showArrow = false,
}: ProjectCardProps) {
  const card = (
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

  if (!href) {
    return card;
  }

  return (
    <Link
      className={`project-card-link ${className}`.trim()}
      href={href}
      aria-label={`View ${title}`}
    >
      {card}
    </Link>
  );
}
