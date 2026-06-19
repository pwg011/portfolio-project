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
};

export const projects: Project[] = [
  {
    slug: "applyflow",
    href: "/projects/applyflow",
    image: "/images/applyflow.jpg",
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
          },
          {
            number: "02",
            title: "Read the role clearly",
            description:
              "See the main requirements, skills, and keywords without digging through the whole post again.",
          },
          {
            number: "03",
            title: "Check the CV",
            description: "Review what already fits and what may need to be improved.",
          },
          {
            number: "04",
            title: "Build the application",
            description:
              "Use the role details to prepare a stronger resume or application draft.",
          },
          {
            number: "05",
            title: "Keep track",
            description:
              "Save the status, notes, and next steps so the application does not get lost.",
          },
          {
            number: "06",
            title: "Make changes easily",
            description:
              "Edit details, confirm actions, or return later without starting over.",
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
    image: "/images/portfolio-ui.jpg",
    alt: "Portfolio UI Build",
    category: "DOCUMENT GENERATION",
    title: "Resume Builder",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
