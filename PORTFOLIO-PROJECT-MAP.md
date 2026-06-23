# Portfolio Project Map and Handoff Report

Last updated: 2026-06-23

Project path: `C:\Users\PETER\Documents\portfolio-project`

This document maps the current repository state so a developer, Codex, or a future ChatGPT conversation can understand the project without relying on prior chat history.

## 1. Project Overview

The project is a personal portfolio website for Peter-William, positioned around web development, web applications, workflow automation, product refinement, and polished visual execution.

Purpose:
- Present Peter-William's services and selected work.
- Provide case-study pages for three projects.
- Let visitors contact Peter-William by Gmail compose link, WhatsApp, or an on-page floating message form.

Intended audience:
- Potential clients.
- Hiring managers or collaborators.
- People evaluating Peter-William's web/product/automation work.

Current production status:
- The app builds successfully with `npm run build`.
- The app lints successfully with `npm run lint`.
- The codebase has completed Phase 1 temporary-file cleanup.
- Remaining production work is listed in section 14.

Live deployment platform:
- Vercel is the intended/current deployment platform based on project content and README references.
- Live deployment URL: Needs verification. No production URL is stored in the repository.

Repository and branch:
- GitHub remote: `https://github.com/pwg011/portfolio-project.git`
- Current branch: `master`
- Latest commit at inspection time: `9937c96 remove temporary files`

## 2. Technology Stack

Framework:
- Next.js `16.2.7`
- App Router under `app/`

Languages:
- TypeScript
- TSX/React
- CSS

Styling approach:
- Global CSS in `app/globals.css`
- Tailwind CSS v4 is installed and imported with `@import "tailwindcss";`
- PostCSS plugin: `@tailwindcss/postcss`
- Styling is mostly custom CSS classes, not utility-heavy markup.

Major packages:
- Runtime dependencies:
  - `next`: `16.2.7`
  - `react`: `19.2.4`
  - `react-dom`: `19.2.4`
- Dev dependencies:
  - `typescript`: `^5`
  - `eslint`: `^9`
  - `eslint-config-next`: `16.2.7`
  - `tailwindcss`: `^4`
  - `@tailwindcss/postcss`: `^4`
  - `@types/node`: `^20`
  - `@types/react`: `^19`
  - `@types/react-dom`: `^19`

Deployment services:
- Vercel is referenced in the project content and README.
- Exact Vercel project settings and production URL: Needs verification.

Email/contact services:
- Gmail compose URL for direct email.
- WhatsApp `wa.me` link.
- Resend API for floating message form submission.

Image handling:
- `next/image` is used for homepage hero, signature, project cards, project hero images, and walkthrough screenshots.
- Walkthrough screenshots use explicit intrinsic dimensions from `walkthroughImageSizes` in `app/projects/[slug]/page.tsx`.
- Walkthrough screenshots use `quality={100}` and `unoptimized`.

Development and build commands:
- `npm run dev`: starts local dev server.
- `npm run lint`: runs ESLint.
- `npm run build`: builds production Next.js app.
- `npm run start`: starts production server after a build.

## 3. Repository Structure

Important folders and files:

- `app/`
  - App Router routes, root layout, global CSS, favicon, and API routes.

- `app/layout.tsx`
  - Root layout.
  - Loads Google fonts with `next/font/google`: `Bodoni_Moda` and `Hanken_Grotesk`.
  - Defines global `metadata`.
  - Imports `app/globals.css`.

- `app/page.tsx`
  - Homepage route `/`.
  - Renders `Header`, homepage hero, selected work, services, tools/systems, note section, contact section, `Footer`, and `FloatingAssistant`.
  - Uses `projects` from `data/projects.ts`.

- `app/projects/[slug]/page.tsx`
  - Shared dynamic project detail route.
  - Generates static params from `projects`.
  - Renders project hero, sections, walkthrough screenshots, and previous/home/next footer navigation.
  - Controls walkthrough image dimensions and compact screenshot exceptions.

- `app/api/portfolio-message/route.ts`
  - API route for floating message form.
  - Sends message content through Resend.
  - Requires `RESEND_API_KEY`.

- `app/globals.css`
  - Entire visual system: variables, base styles, navigation, homepage sections, project detail pages, services, tools/systems accordion, note section, contact section, floating assistant, and responsive rules.

- `components/`
  - `header.tsx`: fixed top navigation.
  - `footer.tsx`: minimal footer border.
  - `project-card.tsx`: selected-work cards.
  - `services.tsx`: services section.
  - `tools-systems.tsx`: expandable capabilities/tools system.
  - `copy-email-button.tsx`: Gmail compose email link.
  - `floating-assistant.tsx`: floating message form and trigger.

