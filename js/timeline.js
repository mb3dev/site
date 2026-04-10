(function initTimeline() {
  window.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('timeline-grid');
    const fallback = document.getElementById('timeline-fallback');
    const drawer = document.getElementById('timeline-drawer');
    const closeBtn = document.getElementById('drawer-close');
    const titleEl = document.getElementById('drawer-title');
    const bodyEl = document.getElementById('drawer-body');
    const chips = Array.from(document.querySelectorAll('.chip[data-track]'));

    if (!grid || !drawer || !closeBtn || !titleEl || !bodyEl) return;

    const allItems = (window.SITE_DATA && Array.isArray(window.SITE_DATA.timeline)) ? window.SITE_DATA.timeline : [];
    if (!allItems.length) return;

    let activeTrack = 'all';
    grid.hidden = false;

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
      }[c]));
    }

    function render() {
      const items = activeTrack === 'all' ? allItems : allItems.filter((i) => i.track === activeTrack);
      grid.innerHTML = items.map((item) => `
        <button type="button" class="timeline-item" data-id="${escapeHtml(item.id)}">
          <strong>${escapeHtml(item.title)}</strong>
          <span class="muted"> (${escapeHtml(item.start)}–${escapeHtml(item.end || 'present')})</span>
        </button>
      `).join('');
    }

    function openDrawer(item) {
      titleEl.textContent = item.title;
      bodyEl.innerHTML = `
        <p>${escapeHtml(item.summary || '')}</p>
        <p><strong>Track:</strong> ${escapeHtml(item.track || '')}</p>
        <p><strong>Dates:</strong> ${escapeHtml(item.start || '')} – ${escapeHtml(item.end || 'present')}</p>
        <p><strong>Tags:</strong> ${(item.tags || []).map(escapeHtml).join(', ')}</p>
        <ul>${(item.artifacts || []).map((a) => `<li><a href="${a.href}">${escapeHtml(a.label)}</a></li>`).join('')}</ul>
      `;
      drawer.setAttribute('data-open', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
    }

    function closeDrawer() {
      drawer.setAttribute('data-open', 'false');
      drawer.setAttribute('aria-hidden', 'true');
    }

    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-id]');
      if (!btn) return;
      const item = allItems.find((i) => i.id === btn.dataset.id);
      if (item) openDrawer(item);
    });

    closeBtn.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        activeTrack = chip.dataset.track || 'all';
        chips.forEach((other) => {
          const active = other === chip;
          other.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        render();
      });
    });

    if (fallback) fallback.hidden = true;
    render();
  });
})();
