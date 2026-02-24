const root = document.documentElement;

// Sidebar active link highlighting (sub-section anchors only)
const subLinks = document.querySelectorAll('.doc-sidebar nav a.sub');
const sections = document.querySelectorAll('[id]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      subLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.doc-sidebar nav a.sub[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => observer.observe(s));

// =============================================
// INPUT FIELD HELPERS
// =============================================

// Text input with clear button
function syncHasValue(fieldId, input) {
  const field = document.getElementById(fieldId);
  if (input.value.trim()) {
    field.classList.add('has-value');
  } else {
    field.classList.remove('has-value');
  }
}

function clearInput(fieldId, inputId) {
  const field = document.getElementById(fieldId);
  const input = document.getElementById(inputId);
  input.value = '';
  field.classList.remove('has-value', 'is-error');
  const msg = field.querySelector('.input-message');
  if (msg) msg.style.display = 'none';
  input.focus();
}

// Select dropdown
function syncSelect(fieldId, displayId, selectEl) {
  const display = document.getElementById(displayId);
  const chosen = selectEl.options[selectEl.selectedIndex];
  if (chosen && chosen.value) {
    display.textContent = chosen.text;
    display.classList.remove('is-placeholder');
  } else {
    display.textContent = chosen.text;
    display.classList.add('is-placeholder');
  }
}

function openSelect(fieldId) {
  document.getElementById(fieldId).classList.add('is-open');
}

function closeSelect(fieldId) {
  document.getElementById(fieldId).classList.remove('is-open');
}

// Inventory List Row — VFS data loader
async function loadVfsData(teamId) {
  try {
    const res = await fetch(`/teams/${teamId}.json`)
    if (!res.ok) return
    const data = await res.json()
    updateVfs('far', data.vfsFar)
    updateVfs('close', data.vfsClose)
  } catch (e) {}
}

function updateVfs(type, vfs) {
  document.querySelectorAll(`[data-vfs="${type}"]`).forEach(row => {
    const index = parseInt(row.dataset.vfsIndex, 10)
    const img = row.querySelector('.vfs-img')
    const placeholder = row.querySelector('.vfs-placeholder')
    const priceEl = row.querySelector('.vfs-price')
    const labelEl = row.querySelector('.vfs-price-label')
    const hasData = vfs && (vfs.images?.length > 0 || vfs.fallback)
    const imageUrl = hasData ? (vfs.images?.[index] || vfs.fallback || '') : ''
    const price = hasData ? (vfs.prices?.[index] || '') : ''
    if (imageUrl) {
      if (img) { img.src = imageUrl; img.style.display = '' }
      if (placeholder) placeholder.style.display = 'none'
    } else {
      if (img) { img.src = ''; img.style.display = 'none' }
      if (placeholder) placeholder.style.display = ''
    }
    if (priceEl) priceEl.textContent = price
    if (labelEl) labelEl.textContent = vfs?.priceLabel || 'Avg. Price'
  })
}

// Watch for theme changes and reload VFS data
new MutationObserver(mutations => {
  for (const m of mutations) {
    if (m.attributeName === 'data-theme') {
      loadVfsData(document.documentElement.getAttribute('data-theme'))
    }
  }
}).observe(document.documentElement, { attributes: true })

// Load on initial page render
loadVfsData(document.documentElement.getAttribute('data-theme'))

// =============================================
// EVENT ROW PREVIEW — live Sanity opposing teams
// =============================================

const _eventRowStates = [
  { label: 'Featured Only',      type: 'featured-only',   date: 'Tue, Oct 8 · 7 PM',  price: '$19+' },
  { label: 'Featured + Others',  type: 'featured-others', date: 'Thu, Oct 10 · 7 PM', price: '$21+', additionalOffers: 3 },
  { label: 'No Featured Offers', type: 'no-featured',     date: 'Wed, Oct 16 · 7 PM', offersAvailable: 3 },
  { label: 'Sold Out',           type: 'sold-out',        date: 'Tue, Oct 22 · 7 PM' },
  { label: 'Coming Soon',        type: 'coming-soon',     date: 'Sat, Oct 26 · 7 PM' },
]

function _buildEventRowPreviewItem(team, state) {
  const logo = team.logoUrl
    ? `<img class="event-row-logo" src="${team.logoUrl}" alt="${team.name}">`
    : (() => {
        const ini = team.name.split(' ').slice(0, 2).map(w => w[0]).join('')
        return `<div style="width:48px;height:48px;border-radius:50%;background:var(--neutral-300);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:var(--text-primary);flex-shrink:0;">${ini}</div>`
      })()
  const topInteractive = state.type === 'featured-only' || state.type === 'featured-others'
  const topSurface = topInteractive ? 'surface-section' : ''
  const rowCls = topInteractive ? 'list-row' : 'list-row not-tappable'
  const trailing = state.type === 'featured-only' || state.type === 'featured-others'
    ? `<div class="trailing trailing-gap-lg"><button class="btn btn-primary btn-100">${state.price}</button></div>`
    : state.type === 'sold-out'
    ? `<div class="trailing trailing-gap-sm"><span class="labelBold30 text-secondary">Sold Out</span></div>`
    : state.type === 'coming-soon'
    ? `<div class="trailing trailing-gap-sm"><span class="labelBold20 text-interactive-tertiary event-row-coming-soon">Coming Soon</span></div>`
    : ''
  const bottom = state.type === 'featured-others'
    ? `<div class="event-row-bottom surface-section"><div class="list-row"><div class="list-row-content"><div class="list-row-text-pair"><span class="labelBold30 text-interactive-tertiary">${state.additionalOffers} Additional Offers</span></div></div><div class="trailing trailing-gap-xs"><span class="icon material-symbols-rounded text-interactive-tertiary">arrow_drop_down</span></div></div></div>`
    : state.type === 'no-featured'
    ? `<div class="event-row-bottom surface-section"><div class="list-row"><div class="list-row-content"><div class="list-row-text-pair"><span class="labelBold30 text-interactive-tertiary">${state.offersAvailable} Offers Available</span></div></div><div class="trailing trailing-gap-xs"><span class="icon material-symbols-rounded text-interactive-tertiary">arrow_drop_down</span></div></div></div>`
    : ''
  return `<div>
    <p class="labelRegular10 text-secondary mb-100" style="padding:0 var(--spacing-200);">${state.label}</p>
    <div class="event-row">
      <div class="event-row-top ${topSurface}">
        <div class="${rowCls}">
          <div class="leading leading-gap-sm">${logo}</div>
          <div class="list-row-content"><div class="list-row-text-pair">
            <span class="event-row-label">${team.name}</span>
            <span class="event-row-sublabel text-secondary">${state.date}</span>
          </div></div>
          ${trailing}
        </div>
      </div>
      ${bottom}
    </div>
  </div>`
}

async function loadEventRowPreview() {
  const container = document.getElementById('event-row-preview-list')
  if (!container) return
  try {
    const q = encodeURIComponent(`*[_type == "opposingTeam" && defined(logo.asset)][0...5]{name, shortName, "logoUrl": logo.asset->url}`)
    const res = await fetch(`https://tqbbtja5.apicdn.sanity.io/v2024-01-01/data/query/production?query=${q}`)
    const { result = [] } = await res.json()
    if (result.length < 5) return
    container.innerHTML = _eventRowStates.map((s, i) => _buildEventRowPreviewItem(result[i], s)).join('')
  } catch (_) {}
}

loadEventRowPreview()