- `data/projects.ts`
  - Typed project data for all project cards and project detail pages.
  - Defines `Project`, `ProjectSection`, `ProjectWalkthroughItem`, `projects`, and `getProject`.

- `public/images/`
  - Static image assets served from `/images/...`.
  - Contains homepage images, project hero images, walkthrough screenshots, signature image, Contra cover assets, and retained unreferenced images.

- Configuration files:
  - `package.json`: scripts and dependencies.
  - `package-lock.json`: npm lockfile.
  - `next.config.ts`: empty `NextConfig` object.
  - `postcss.config.mjs`: Tailwind PostCSS plugin.
  - `eslint.config.mjs`: Next.js core web vitals and TypeScript ESLint config.
  - `tsconfig.json`: strict TypeScript config with `@/*` path alias.
  - `.gitignore`: ignores dependencies, build outputs, logs, env files, zips, `tmp/**`, and `tmp-*.png`.
  - `AGENTS.md`: warns that this Next.js version has breaking changes and future agents must read relevant docs in `node_modules/next/dist/docs/` before writing code.

Generated/irrelevant files are intentionally not listed.

## 4. Routes and Pages

### `/`

Purpose:
- Portfolio homepage and main landing page.

Source file:
- `app/page.tsx`

Data source:
- `data/projects.ts` for selected project cards.

Important components:
- `Header`
- `ProjectCard`
- `Services`
- `ToolsSystems`
- `CopyEmailButton`
- `Footer`
- `FloatingAssistant`

Image assets used:
- `/images/hero-product.jpg`
- `/images/signature-pwg.png`
- Project card images from `data/projects.ts`:
  - `/images/applyflow/01-jobs-dashboard.png`
  - `/images/transcription-tool.jpg`
  - `/images/resume-builder/18-resume-builder-full-page.png`

### `/projects/applyflow`

Purpose:
- Case study for the ApplyFlow application workflow product.

Source file:
- `app/projects/[slug]/page.tsx`

Data source:
- `data/projects.ts`, project with `slug: "applyflow"`.

Important components:
- `Header`
- Dynamic project page renderer in `ProjectPage`
- `Footer`
- `FloatingAssistant`

Image assets used:
- Hero/card image: `/images/applyflow/01-jobs-dashboard.png`
- Walkthrough:
  - `/images/applyflow/03-import-preview-modal.png`
  - `/images/applyflow/05-application-details-drawer.png`
  - `/images/applyflow/11-cv-review-modal.png`
  - `/images/applyflow/07-profiles-dashboard.png`
  - `/images/applyflow/01-jobs-dashboard.png`
  - `/images/applyflow/04-edit-application-drawer.png`

### `/projects/video-transcription`

Purpose:
- Case study for the local video/audio transcription workflow.

Source file:
- `app/projects/[slug]/page.tsx`

Data source:
- `data/projects.ts`, project with `slug: "video-transcription"`.

Important components:
- `Header`
- Dynamic project page renderer in `ProjectPage`
- `Footer`
- `FloatingAssistant`

Image assets used:
- Hero/card image: `/images/transcription-tool.jpg`
- Walkthrough:
  - `/images/video-transcription/01-choose-file.png`
  - `/images/video-transcription/02-start-script.png`
  - `/images/video-transcription/03-process-recording.png`
  - `/images/video-transcription/04-create-transcript.png`
  - `/images/video-transcription/05-save-automatically.png`
  - `/images/video-transcription/06-review-result.png`

### `/projects/resume-builder`

Purpose:
- Case study for the Resume Builder document-generation workflow.

Source file:
- `app/projects/[slug]/page.tsx`

Data source:
- `data/projects.ts`, project with `slug: "resume-builder"`.

Important components:
- `Header`
- Dynamic project page renderer in `ProjectPage`
- `Footer`
- `FloatingAssistant`

Image assets used:
- Hero/card image: `/images/resume-builder/18-resume-builder-full-page.png`
- Walkthrough:
  - `/images/resume-builder/20-resume-builder-source-target-panels.png`
  - `/images/resume-builder/21-resume-builder-ai-suggestions-analysis.png`
  - `/images/resume-builder/19-resume-builder-a4-preview.png`
  - `/images/resume-builder/22-resume-builder-settings-export.png`

### `/api/portfolio-message`

Purpose:
- Receives floating message form submissions and sends an email via Resend.

