// ── state ──────────────────────────────────────────────────────
let currentFilter = { status: 'all', category: 'all', search: '' };

// ── status config ──────────────────────────────────────────────
const STATUS = {
  active:    { label: 'Active',    dot: 'dot-active' },
  completed: { label: 'Completed', dot: 'dot-completed' },
  paused:    { label: 'Paused',    dot: 'dot-paused' },
  planned:   { label: 'Planned',   dot: 'dot-planned' },
};

// ── boot ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildCategoryNav();
  buildStats();
  renderBadges();
  renderGrid();

  document.getElementById('search').addEventListener('input', e => {
    currentFilter.search = e.target.value.toLowerCase();
    renderGrid();
  });
});

// ── filters ────────────────────────────────────────────────────
function filterStatus(s) {
  currentFilter.status = currentFilter.status === s ? 'all' : s;
  currentFilter.category = 'all';
  updateNavActive();
  document.getElementById('page-heading').textContent =
    currentFilter.status === 'all' ? 'All Projects' : STATUS[currentFilter.status].label;
  renderGrid();
}

function filterCategory(c) {
  currentFilter.category = currentFilter.category === c ? 'all' : c;
  currentFilter.status = 'all';
  updateNavActive();
  document.getElementById('page-heading').textContent =
    currentFilter.category === 'all' ? 'All Projects' : currentFilter.category;
  renderGrid();
}

function updateNavActive() {
  document.querySelectorAll('.side-link').forEach(l => l.classList.remove('active'));
  if (currentFilter.status !== 'all') {
    const el = document.getElementById('nav-' + currentFilter.status);
    if (el) el.classList.add('active');
  }
  if (currentFilter.category !== 'all') {
    document.querySelectorAll('.cat-link').forEach(l => {
      if (l.dataset.cat === currentFilter.category) l.classList.add('active');
    });
  }
}

// ── build sidebar categories ───────────────────────────────────
function buildCategoryNav() {
  const cats = [...new Set(projects.map(p => p.category))];
  const nav = document.getElementById('cat-nav');
  nav.innerHTML = cats.map(c => `
    <a href="#" class="side-link cat-link" data-cat="${c}" onclick="filterCategory('${c}');return false;">
      <span class="side-icon">▸</span> ${c}
      <span class="badge">${projects.filter(p => p.category === c).length}</span>
    </a>`).join('');
}

// ── stats row ──────────────────────────────────────────────────
function buildStats() {
  const total = projects.length;
  const byStatus = {};
  Object.keys(STATUS).forEach(s => byStatus[s] = projects.filter(p => p.status === s).length);
  const avgProgress = Math.round(
    projects.filter(p => p.status === 'active').reduce((a,p) => a + p.progress, 0) /
    (byStatus.active || 1)
  );

  document.getElementById('stats-row').innerHTML = `
    <div class="stat-card">
      <span class="stat-num">${total}</span>
      <span class="stat-label">Total</span>
    </div>
    <div class="stat-card">
      <span class="stat-num dot-active-text">${byStatus.active}</span>
      <span class="stat-label">Active</span>
    </div>
    <div class="stat-card">
      <span class="stat-num dot-completed-text">${byStatus.completed}</span>
      <span class="stat-label">Completed</span>
    </div>
    <div class="stat-card">
      <span class="stat-num">${avgProgress}%</span>
      <span class="stat-label">Avg. active progress</span>
    </div>`;
}

// ── render badges ──────────────────────────────────────────────
function renderBadges() {
  Object.keys(STATUS).forEach(s => {
    const el = document.getElementById('badge-' + s);
    if (el) el.textContent = projects.filter(p => p.status === s).length;
  });
}

// ── render grid ────────────────────────────────────────────────
function renderGrid() {
  let list = projects;
  if (currentFilter.status !== 'all')   list = list.filter(p => p.status === currentFilter.status);
  if (currentFilter.category !== 'all') list = list.filter(p => p.category === currentFilter.category);
  if (currentFilter.search) list = list.filter(p =>
    p.title.toLowerCase().includes(currentFilter.search) ||
    p.summary.toLowerCase().includes(currentFilter.search) ||
    (p.tags || []).some(t => t.toLowerCase().includes(currentFilter.search))
  );

  const grid = document.getElementById('projects-grid');
  const empty = document.getElementById('empty-state');

  if (!list.length) {
    grid.innerHTML = '';
    empty.style.display = 'flex';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = list.map((p, i) => {
    const s = STATUS[p.status] || STATUS.planned;
    const imgHtml = p.image
      ? `<img src="${p.image}" alt="${p.title}" class="card-img">`
      : `<div class="card-img-placeholder"><span>${p.title.charAt(0)}</span></div>`;

    return `
      <article class="p-card" style="animation-delay:${i*40}ms" onclick="openDrawer('${p.id}')">
        <div class="card-top">
          ${imgHtml}
          <div class="card-status-row">
            <span class="status-pill ${p.status}">
              <span class="dot ${s.dot}"></span>${s.label}
            </span>
            <span class="card-category">${p.category}</span>
          </div>
        </div>
        <div class="card-body">
          <h2 class="card-title">${p.title}</h2>
          <p class="card-summary">${p.summary}</p>
          ${p.tags && p.tags.length ? `<div class="card-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>` : ''}
          <div class="card-footer">
            <div class="progress-wrap">
              <div class="progress-bar">
                <div class="progress-fill" style="width:${p.progress}%"></div>
              </div>
              <span class="progress-label">${p.progress}%</span>
            </div>
            <span class="card-date">${p.updated !== '—' ? 'Updated ' + p.updated : 'Not started'}</span>
          </div>
        </div>
      </article>`;
  }).join('');
}

// ── drawer ─────────────────────────────────────────────────────
function openDrawer(id) {
  const p = projects.find(x => x.id === id);
  if (!p) return;
  const s = STATUS[p.status] || STATUS.planned;

  document.getElementById('drawer-content').innerHTML = `
    <div class="drawer-header">
      <div class="drawer-status">
        <span class="status-pill ${p.status}"><span class="dot ${s.dot}"></span>${s.label}</span>
        <span class="card-category">${p.category}</span>
      </div>
      <h2 class="drawer-title">${p.title}</h2>
      <p class="drawer-summary">${p.summary}</p>
    </div>

    <div class="drawer-meta">
      <div class="meta-item"><span class="meta-label">Started</span><span>${p.started}</span></div>
      <div class="meta-item"><span class="meta-label">Last updated</span><span>${p.updated}</span></div>
      <div class="meta-item"><span class="meta-label">Progress</span><span>${p.progress}%</span></div>
    </div>

    <div class="drawer-progress">
      <div class="progress-bar large">
        <div class="progress-fill" style="width:${p.progress}%"></div>
      </div>
    </div>

    ${p.tags && p.tags.length ? `<div class="drawer-tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>` : ''}

    <div class="drawer-description">${p.description}</div>

    ${p.link ? `<a href="${p.link}" target="_blank" class="drawer-link">View external link ↗</a>` : ''}
  `;

  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('visible');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
