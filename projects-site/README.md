# P-Projects — Project Tracker

A clean GitHub Pages site to keep track of all your projects.  
Gray/white theme. No build tools, no frameworks — just open `index.html`.

---

## 🚀 Publishing to GitHub Pages

1. Push these files to your repo (`Pieter745/P-Projects`)
2. Go to **Settings → Pages → Deploy from branch → main / root → Save**
3. Live at: `https://pieter745.github.io/P-Projects/`

If your files are inside a subfolder (e.g. `Projects/`), set that as the source folder in Pages settings.

---

## ✏️ Adding / Editing Projects

**Open `js/data.js`** — that's the only file you need to edit.

```javascript
{
  id: "project-myname",       // unique, no spaces
  title: "My Project",
  status: "active",           // "active" | "completed" | "paused" | "planned"
  category: "Hardware",       // shows in sidebar filter
  started: "Jan 2025",
  updated: "May 2025",
  summary: "One sentence shown on the card.",
  description: `
    <p>Longer notes shown in the side panel.</p>
  `,
  tags: ["Arduino", "3D Print"],
  progress: 60,               // 0–100
  image: "images/myproject.jpg",  // leave "" for placeholder
  link: ""                    // optional URL
}
```

Add as many objects as you want. The grid, filters, and stats update automatically.

---

## 📁 File Structure

```
index.html          ← the whole site
css/style.css       ← all styling
js/data.js          ← your project data
js/app.js           ← logic (no need to edit)
images/             ← drop your project images here
```
