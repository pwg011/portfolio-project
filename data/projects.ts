export type Project = {
  slug: string;
  href: string;
  image: string;
  alt: string;
  category: string;
  title: string;
  navTitle?: string;
  overview?: string[];
  heroBenefits?: string[];
  sections?: ProjectSection[];
  featured?: boolean;
};

export type ProjectSection = {
  title: string;
  content: string[];
  list?: string[];
  walkthrough?: ProjectWalkthroughItem[];
};

export type ProjectWalkthroughItem = {
  number: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const projects: Project[] = [
  {
    slug: "applyflow",
    href: "/projects/applyflow",
    image: "/images/applyflow/01-jobs-dashboard.png",
    alt: "ApplyFlow Case Study",
    category: "APPLICATION WORKFLOW",
    title: "Job Post Analyser + Application Manager",
    navTitle: "ApplyFlow",
    featured: true,
    overview: [
      "ApplyFlow is an application workflow product built to make job applications easier, clearer, and more organised.",
      "It helps a user move from a job post to a stronger application by bringing together job analysis, CV review, profile management, document preparation, and application tracking in one workspace.",
    ],
    sections: [
      {
        title: "Overview",
        content: [
          "ApplyFlow is an application workflow product built to make job applications easier, clearer, and more organised.",
          "It helps a user move from a job post to a stronger application by bringing together job analysis, CV review, profile management, document preparation, and application tracking in one workspace.",
        ],
      },
      {
        title: "Purpose",
        content: [
          "Job applications often involve too many scattered steps: reading job posts, checking requirements, editing CVs, tracking deadlines, saving notes, and remembering what has already been submitted.",
          "ApplyFlow was built to make that process feel more guided.",
          "Instead of treating a job application as one isolated task, it treats it as a full workflow.",
        ],
      },
      {
        title: "What was built",
        content: [],
        list: [
          "Job post import flow",
          "AI job post analysis",
          "Requirement extraction",
          "Skills and keyword review",
          "CV/profile scanning and review",
          "Match checks against role requirements",
          "Application tracking dashboard",
          "Profile and CV management",
          "Resume/document preparation flow",
          "Application detail views",
          "Import, edit, delete, and confirmation modals",
          "Empty states for jobs, profiles, analysis, and selections",
          "Dashboard interface designed around real application actions",
        ],
      },
      {
        title: "Workflow",
        content: [
          "The user starts by importing a job post.",
          "ApplyFlow breaks the role down into useful information: key requirements, skills, keywords, and application notes.",
          "The user can then compare the role against their CV or profile, see what needs attention, and prepare stronger application materials.",
          "The same workspace keeps the application organised, so the user can track the role, update details, manage documents, and return later without losing context.",
        ],
      },
      {
        title: "Tools",
        content: [
          "React, Next.js, TypeScript, Tailwind CSS, AI-assisted analysis, document parsing, OCR/text extraction, UI state design, workflow design, Vercel.",
        ],
      },
      {
        title: "Outcome",
        content: [
          'ApplyFlow helps users move from "I found a job post" to "I know what this role needs, what my CV should show, and what I need to do next."',
          "It shows how AI can support practical work: reading job posts, identifying requirements, checking documents, and helping the user prepare with more clarity and less manual effort.",
        ],
      },
      {
        title: "Walkthrough",
        content: [],
        walkthrough: [
          {
            number: "01",
            title: "Save the job",
            description: "Add the job post so everything starts from one place.",
            image: "/images/applyflow/03-import-preview-modal.png",
            imageAlt: "ApplyFlow import preview modal screenshot.",
          },
          {
            number: "02",
            title: "Read the role clearly",
            description:
              "See the main requirements, skills, and keywords without digging through the whole post again.",
            image: "/images/applyflow/05-application-details-drawer.png",
            imageAlt: "ApplyFlow application details drawer screenshot.",
          },
          {
            number: "03",
            title: "Check the CV",
            description: "Review what already fits and what may need to be improved.",
            image: "/images/applyflow/11-cv-review-modal.png",
            imageAlt: "ApplyFlow CV review modal screenshot.",
          },
          {
            number: "04",
            title: "Build the application",
            description:
              "Use the role details to prepare a stronger resume or application draft.",
            image: "/images/applyflow/07-profiles-dashboard.png",
            imageAlt: "ApplyFlow profiles dashboard screenshot.",
          },
          {
            number: "05",
            title: "Keep track",
            description:
              "Save the status, notes, and next steps so the application does not get lost.",
            image: "/images/applyflow/01-jobs-dashboard.png",
            imageAlt: "ApplyFlow jobs dashboard screenshot.",
          },
          {
            number: "06",
            title: "Make changes easily",
            description:
              "Edit details, confirm actions, or return later without starting over.",
            image: "/images/applyflow/04-edit-application-drawer.png",
            imageAlt: "ApplyFlow edit application drawer screenshot.",
          },
        ],
      },
    ],
  },
  {
    slug: "video-transcription",
    href: "/projects/video-transcription",
    image: "/images/transcription-tool.jpg",
    alt: "Video Transcription Tool",
    category: "SYSTEM AUTOMATION",
    title: "Video Transcription Workflow",
    overview: [
      "I built a local Python transcription workflow for times when uploading client recordings to a third-party website is not ideal.",
    ],
    heroBenefits: [
      "Processes recordings locally on the computer",
      "Names transcripts automatically and saves them to the chosen folder",
      "Uses open-source tools with no subscription fees, upload limits, or paid credits",
    ],
    sections: [
      {
        title: "Purpose",
        content: [
          "The aim was to create a simple transcription setup that could be used without depending on a paid online platform.",
          "It keeps the whole process local, makes file handling easier, and gives more control over privacy, storage, and delivery.",
        ],
      },
      {
        title: "What was built",
        content: [],
        list: [
          "Video and audio file input",
          "Local Faster-Whisper transcription",
          "Timestamped transcript output",
          "Automatic file naming",
          "Chosen output folder",
          "Organised input and output folders",
          "README and setup files",
          "Sample transcript output",
        ],
      },
      {
        title: "Workflow",
        content: [
          "The user runs the Python script and selects a video or audio file.",
          "The recording is processed locally with Faster-Whisper.",
          "The finished transcript is automatically named and saved in the chosen output folder, ready for review, editing, or delivery.",
        ],
      },
      {
        title: "Tools",
        content: ["Python, Faster-Whisper, command line, local file handling."],
      },
      {
        title: "Outcome",
        content: [
          "A free, local transcription workflow that avoids subscriptions, upload limits, and paid credits.",
          "It gives the user more control over private recordings, file storage, naming, and where each transcript is saved.",
        ],
      },
      {
        title: "Walkthrough",
        content: [],
        walkthrough: [
          {
            number: "01",
            title: "Choose the file",
            description: "Select the video or audio recording to be transcribed.",
          },
          {
            number: "02",
            title: "Start the script",
            description: "Run the Python command and enter the file path.",
          },
          {
            number: "03",
            title: "Process the recording",
            description: "Faster-Whisper handles the transcription locally.",
          },
          {
            number: "04",
            title: "Create the transcript",
            description: "The workflow produces timestamped text from the recording.",
          },
          {
            number: "05",
            title: "Save automatically",
            description: "The transcript is named and saved in the chosen output folder.",
          },
          {
            number: "06",
            title: "Review the result",
            description:
              "Open the transcript, clean the text if needed, and prepare it for delivery.",
          },
        ],
      },
    ],
  },
  {
    slug: "resume-builder",
    href: "/projects/resume-builder",
    image: "/images/resume-builder/18-resume-builder-full-page.png",
    alt: "Portfolio UI Build",
    category: "DOCUMENT GENERATION",
    title: "Resume Builder",
    overview: [
      "I built this to make resume editing simple and organised.",
      "Instead of jumping between a CV, a job post, notes, and a blank document, the workflow brings the main pieces into one place.",
    ],
    heroBenefits: [
      "Brings CV, profile, and job information together",
      "Shows the resume in a clear document preview",
      "Helps the user review, improve, and prepare it for export",
    ],
    sections: [
      {
        title: "Purpose",
        content: [
          "Resume editing often means working across several documents at once.",
          "The Resume Builder keeps the source CV, job details, writing suggestions, and document preview together so the user can make changes without losing track of the full document.",
        ],
      },
      {
        title: "What was built",
        content: [],
        list: [
          "CV and profile information",
          "Job-focused resume direction",
          "A4-style resume preview",
          "Suggestions for stronger content",
          "Organised sections for review",
          "Document settings",
          "Export-ready document flow",
        ],
      },
      {
        title: "Workflow",
        content: [
          "The user starts with their CV and profile information.",
          "They can add the role they are applying for, review suggestions, and update the resume while seeing the document take shape in a realistic page preview.",
          "The finished version can then be reviewed and prepared for export.",
        ],
      },
      {
        title: "Tools",
        content: ["React, Next.js, TypeScript, document layout, UI workflow design."],
      },
      {
        title: "Outcome",
        content: [
          "A clearer way to prepare tailored resumes without starting from scratch each time.",
        ],
      },
      {
        title: "Walkthrough",
        content: [],
        walkthrough: [
          {
            number: "01",
            title: "Add the CV",
            description: "Bring the existing CV and profile information into the builder.",
            image: "/images/resume-builder/20-resume-builder-source-target-panels.png",
            imageAlt: "Resume Builder source and target panels screenshot.",
          },
          {
            number: "02",
            title: "Add the job",
            description: "Use the role details to guide the resume.",
            image: "/images/resume-builder/20-resume-builder-source-target-panels.png",
            imageAlt: "Resume Builder source and target panels screenshot.",
          },
          {
            number: "03",
            title: "Review the suggestions",
            description: "See which parts of the resume may need more attention.",
            image: "/images/resume-builder/21-resume-builder-ai-suggestions-analysis.png",
            imageAlt: "Resume Builder AI suggestions analysis screenshot.",
          },
          {
            number: "04",
            title: "Edit the content",
            description: "Update the summary, skills, experience, and education sections.",
            image: "/images/resume-builder/19-resume-builder-a4-preview.png",
            imageAlt: "Resume Builder A4 preview screenshot.",
          },
          {
            number: "05",
            title: "Check the document",
            description: "Review the resume in a realistic A4 page layout.",
            image: "/images/resume-builder/19-resume-builder-a4-preview.png",
            imageAlt: "Resume Builder A4 preview screenshot.",
          },
          {
            number: "06",
            title: "Prepare the final version",
            description: "Make the last changes and get the document ready for export.",
            image: "/images/resume-builder/22-resume-builder-settings-export.png",
            imageAlt: "Resume Builder settings and export screenshot.",
          },
        ],
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
