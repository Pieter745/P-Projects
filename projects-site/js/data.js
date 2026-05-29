// ================================================================
//  PROJECTS DATA — edit this file to manage your projects
//  Status options: "active" | "completed" | "paused" | "planned"
// ================================================================

const projects = [
  {
    id: "project-alpha",
    title: "Project Alpha",
    status: "active",
    category: "Hardware",
    started: "Jan 2025",
    updated: "May 2025",
    summary: "Short description of what this project is about.",
    description: `
      <p>Add a longer description here. What is the goal? What have you done so far?</p>
      <p>You can use multiple paragraphs to document progress.</p>
    `,
    tags: ["Arduino", "3D Print", "Electronics"],
    progress: 60,          // 0–100
    image: "",             // path to image, e.g. "images/alpha.jpg" — leave empty for placeholder
    link: ""               // optional external link
  },
  {
    id: "project-beta",
    title: "Project Beta",
    status: "completed",
    category: "Software",
    started: "Oct 2024",
    updated: "Mar 2025",
    summary: "Another example project. Replace with your own.",
    description: `
      <p>Describe what was built, what tools were used, what the result was.</p>
    `,
    tags: ["Python", "Automation"],
    progress: 100,
    image: "",
    link: ""
  },
  {
    id: "project-gamma",
    title: "Project Gamma",
    status: "paused",
    category: "Design",
    started: "Mar 2025",
    updated: "Apr 2025",
    summary: "A third placeholder. Delete these and add your real projects.",
    description: `
      <p>Document where you left off and what needs to happen next.</p>
    `,
    tags: ["Figma", "Concept"],
    progress: 30,
    image: "",
    link: ""
  },
  {
    id: "project-delta",
    title: "Project Delta",
    status: "planned",
    category: "Hardware",
    started: "—",
    updated: "—",
    summary: "Something you want to build but haven't started yet.",
    description: `
      <p>Notes on the idea, what it needs, rough scope.</p>
    `,
    tags: ["CNC", "Wood"],
    progress: 0,
    image: "",
    link: ""
  }
];
