// ============================================================
//  DATA FILE — edit this to add / update your projects
//  Each project needs its own HTML file in /projects/
//  Copy project-template.html and rename it to match the id.
// ============================================================

const projects = [
  {
    id: "project-plonze",           // must match the filename: projects/project-plonze.html
    title: "Plonze",
    category: "Product Design",
    year: "2024",
    summary: "A water-activated sound toy that encourages sensory play for children aged 3–6.",
    thumb: "images/plonze-thumb.jpg",   // path from site root
    hero:  "images/plonze-hero.jpg",    // larger image for detail page (optional)
    role: "Solo designer",
    tools: "Fusion 360, Keyshot, Arduino",
    duration: "12 weeks",
    tags: ["Industrial Design", "Prototype", "Children"],
    link: "",                           // leave empty if no live link
    description: `
      <h2>The Challenge</h2>
      <p>Design a toy that uses water as a primary interaction medium while remaining safe, durable, and engaging for young children.</p>

      <h2>Process</h2>
      <p>The project began with extensive user research, observing how children aged 3–6 interact with water in unstructured play. Key insights revealed that children were naturally drawn to the sound water makes — dripping, splashing, flowing.</p>
      <p>From there, multiple concept directions were sketched and narrowed down through rapid cardboard prototyping and informal user testing sessions.</p>

      <h2>Result</h2>
      <p>Plonze is a set of floating resonators that produce different musical tones when submerged to varying depths. Children compose their own water music through intuitive play. The final prototype was injection-mould ready and passed basic safety standards for the target age group.</p>
    `,
    images: [
      "images/plonze-1.jpg",
      "images/plonze-2.jpg",
      "images/plonze-3.jpg"
    ]
  },
  {
    id: "project-loopchair",
    title: "Loop Chair",
    category: "Furniture",
    year: "2023",
    summary: "A flat-pack lounge chair made entirely from a single sheet of bent plywood — no fasteners, no glue.",
    thumb: "images/loopchair-thumb.jpg",
    hero: "images/loopchair-hero.jpg",
    role: "Design & fabrication",
    tools: "Rhino, Grasshopper, CNC Router",
    duration: "8 weeks",
    tags: ["Furniture", "Sustainable", "CNC", "Plywood"],
    link: "",
    description: `
      <h2>Concept</h2>
      <p>The Loop Chair explores the structural potential of steam-bent plywood. By bending a single continuous strip into an interlocking loop, the chair achieves rigidity through geometry rather than fasteners.</p>

      <h2>Fabrication</h2>
      <p>The profile was parametrically modelled in Grasshopper, allowing rapid iteration of the bending radius and seat angle. Five physical prototypes were cut on a CNC router before arriving at the final form.</p>

      <h2>Outcome</h2>
      <p>The finished chair ships flat in a 120 × 30 cm box and assembles in under two minutes. Load testing confirmed it supports up to 150 kg without deformation.</p>
    `,
    images: [
      "images/loopchair-1.jpg",
      "images/loopchair-2.jpg"
    ]
  },
  {
    id: "project-signalapp",
    title: "Signal — Campus Wayfinding App",
    category: "UX / Digital",
    year: "2023",
    summary: "A mobile wayfinding app for new students navigating a large university campus, designed around cognitive load reduction.",
    thumb: "images/signal-thumb.jpg",
    hero: "images/signal-hero.jpg",
    role: "UX Research, Interaction Design",
    tools: "Figma, Maze (user testing), Miro",
    duration: "6 weeks",
    tags: ["UX", "Mobile", "Figma", "Research"],
    link: "",
    description: `
      <h2>Problem</h2>
      <p>First-year students consistently reported feeling overwhelmed navigating the campus during the first weeks. Existing maps were static and failed to account for real-world obstacles like construction zones and locked buildings.</p>

      <h2>Research</h2>
      <p>10 semi-structured interviews and a diary study with 6 first-year students revealed that the core anxiety was not about finding the destination — it was about <em>not knowing if you were going the right way</em>. Progressive confirmation became the central design principle.</p>

      <h2>Design</h2>
      <p>Signal uses landmark-based instructions ("Turn left at the glass bridge") rather than compass directions, provides frequent visual confirmation of progress, and surfaces contextual information (e.g., "this entrance is locked after 6 PM") at exactly the right moment.</p>

      <h2>Testing</h2>
      <p>Usability testing with 8 participants showed a 40% reduction in navigation errors compared to the existing campus app baseline.</p>
    `,
    images: [
      "images/signal-1.jpg",
      "images/signal-2.jpg",
      "images/signal-3.jpg"
    ]
  }
];
