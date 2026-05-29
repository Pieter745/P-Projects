# 🗂 Portfolio — GitHub Pages Setup Guide

A clean, fast portfolio site with a projects index page and individual project detail pages. No build tools, no frameworks — just HTML, CSS, and JavaScript.

---

## 📁 File Structure

```
portfolio/
├── index.html          ← Home page
├── projects.html       ← All projects listing
├── css/
│   └── style.css       ← All styles
├── js/
│   └── data.js         ← ⭐ YOUR PROJECT DATA (edit this!)
├── images/
│   ├── placeholder.svg ← Fallback image
│   └── (your images)   ← Add your project images here
└── projects/
    ├── project-template.html   ← Template to copy
    ├── project-plonze.html     ← Example project page
    ├── project-loopchair.html  ← Example project page
    └── project-signalapp.html  ← Example project page
```

---

## 🚀 Publishing to GitHub Pages

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it `yourname.github.io` (for a user site) **or** any name (for a project site)
3. Make it **Public**
4. Don't initialize with a README (you'll upload your files)

### Step 2 — Upload your files
**Option A — Drag and drop (easiest):**
1. Open your new repository on GitHub
2. Click **"uploading an existing file"** or drag files onto the page
3. Upload everything — maintain the folder structure!

**Option B — Git (recommended for ongoing updates):**
```bash
cd your-portfolio-folder
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Choose **main** branch, **/ (root)** folder → **Save**
4. After a minute, your site is live at `https://yourusername.github.io/your-repo-name/`

---

## ✏️ Adding Your Own Projects

### 1. Edit `js/data.js`
Add a new object to the `projects` array:

```javascript
{
  id: "project-myproject",        // must match your HTML filename
  title: "My Project Name",
  category: "Product Design",     // used for filtering
  year: "2024",
  summary: "One sentence about the project shown on the card.",
  thumb: "images/myproject-thumb.jpg",  // 4:3 ratio image recommended
  hero:  "images/myproject-hero.jpg",   // wider image for detail page
  role: "Designer",
  tools: "Figma, Illustrator",
  duration: "6 weeks",
  tags: ["UX", "Research"],
  link: "https://...",             // optional live link
  description: `
    <h2>The Challenge</h2>
    <p>Describe the problem you were solving.</p>

    <h2>Process</h2>
    <p>Describe your approach.</p>

    <h2>Result</h2>
    <p>What was the outcome?</p>
  `,
  images: [
    "images/myproject-1.jpg",
    "images/myproject-2.jpg"
  ]
}
```

### 2. Create the project HTML page
Copy `projects/project-template.html` and rename it to match your `id`:
```
projects/project-myproject.html
```
That's it! The page auto-reads from `data.js`.

### 3. Add your images
Drop your images into the `images/` folder. Recommended sizes:
- **Thumbnail** (`-thumb.jpg`): 800×600px
- **Hero** (`-hero.jpg`): 1600×900px
- **Gallery** images: 1000×700px

---

## 🎨 Customising the Design

All styles are in `css/style.css`. Key variables at the top:

```css
:root {
  --ink:    #1a1814;   /* main text colour */
  --paper:  #f5f2ec;   /* background */
  --accent: #c8502a;   /* orange-red accent */
  --accent2: #3a5c52;  /* green accent */
}
```

Change the Google Fonts import in each HTML `<head>` to switch fonts.

---

## 💡 Tips

- Keep project `id` values URL-safe: lowercase, hyphens only
- Images are lazy-loaded by the browser automatically
- The filter bar on `projects.html` auto-generates from your `category` values
- Projects appear in the order they're listed in `data.js`