Source file:
- `app/api/portfolio-message/route.ts`

Data source:
- Incoming JSON request body.
- Environment variable `RESEND_API_KEY`.

Important behavior:
- Honeypot field `website` returns `{ ok: true }` without sending.
- Requires non-empty `message`.
- Rejects messages longer than `5000` characters.
- Returns `502` if Resend fails.

## 5. Homepage Structure

Order in `app/page.tsx`:

1. Navigation
   - `Header` renders fixed `.site-header`.
   - Brand link points to `/`.
   - Desktop nav links: `/#work`, `/#services`, `/#about`.
   - Header CTA links to `/#contact` and smooth-scrolls on the homepage.
   - Mobile menu button exists with `aria-label="Open menu"` but currently has no open/close behavior.
   - `.navbar-guard` sits behind the fixed nav.

2. Hero
   - Section class: `.hero shell`.
   - Two-column grid: `.hero-copy` and `.hero-media glass-card`.
   - Uses `/images/hero-product.jpg`.
   - CTA anchors to `#contact`.

3. Selected Work
   - Section id: `work`.
   - Maps `projects` into `ProjectCard`.
   - Featured project gets `project-featured`.

4. Services
   - `Services` component.
   - Section id: `services`.
   - Three service rows: Product Design & Build, Product Refinement, Workflow Automation.
   - CTA anchors to `#contact`.

5. Tools & Systems
   - `ToolsSystems` component.
   - Expandable capability panels with summary lines and skill bubbles.

6. Note Section
   - Section id: `about`.
   - `.work-note` with `.work-note-strip`.
   - Signature block uses `/images/signature-pwg.png` and visible `PWG`.

7. Contact Section
   - Section id: `contact`.
   - Includes `CopyEmailButton`, WhatsApp icon link, and signature text.

8. Floating Message Button
   - `FloatingAssistant` renders outside `main`.
   - Fixed bottom-right trigger with visible text `Play?`.
   - Opens message form panel.

## 6. Project Detail Page System

Shared dynamic route:
- File: `app/projects/[slug]/page.tsx`
- Route: `/projects/[slug]`
- Static params generated by `generateStaticParams()` from `projects.map`.

Project data:
- File: `data/projects.ts`
- Main array: `projects: Project[]`
- Lookup helper: `getProject(slug: string)`

Section rendering:
- `sections` comes from `project.sections ?? placeholderSections`.
- Each section renders as `.project-case-section`.
- Paragraphs render when `section.title !== "Screenshots"`.
- Lists render as `.project-case-feature-list`.
- Walkthrough arrays render as `.project-walkthrough-list`.

Hero rendering:
- Uses `.project-case-hero`, `.project-case-copy`, `.project-case-heading`, `.project-case-media-column`, and `.project-case-media`.
- Hero image comes from `project.image`.
- ApplyFlow title has a page-specific non-breaking-space rendering:
  - `Job Post Analyser + Application&nbsp;Manager`
- Hero benefits render if `project.heroBenefits` exists.

Walkthrough rendering:
- Each item becomes `.project-walkthrough-row`.
- Items with images also get `.project-walkthrough-row-with-image`.
- Text column uses `.project-walkthrough-copy`.
- Image column uses `.project-walkthrough-screenshot`.
- Image uses `.project-walkthrough-image`.

Alternating screenshot layout:
- Controlled by CSS in `app/globals.css`.
- `.project-walkthrough-row-with-image` uses two columns: `minmax(0, 0.34fr) minmax(0, 0.66fr)`.
- Even rows swap columns with:
  - `.project-walkthrough-row-with-image:nth-child(even)`
  - `.project-walkthrough-row-with-image:nth-child(even) .project-walkthrough-copy`
  - `.project-walkthrough-row-with-image:nth-child(even) .project-walkthrough-screenshot`
- Mobile collapses to one column at `@media (max-width: 767px)`.

Intrinsic image-size handling:
- `walkthroughImageSizes` in `app/projects/[slug]/page.tsx` maps screenshot paths to exact `width` and `height`.
- Fallback size is `{ width: 1600, height: 1000 }`.
- `Image` props for walkthrough screenshots:
  - `quality={100}`
  - `sizes="(max-width: 767px) calc(100vw - 48px), 46vw"`
  - `unoptimized`

Compact screenshot exceptions:
- `compactWalkthroughScreenshots` set:
  - `applyflow:06`
  - `resume-builder:04`
  - `resume-builder:05`
- These receive `.project-walkthrough-screenshot-compact` and inline style:
  - `justifySelf: "center"`
  - `maxWidth: 440`
  - `width: "100%"`

