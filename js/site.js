/* Shared site behavior:
   - injects the header + footer from window.SITE_DATA (single source of truth)
   - renders the Initiatives page cards and the homepage research-area tags
   - normalizes browser and social-preview titles
   - wires nav toggle, copy buttons, scroll reveal
   Loaded with `defer`, so the DOM is parsed before this runs. */
(() => {
  const D = window.SITE_DATA || {};

  function normalizePageTitles() {
    const page = document.body.dataset.page || 'home';
    const names = { home: '', about: 'About', initiatives: 'Initiatives', books: 'Books', contact: 'Contact' };
    const title = page === 'home' ? 'Michael C. Barros' : `${names[page] || page} | Michael C. Barros`;
    document.title = title;
    ['meta[property="og:title"]', 'meta[name="twitter:title"]'].forEach((selector) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute('content', title);
    });
  }

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
        <a class="brand" href="/"><img class="brand__mark" src="/assets/logo-mb.png" alt="" width="34" height="34" aria-hidden="true" />Michael C.&nbsp;Barros</a>
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
    const pages = (D.footerNav || [])
      .map((t) => {
        const attrs = t.blank ? ' target="_blank" rel="noopener"' : '';
        return `<a href="${t.href}"${attrs}>${t.label}</a>`;
      })
      .join(' · ');
    const profiles = (D.profiles || [])
      .map((p) => `<a href="${p.href}" target="_blank" rel="noopener">${p.label}</a>`)
      .join('\n        ');
    const year = new Date().getFullYear();
    host.innerHTML = `
      <div class="wrap">
        <p class="name">Michael C. Barros</p>
        <nav class="tag" aria-label="Explore">
        ${pages}
        </nav>
        <nav class="footer-links" aria-label="Profiles">
        ${profiles}
        </nav>
        ${D.email ? `<p class="footer-email"><a href="mailto:${D.email}">${D.email}</a></p>` : ''}
        <p class="fine">© ${year} Michael C. Barros</p>
      </div>`;
  }

  /* ---------- Initiatives cards ---------- */
  function initiativeCard(p) {
    const heading = p.url
      ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
      : p.title;
    return `
        <article class="project reveal" id="${p.id}">
          <div class="project__head">
            <h2>${heading}</h2>
            <span class="status status--active">${p.status}</span>
          </div>
          <p class="org">${p.org}</p>
          <div class="desc">${p.desc}</div>
        </article>`;
  }

  function renderInitiatives() {
    const host = document.querySelector('[data-initiatives]');
    if (!host || !D.initiatives) return;
    host.innerHTML = D.initiatives.map(initiativeCard).join('');
  }

  /* ---------- Homepage research-area tags ---------- */
  function renderResearchInterests() {
    const host = document.querySelector('[data-research-tags]');
    if (!host || !D.researchInterests) return;
    host.innerHTML = D.researchInterests.map((t) => `<span>${t}</span>`).join('\n            ');
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

  normalizePageTitles();
  renderHeader();
  renderFooter();
  renderInitiatives();
  renderResearchInterests();
  wireNavToggle();
  wireCopyButtons();
  wireReveal();
})();