/* Shared site behavior:
   - injects the header + footer from window.SITE_DATA (single source of truth)
   - renders the homepage "Now" list and Projects cards from SITE_DATA.projects
   - wires nav toggle, footer year, copy buttons, project filters, scroll reveal
   Loaded with `defer`, so the DOM is parsed before this runs. */
(() => {
  const D = window.SITE_DATA || {};

  /* ---------- Header ---------- */
  function renderHeader() {
    const host = document.querySelector('[data-site-header]');
    if (!host || !D.nav) return;
    const page = document.body.dataset.page || '';
    const links = D.nav
      .map((item) => {
        const current = item.key === page ? ' aria-current="page"' : '';
        return `<a href="${item.href}"${current}>${item.label}</a>`;
      })
      .join('\n        ');
    host.innerHTML = `
      <div class="wrap">
        <a class="brand" href="/">Michael C.&nbsp;Barros</a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
        <nav class="nav" id="site-nav" aria-label="Primary">
        ${links}
        </nav>
      </div>`;
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const host = document.querySelector('[data-site-footer]');
    if (!host) return;
    const tagline = (D.tagline || [])
      .map((t) => `<a href="${t.href}">${t.label}</a>`)
      .join(' · ');
    const profiles = (D.profiles || [])
      .map((p) => `<a href="${p.href}" target="_blank" rel="noopener">${p.label}</a>`)
      .join('\n        ');
    const year = new Date().getFullYear();
    host.innerHTML = `
      <div class="wrap">
        <p class="name">Michael C. Barros</p>
        <nav class="tag" aria-label="Explore">
        ${tagline}
        </nav>
        <nav class="footer-links" aria-label="Profiles">
        ${profiles}
        </nav>
        <p class="fine">© ${year} Michael C. Barros</p>
      </div>`;
  }

  /* ---------- Homepage "Now" list ---------- */
  function renderUpdates() {
    const host = document.querySelector('[data-updates]');
    if (!host || !D.projects) return;
    host.innerHTML = D.projects
      .map(
        (p) => `
        <li>
          <span class="meta--caps meta">${p.shortTitle}</span>
          <p>${p.now}</p>
        </li>`
      )
      .join('');
  }

  /* ---------- Projects cards ---------- */
  function projectCard(p) {
    const heading = p.url
      ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
      : p.title;
    const tags = p.tags.map((t) => `<span>${t}</span>`).join('\n            ');
    return `
        <article class="project reveal" id="${p.id}" data-fields="${p.fields.join(' ')}">
          <div class="project__head">
            <h2>${heading}</h2>
            <span class="status status--active">${p.status}</span>
          </div>
          <p class="org">${p.org}</p>
          <p class="desc">${p.desc}</p>
          <p class="current"><strong>Current:</strong> ${p.current}</p>
          <div class="tags">
            ${tags}
          </div>
        </article>`;
  }

  function renderProjects() {
    if (!D.projects) return;
    // Top group (unlabeled): everything that isn't an organization.
    const work = document.querySelector('[data-projects]');
    if (work) {
      work.innerHTML = D.projects
        .filter((p) => p.type !== 'organization')
        .map(projectCard)
        .join('');
    }
    // Bottom group: standing organizations, under an "Organizations" heading.
    const orgHost = document.querySelector('[data-organizations]');
    if (orgHost) {
      const orgs = D.projects.filter((p) => p.type === 'organization');
      orgHost.innerHTML = orgs.length
        ? `<h2 class="group-head reveal">Organizations</h2>${orgs.map(projectCard).join('')}`
        : '';
    }
  }

  /* ---------- Project filters ---------- */
  function wireFilters() {
    const chips = document.querySelectorAll('.chip[data-filter]');
    const projects = document.querySelectorAll('.project[data-fields]');
    if (!chips.length || !projects.length) return;
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        chips.forEach((c) => c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'));
        const f = chip.getAttribute('data-filter');
        projects.forEach((p) => {
          const show = f === 'all' || p.getAttribute('data-fields').split(' ').includes(f);
          p.classList.toggle('is-hidden', !show);
        });
      });
    });
  }

  /* ---------- Mobile nav toggle ---------- */
  function wireNavToggle() {
    const header = document.querySelector('.site-header');
    const toggle = header && header.querySelector('.nav-toggle');
    if (!header || !toggle) return;
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', (e) => {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------- Copy-to-clipboard buttons ---------- */
  function wireCopyButtons() {
    document.querySelectorAll('.copy-btn[data-copy]').forEach((btn) => {
      const original = btn.textContent;
      btn.addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(btn.getAttribute('data-copy'));
          btn.textContent = 'Copied';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = original;
            btn.classList.remove('copied');
          }, 1600);
        } catch {
          /* clipboard unavailable — leave button as-is */
        }
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  function wireReveal() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll('.reveal:not(.in)');
    if (!reduced && 'IntersectionObserver' in window && targets.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
      );
      targets.forEach((el) => io.observe(el));
    } else {
      targets.forEach((el) => el.classList.add('in'));
    }
  }

  /* ---------- Init (order matters: inject, then render, then wire) ---------- */
  renderHeader();
  renderFooter();
  renderUpdates();
  renderProjects();
  wireFilters();
  wireNavToggle();
  wireCopyButtons();
  wireReveal();
})();