Previous/home/next navigation:
- Uses project index in `projects`.
- Previous and next wrap around with modulo arithmetic.
- Footer nav class: `.project-case-footer-nav`.
- Includes:
  - Previous project link
  - Back to home link
  - Next project link

## 7. Project Content Map

### ApplyFlow

Title:
- `Job Post Analyser + Application Manager`

Slug:
- `applyflow`

Category:
- `APPLICATION WORKFLOW`

Hero image:
- `/images/applyflow/01-jobs-dashboard.png`
- Dimensions: `2880x2000`

Featured:
- `featured: true`

Walkthrough steps:
1. `01` Save the job
   - `/images/applyflow/03-import-preview-modal.png`
   - Dimensions: `1520x1548`
2. `02` Read the role clearly
   - `/images/applyflow/05-application-details-drawer.png`
   - Dimensions: `1540x2000`
3. `03` Check the CV
   - `/images/applyflow/11-cv-review-modal.png`
   - Dimensions: `1840x1624`
4. `04` Build the application
   - `/images/applyflow/07-profiles-dashboard.png`
   - Dimensions: `2880x2000`
5. `05` Keep track
   - `/images/applyflow/01-jobs-dashboard.png`
   - Dimensions: `2880x2000`
6. `06` Make changes easily
   - `/images/applyflow/04-edit-application-drawer.png`
   - Dimensions: `920x2000`
   - Compact screenshot exception: `applyflow:06`

Key technologies/content from data:
- React
- Next.js
- TypeScript
- Tailwind CSS
- AI-assisted analysis
- Document parsing
- OCR/text extraction
- UI state design
- Workflow design
- Vercel

Page-specific behavior:
- Featured homepage card.
- Project detail H1 uses a hard-coded ApplyFlow-specific rendering with `&nbsp;`.

### Video Transcription Workflow

Title:
- `Video Transcription Workflow`

Slug:
- `video-transcription`

Category:
- `SYSTEM AUTOMATION`

Hero image:
- `/images/transcription-tool.jpg`
- Dimensions: `512x512`

Hero benefits:
- Processes recordings locally on the computer.
- Names transcripts automatically and saves them to the chosen folder.
- Uses open-source tools with no subscription fees, upload limits, or paid credits.

Walkthrough steps:
1. `01` Choose the file
   - `/images/video-transcription/01-choose-file.png`
   - Dimensions: `1240x820`
2. `02` Start the script
   - `/images/video-transcription/02-start-script.png`
   - Dimensions: `1240x520`
3. `03` Process the recording
   - `/images/video-transcription/03-process-recording.png`
   - Dimensions: `1343x708`
4. `04` Create the transcript
   - `/images/video-transcription/04-create-transcript.png`
   - Dimensions: `1343x708`
5. `05` Save automatically
   - `/images/video-transcription/05-save-automatically.png`
   - Dimensions: `1240x820`
6. `06` Review the result
   - `/images/video-transcription/06-review-result.png`
   - Dimensions: `1240x860`

Key technologies/content from data:
- Python
- Faster-Whisper
- Command line
- Local file handling

Page-specific behavior:
- CSS exception: `.project-detail-page[data-project="video-transcription"] .project-case-hero` sets `min-height: auto` and `padding-bottom: 112px`.
- CSS exception: `.project-detail-page[data-project="video-transcription"] .project-case-section:first-child` sets `padding-top: 44px`.

### Resume Builder

Title:
- `Resume Builder`

Slug:
- `resume-builder`

Category:
- `DOCUMENT GENERATION`

Hero image:
- `/images/resume-builder/18-resume-builder-full-page.png`
- Dimensions: `3186x2490`

Hero benefits:
- Brings CV, profile, and job information together.
- Shows the resume in a clear document preview.
- Helps the user review, improve, and prepare it for export.

Walkthrough steps:
1. `01` Add the CV
   - `/images/resume-builder/20-resume-builder-source-target-panels.png`
   - Dimensions: `1120x920`
2. `02` Add the job
   - `/images/resume-builder/20-resume-builder-source-target-panels.png`
   - Dimensions: `1120x920`
3. `03` Review the suggestions
   - `/images/resume-builder/21-resume-builder-ai-suggestions-analysis.png`
   - Dimensions: `1120x1164`
4. `04` Edit the content
   - `/images/resume-builder/19-resume-builder-a4-preview.png`
   - Dimensions: `1240x1944`
   - Compact screenshot exception: `resume-builder:04`
