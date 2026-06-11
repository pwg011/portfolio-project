"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

type SkillGroup = {
  label: string;
  skills: string[];
};

type SkillCategory = {
  title: string;
  summary: string[];
  groups: SkillGroup[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Development",
    summary: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
    groups: [
      {
        label: "Core",
        skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
      },
      { label: "Frameworks", skills: ["React", "Next.js"] },
      {
        label: "Styling",
        skills: ["Tailwind CSS", "Responsive Design", "Flexbox", "Grid"],
      },
      {
        label: "Application Structure",
        skills: ["State Management", "Build Tools"],
      },
    ],
  },
  {
    title: "Back-End Development",
    summary: [
      "Node.js",
      "Python",
      "REST APIs",
      "Authentication",
      "Backend Logic",
    ],
    groups: [
      {
        label: "Runtime & Languages",
        skills: ["Node.js", "Python", "PHP"],
      },
      {
        label: "Frameworks",
        skills: ["Express.js", "Django", "Laravel"],
      },
      { label: "API Design", skills: ["REST APIs", "GraphQL"] },
      {
        label: "Authentication",
        skills: ["Sessions", "Cookies", "JWT", "OAuth"],
      },
    ],
  },
  {
    title: "Databases & Storage",
    summary: [
      "Supabase",
      "PostgreSQL",
      "SQL",
      "Firebase",
      "Structured Storage",
    ],
    groups: [
      {
        label: "Relational",
        skills: ["SQL", "PostgreSQL", "MySQL"],
      },
      {
        label: "Document & Realtime",
        skills: ["MongoDB", "Firebase"],
      },
      { label: "Backend Platform", skills: ["Supabase"] },
      {
        label: "Data Structure",
        skills: ["Schema Design", "ORM Tools", "Redis"],
      },
    ],
  },
  {
    title: "Deployment & Version Control",
    summary: [
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Docker",
      "Deployment Workflows",
    ],
    groups: [
      { label: "Version Control", skills: ["Git", "GitHub"] },
      { label: "Deployment", skills: ["Vercel", "Netlify"] },
      {
        label: "Infrastructure",
        skills: ["Docker", "Cloud Platforms"],
      },
      {
        label: "Workflow",
        skills: ["CI/CD", "Server Maintenance"],
      },
    ],
  },
  {
    title: "Product Design, Quality & Optimization",
    summary: [
      "Figma",
      "Design Systems",
      "Browser DevTools",
      "Security",
      "SEO",
      "Performance",
    ],
    groups: [
      { label: "Design", skills: ["Figma", "Design Systems"] },
      { label: "Debugging", skills: ["Browser DevTools"] },
      {
        label: "Testing",
        skills: ["Unit Testing", "End-to-End Testing"],
      },
      {
        label: "Performance & Security",
        skills: [
          "Core Web Vitals",
          "Technical SEO",
          "HTTPS / SSL",
          "Security Basics",
        ],
      },
    ],
  },
];

function SkillLine({ skills }: { skills: string[] }) {
  return (
    <>
      {skills.map((skill, index) => (
        <span className="skill-item" key={skill}>
          {index > 0 && (
            <span className="skill-separator" aria-hidden="true">
              &middot;
            </span>
          )}
          {skill}
        </span>
      ))}
    </>
  );
}

function getBubbleSize(
  skill: string,
  skills: string[],
  summary: string[],
  index: number,
): "large" | "medium" | "small" {
  const summaryAnchor = skills.findIndex((item) => summary.includes(item));
  const longestSkill = skills.reduce(
    (longest, item, skillIndex) =>
      item.length > skills[longest].length ? skillIndex : longest,
    0,
  );
  const anchorIndex = summaryAnchor >= 0 ? summaryAnchor : longestSkill;

  if (index === anchorIndex) {
    return "large";
  }

  return skill.length <= 5 ? "small" : "medium";
}

export function ToolsSystems() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="capabilities-grid">
      <div>
        <h2 className="section-heading sticky-heading">Tools &amp; Systems</h2>
      </div>

      <div className="capability-list">
        {skillCategories.map((category, index) => {
          const isOpen = openIndex === index;
          const panelId = `skill-panel-${index}`;

          return (
            <article
              className={`capability-panel${isOpen ? " is-open" : ""}`}
              key={category.title}
            >
              <button
                className="capability-trigger"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() =>
                  setOpenIndex((currentIndex) =>
                    currentIndex === index ? null : index,
                  )
                }
              >
                <span className="capability-title">{category.title}</span>
                <span className="capability-summary">
                  <SkillLine skills={category.summary} />
                </span>

                <span className="capability-cue">
                  <span className="capability-cue-desktop">Details</span>
                  <span className="capability-cue-mobile">
                    Tap to view details
                  </span>
                  <span className="capability-indicator" aria-hidden="true" />
                </span>
              </button>

              <div
                className="capability-details"
                id={panelId}
                aria-hidden={!isOpen}
              >
                <div className="capability-details-inner">
                  <div className="skill-groups">
                    {category.groups.map((group, groupIndex) => (
                      <section className="skill-group" key={group.label}>
                        <h3 className="skill-group-label">{group.label}</h3>
                        <div className="skill-cluster">
                          {group.skills.map((skill, skillIndex) => (
                            <span
                              className="skill-bubble"
                              data-size={getBubbleSize(
                                skill,
                                group.skills,
                                category.summary,
                                skillIndex,
                              )}
                              style={
                                {
                                  "--bubble-index":
                                    groupIndex * 4 + skillIndex,
                                } as CSSProperties
                              }
                              key={skill}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
