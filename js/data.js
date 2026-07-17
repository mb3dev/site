/* Single source of truth for shared nav, footer, and project data.
   Rendered by js/site.js on every page. Edit content here, not in markup. */
window.SITE_DATA = {
  // Primary navigation (order = display order). `key` matches <body data-page="…">.
  nav: [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About', key: 'about' },
    { href: '/projects', label: 'Research & Projects', key: 'projects' },
    { href: '/books', label: 'Books', key: 'books' },
    { href: '/contact', label: 'Contact', key: 'contact' },
  ],

  // External profile links (footer, About, Contact).
  profiles: [
    { href: 'https://orcid.org/0000-0001-5462-8926', label: 'ORCID' },
    { href: 'https://national.academia.edu/MichaelBarros', label: 'Academia.edu' },
    { href: 'https://www.linkedin.com/in/michaelbarros22', label: 'LinkedIn' },
  ],

  email: 'mbarros@nu.edu',
  cvPdf: '/assets/Barros_CV_2026.pdf',

  // Footer page links, in display order, plus a direct CV download.
  footerNav: [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Research & Projects' },
    { href: '/books', label: 'Books' },
    { href: '/contact', label: 'Contact' },
    { href: '/assets/Barros_CV_2026.pdf', label: 'Download CV', blank: true },
  ],

  // Research & Projects page. `type: 'organization'` entries render under
  // "Initiatives"; `brief: true` entries render as a short linked card
  // pointing back to their full write-up on the Books page.
  projects: [
    {
      id: 'dissertation',
      title: 'Supernatural-Agent Concepts in Dreams',
      org: 'National University · Chair: Dr. Patrick McNamara',
      status: 'Active',
      desc: '<p>Doctoral research on how supernatural agents and religious concepts form and appear in dreams, drawing on grounded cognition, predictive processing, and the cognitive science of religion.</p>',
      current: 'data analysis &amp; chapter drafting',
      tags: ['Grounded Cognition', 'Dreams', 'Supernatural Agents', 'Religiosity'],
    },
    {
      id: 'zelda-religion',
      brief: true,
      title: 'The Legend of Zelda &amp; Religion',
      desc: 'An edited volume under contract examining how religion and the sacred emerge from the structure and narrative of <em>The Legend of Zelda</em> series.',
      bookUrl: '/books#zelda',
    },
    {
      id: 'omega-point',
      brief: true,
      title: "Philip K. Dick's Omega Point",
      desc: "A monograph under contract examining the relationship between Philip K. Dick's religious thought and the theology of Pierre Teilhard de Chardin.",
      bookUrl: '/books#omega-point',
    },
    {
      id: 'waypoint',
      type: 'organization',
      title: 'Waypoint Institute',
      org: 'waypoint.institute · Operations Director',
      status: 'Active',
      desc: '<p>A developing tuition-free Christian education initiative in theology and the humanities.</p>',
      url: 'https://waypoint.institute',
    },
    {
      id: 'religious-cognition-collab',
      type: 'organization',
      title: 'Religious Cognition Collaborative',
      org: 'religiouscognitioncollab.org · Managing Director',
      status: 'Active',
      desc: '<p>A research network connecting scholars studying religion, cognition, and religious experience.</p>',
      url: 'https://www.religiouscognitioncollab.org',
    },
  ],
};