5. `05` Check the document
   - `/images/resume-builder/19-resume-builder-a4-preview.png`
   - Dimensions: `1240x1944`
   - Compact screenshot exception: `resume-builder:05`
6. `06` Prepare the final version
   - `/images/resume-builder/22-resume-builder-settings-export.png`
   - Dimensions: `2708x840`

Key technologies/content from data:
- React
- Next.js
- TypeScript
- Document layout
- UI workflow design

Page-specific behavior:
- CSS exception: `.project-detail-page[data-project="resume-builder"] .project-case-media img` sets `object-position: center`.

## 8. Visual Design System

Global CSS file:
- `app/globals.css`

CSS variables in `:root`:
- `--background: #f3f3f1`
- `--surface: #131313`
- `--surface-container: #201f1f`
- `--surface-container-high: #2a2a2a`
- `--primary: #ffffff`
- `--on-primary: #2f3131`
- `--on-surface: #e5e2e1`
- `--on-surface-variant: #c4c7c8`
- `--secondary: #c7c6c6`
- `--outline: #8e9192`
- `--outline-variant: #444748`
- `--surface-tint: #c6c6c6`
- `--container: 1440px`
- `--page-padding: 80px`

Typography:
- Display font: `Bodoni_Moda`, exposed as CSS variable `--font-display`.
- Body font: `Hanken_Grotesk`, exposed as CSS variable `--font-body`.
- Body uses `font-family: var(--font-body), sans-serif`.
- Large display headings use `font-family: var(--font-display), serif`.
- Note/signature text uses `"Segoe Print", "Bradley Hand", "Snell Roundhand", cursive`.

Spacing approach:
- Main shell: `.shell` uses `max-width: var(--container)` and `padding-inline: var(--page-padding)`.
- Desktop `--page-padding` is `80px`.
- Mobile `--page-padding` becomes `24px` at `max-width: 767px`.
- Large vertical spacing is controlled with sibling margins:
  - `.hero + #work`, `#work + .services-section`: `margin-top: 381px`
  - `.services-section + .section`: `margin-top: 390px`
  - `.section + .about`: `margin-top: 403px`
  - `.about + .contact`: `margin-top: 429px`
- Mobile margins are reduced in the `max-width: 767px` media query.

Container widths:
- Global container: `1440px`.
- `#work`: `max-width: 1120px`.
- `.work-note`: `width: min(100%, 1120px)`.
- `.work-note-strip`: `width: min(100%, 720px)`.

Editorial style:
- Light warm off-white background.
- Dark fixed glass navigation.
- Large serif headlines.
- Minimal uppercase micro-labels.
- Grayscale project imagery that becomes richer on hover.
- Case-study pages use structured editorial sections with thin dividers.

Navigation style:
- `.site-header` is fixed at `top: 16px`, centered with `left: 50%` and `transform: translateX(-50%)`.
- Width: `90%`, `max-width: var(--container)`.
- Border radius: `999px`.
- Background: `rgb(19 19 19 / 70%)`.
- Backdrop filter: `blur(24px)`.
- `.navbar-guard` sits behind the nav with fixed height `132px` desktop and `112px` mobile.

Button/link treatment:
- Text links use subtle underline background gradients on hover.
- Header CTA uses pill border and color inversion on hover.
- Project card arrow appears on hover.
- Floating assistant trigger is a dark pill with scale on hover.

Image treatment:
- Homepage/project card images: grayscale by default via `.hero-media img, .project-card img`.
- Homepage hero image has opacity `0.6`, hover restores grayscale to color and opacity to `1`.
- Project detail hero images use `.project-case-media img` with `object-fit: contain`, `filter: none`, `opacity: 1`.
- Walkthrough images use `object-fit: contain`, `width: 100%`, `height: auto`, `quality={100}`, and `unoptimized`.

Responsive behavior:
- Main mobile breakpoint: `@media (max-width: 767px)`.
- Intermediate breakpoint: `@media (max-width: 1100px)`.
- Mobile layout collapses grids to one column.
- Desktop nav links and CTA are hidden on mobile.
- `.mobile-menu` is displayed on mobile but currently has no behavior.
- Project walkthrough rows collapse to one column on mobile.
- Floating assistant moves from `right/bottom: 32px` to `24px`.

## 9. Contact and Messaging

Email address:
- `gberevbiepeterwilliam@gmail.com`

WhatsApp number:
- `2348024030965`

Email link behavior:
- File: `components/copy-email-button.tsx`
- Visible text: `EMAIL`
- Opens Gmail compose in a new tab:
  - `https://mail.google.com/mail/?view=cm&fs=1&to=gberevbiepeterwilliam@gmail.com&su=...&body=...`
- Subject: `Project or Enquiry`
- Body starts with `Hello Peter-William,`

WhatsApp link behavior:
- File: `app/page.tsx`
- URL uses:
  - `https://wa.me/2348024030965?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
- Message text:
  - `Hi Peter-William, I came across your portfolio and would like to discuss a project or opportunity with you.`
- Opens in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.

Floating message form behavior:
- File: `components/floating-assistant.tsx`
- Trigger visible text: `Play?`
- Panel role: `dialog`
- Labelled by `assistant-message-title`.
- Escape key closes panel.
- Pointer down outside panel or trigger closes panel.
- Textarea placeholder: `Tell me a little about what you have in mind...`
- Submit button disabled while sending or when message is empty.
- Honeypot field: `assistant-website`, stored in `website`.

API route used:
- `/api/portfolio-message`
- Source: `app/api/portfolio-message/route.ts`

Resend configuration:
- Resend endpoint: `https://api.resend.com/emails`
- Sender: `Portfolio <onboarding@resend.dev>`
- Recipient: `gberevbiepeterwilliam@gmail.com`
- Subject: `New portfolio message`
- Max message length: `5000`

Required environment variables:
- `RESEND_API_KEY`

Success and error states:
- Client success status text: `Message sent.`
- Client empty-message error: `Please write a message before sending.`
- Client send failure: `Message could not be sent. Please try again.`
- API missing key error: `Email service is not configured.`
- API invalid JSON error: `Invalid request.`
- API missing message error: `Message is required.`
- API long message error: `Message is too long.`
- API Resend failure error: `Message could not be sent.`

Do not include secret API-key values in this repository or this document.

## 10. Metadata and SEO

Source file:
- `app/layout.tsx`

Current title:
- `Peter-William | Web Developer`

Current description:
- `Websites, web applications, and automation.`

Open Graph settings:
- `openGraph.title`: `Peter-William | Web Developer`
- `openGraph.description`: `Websites, web applications, and automation.`

Twitter settings:
- `twitter.title`: `Peter-William | Web Developer`
- `twitter.description`: `Websites, web applications, and automation.`

Preview images:
- No explicit Open Graph or Twitter image is configured in `metadata`.
- No `opengraph-image` or `twitter-image` special metadata file exists in `app/`.

Remaining metadata work:
- Add `metadataBase` when the production domain is verified.
- Add canonical URL when the production domain is verified.
- Add explicit Open Graph/Twitter preview image.
- Confirm whether retained Contra cover images should also be used for metadata.

## 11. Image and Asset Map

Important public image folders:
- `public/images/`
- `public/images/applyflow/`
- `public/images/resume-builder/`
- `public/images/video-transcription/`

Homepage images:
- `/images/hero-product.jpg` - `512x343`, homepage hero.
- `/images/signature-pwg.png` - `575x988`, note signature.

Project card and hero images:
- ApplyFlow: `/images/applyflow/01-jobs-dashboard.png` - `2880x2000`
- Video Transcription Workflow: `/images/transcription-tool.jpg` - `512x512`
- Resume Builder: `/images/resume-builder/18-resume-builder-full-page.png` - `3186x2490`

ApplyFlow screenshots:
- `public/images/applyflow/01-jobs-dashboard.png` - `329430` bytes, `2880x2000`
- `public/images/applyflow/03-import-preview-modal.png` - `835070` bytes, `1520x1548`
- `public/images/applyflow/04-edit-application-drawer.png` - `721824` bytes, `920x2000`
- `public/images/applyflow/05-application-details-drawer.png` - `1202029` bytes, `1540x2000`
- `public/images/applyflow/07-profiles-dashboard.png` - `229182` bytes, `2880x2000`
- `public/images/applyflow/11-cv-review-modal.png` - `917607` bytes, `1840x1624`

Resume Builder screenshots:
- `public/images/resume-builder/18-resume-builder-full-page.png` - `574191` bytes, `3186x2490`
- `public/images/resume-builder/19-resume-builder-a4-preview.png` - `203507` bytes, `1240x1944`
- `public/images/resume-builder/20-resume-builder-source-target-panels.png` - `124175` bytes, `1120x920`
- `public/images/resume-builder/21-resume-builder-ai-suggestions-analysis.png` - `121504` bytes, `1120x1164`
- `public/images/resume-builder/22-resume-builder-settings-export.png` - `214559` bytes, `2708x840`

Video Transcription screenshots:
- `public/images/video-transcription/01-choose-file.png` - `86544` bytes, `1240x820`
- `public/images/video-transcription/02-start-script.png` - `52665` bytes, `1240x520`
- `public/images/video-transcription/03-process-recording.png` - `138400` bytes, `1343x708`
- `public/images/video-transcription/04-create-transcript.png` - `129564` bytes, `1343x708`
- `public/images/video-transcription/05-save-automatically.png` - `94623` bytes, `1240x820`
- `public/images/video-transcription/06-review-result.png` - `126407` bytes, `1240x860`

Contra cover assets:
- `public/images/contra-cover-peter-william.png` - `99909` bytes, `3200x2400`
- `public/images/portfolio-website-contra-cover.png` - `222869` bytes, `1600x1200`

Unused assets deliberately retained:
- `public/images/applyflow.jpg` - `24173` bytes, `512x286`
- `public/images/portfolio-ui.jpg` - `65198` bytes, `512x512`
- `public/images/contra-cover-peter-william.png` - retained by explicit instruction.
- `public/images/portfolio-website-contra-cover.png` - retained by explicit instruction.

Screenshot-quality rules:
- Do not rename, crop, compress, or replace walkthrough screenshots without updating:
  - `data/projects.ts`
  - `walkthroughImageSizes` in `app/projects/[slug]/page.tsx`
  - Any compact screenshot exceptions in `compactWalkthroughScreenshots`
- Preserve high-resolution screenshots where they are already mapped.
- Walkthrough screenshots intentionally use `quality={100}` and `unoptimized`.

Images that must not be renamed without updating mappings:
- Every image path in `data/projects.ts`.
- Every key in `walkthroughImageSizes`.
- Images referenced directly by `app/page.tsx`: `/images/hero-product.jpg`, `/images/signature-pwg.png`.

## 12. Deployment

GitHub repository:
- `https://github.com/pwg011/portfolio-project.git`

Current branch:
- `master`

Vercel workflow:
- Vercel is the intended/current platform.
- Exact Vercel project link, production URL, and connected branch settings: Needs verification.

Automatic redeployment behavior:
- Needs verification from Vercel project settings.
- If the GitHub repository is connected to Vercel in the standard way, pushing to the production branch should trigger a new deployment.

Required environment variables:
- `RESEND_API_KEY` for `/api/portfolio-message`.

Useful commands:
- Lint: `npm run lint`
- Build: `npm run build`
- Local development: `npm run dev`
- Commit:
  - `git status`
  - `git add <files>`
  - `git commit -m "<message>"`
- Push:
  - `git push origin master`

## 13. Completed Work

Completed major work:
- Homepage design with fixed glass navigation, editorial hero, selected work, services, tools/systems, note section, contact section, footer, and floating assistant.
- Three project detail pages using one shared dynamic route:
  - ApplyFlow
  - Video Transcription Workflow
  - Resume Builder
- Real walkthrough screenshots added for all three project pages.
- High-resolution image corrections represented in `public/images/` and `walkthroughImageSizes`.
- Project detail page screenshot handling with intrinsic size map and compact exceptions.
- Contact links:
  - Gmail compose email link.
  - WhatsApp link with prefilled message.
- Floating message form wired to `/api/portfolio-message`.
- Metadata exists for title, description, Open Graph title/description, and Twitter title/description.
- Vercel deployment is referenced as the deployment platform.
- Phase 1 temporary-file cleanup completed:
  - Removed tracked `tmp/` folder.
  - Removed root `tmp-*.png` temporary screenshots.
  - Removed unused default public SVGs.
  - Added `.gitignore` rules `tmp/**` and `tmp-*.png`.

## 14. Known Issues and Remaining Work

Only current remaining items are listed here.

### Confirmed Remaining Work

- Mobile menu is nonfunctional.
  - File: `components/header.tsx`
  - Element: `<button className="mobile-menu" type="button" aria-label="Open menu">`
  - CSS shows it on mobile, but no state or click behavior exists.

- Floating assistant hidden panel may remain keyboard reachable.
  - File: `components/floating-assistant.tsx`
  - CSS hides `.assistant-panel` with opacity and `pointer-events: none`, not conditional rendering, `hidden`, or `inert`.

- Floating assistant trigger label is unclear.
  - Visible text: `Play?`
  - It opens a message form, not media playback.

- Placeholder fallback strategy remains in project detail page.
  - File: `app/projects/[slug]/page.tsx`
  - `placeholderSections` contains `Content to be added.`
  - `project.overview ?? ["Content to be added."]` also exists.

- Some unused CSS remains.
  - Confirmed unused or old-state selectors from audit:
    - `.button`
    - `.button-row`
    - `.button-primary`
    - `.button-secondary`
    - `.assistant-options`
    - `.assistant-option`
    - `.work-note-label`
    - `.work-note-message`

- Text glyph mojibake remains in source output.
  - `components/floating-assistant.tsx` close button displays `Ã—` in source output.
  - `components/project-card.tsx` project arrow displays `â†’` in source output.
  - Needs visual verification in browser before changing.

- Metadata is incomplete for production SEO/social sharing.
  - No `metadataBase`.
  - No canonical URL.
  - No explicit Open Graph image.
  - No explicit Twitter image.

### Optional Improvements

- Replace default scaffold README content with project-specific README.
- Add stronger project data validation so incomplete projects do not silently render placeholders.
- Add a site-specific `opengraph-image` or metadata image once the desired social preview is chosen.
- Add a 404/not-found page if branded not-found behavior is desired beyond Next's generated `_not-found`.

### Items Requiring Verification

- Production URL.
- Vercel project settings and production branch.
- Resend sender/domain verification.
  - Current sender is `Portfolio <onboarding@resend.dev>`.
  - Production deliverability may require a verified domain or sender.
- Whether these retained unreferenced public assets are still needed externally:
  - `public/images/applyflow.jpg`
  - `public/images/portfolio-ui.jpg`
  - `public/images/contra-cover-peter-william.png`
  - `public/images/portfolio-website-contra-cover.png`

## 15. Protected Decisions: Do Not Change Without Approval

Do not change without explicit approval:
- Finished visual design and editorial direction.
- Homepage hero section.
- Project hero sections.
- Project wording in `data/projects.ts`.
- Screenshot mappings in `data/projects.ts`.
- `walkthroughImageSizes` in `app/projects/[slug]/page.tsx`.
- Walkthrough alternating screenshot layout.
- Compact screenshot exceptions.
- Walkthrough image-quality settings: `quality={100}` and `unoptimized`.
- Contact section structure and wording.
- Email address and WhatsApp number.
- Navigation labels and section anchors.
- Metadata wording: title and description.
- Retained Contra cover assets.

## 16. Working Rules for Future Changes

- Inspect before editing.
- Read relevant Next.js docs in `node_modules/next/dist/docs/` before writing Next.js code, per `AGENTS.md`.
- Make one controlled change at a time.
- Never guess dimensions without checking existing CSS and actual image dimensions.
- Always run `npm run lint` and `npm run build` before handoff.
- Never modify unrelated sections.
- Preserve image quality.
- Do not rename public images without updating all references and mappings.
- State the exact project path before PowerShell instructions:
  - `C:\Users\PETER\Documents\portfolio-project`
- Commit stable milestones before larger changes.
- Do not reintroduce `tmp/`, browser profiles, root `tmp-*.png`, or default scaffold SVG assets.

## 17. Current Verification

Commands run from:
- `C:\Users\PETER\Documents\portfolio-project`

Lint:
- Command: `npm run lint`
- Result: Passed.
- Warning count: `0`
- Output summary:
  - `> portfolio-project@0.1.0 lint`
  - `> eslint`

Build:
- Command: `npm run build`
- Result: Passed.
- Next.js version in build output: `16.2.7`
- Compiler: Turbopack
- Output summary:
  - `Compiled successfully in 14.5s`
  - `Running TypeScript ...`
  - `Finished TypeScript in 9.5s`
  - `Generating static pages ... (8/8)`
  - `Finalizing page optimization ...`

Build route output:
- `/` - Static
- `/_not-found` - Static
- `/api/portfolio-message` - Dynamic/server-rendered on demand
- `/projects/[slug]` - SSG using `generateStaticParams`
  - `/projects/applyflow`
  - `/projects/video-transcription`
  - `/projects/resume-builder`

Git status:
- Command: `git status --short`
- Result:
  - `?? PORTFOLIO-PROJECT-MAP.md`
- Meaning: the only working tree change after this report is the new untracked handoff file.

Current branch:
- Command: `git branch --show-current`
- Result: `master`

Current remote:
- Command: `git remote -v`
- Result:
  - `origin https://github.com/pwg011/portfolio-project.git (fetch)`
  - `origin https://github.com/pwg011/portfolio-project.git (push)`

Latest commit:
- Command: `git log -1 --oneline`
- Result: `9937c96 remove temporary files`
