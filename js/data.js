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
      desc:
        '<p>My doctoral research examines how supernatural agents and religious concepts are formed and represented during dreams. The project brings together grounded cognition, predictive processing, dream research, and the cognitive science of religion.</p>' +
        '<p>Using longitudinal dream reports, psychological measures, and sleep data, the study investigates how sensory, emotional, social, and narrative features contribute to changes in religious and supernatural thought across sleep and waking experience.</p>' +
        '<p>The broader goal is to develop an empirically grounded account of how religious concepts emerge from embodied and simulated experience rather than treating them solely as abstract beliefs.</p>',
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
      desc: '<p>Waypoint Institute is a developing Christian educational initiative intended to provide serious theological and humanities education without tuition barriers. Its long-term aim is to make structured Christian learning available to students who may not have access to conventional academic institutions.</p>',
      url: 'https://waypoint.institute',
    },
    {
      id: 'religious-cognition-collab',
      type: 'organization',
      title: 'Religious Cognition Collaborative',
      org: 'religiouscognitioncollab.org · Managing Director',
      status: 'Active',
      desc: '<p>The Religious Cognition Collaborative supports interdisciplinary research on religion, cognition, neuroscience, psychology, and religious experience. Its work is intended to connect researchers across fields, encourage collaborative projects, and make research on religious cognition more accessible beyond narrow disciplinary boundaries.</p>',
      url: 'https://www.religiouscognitioncollab.org',
    },
  ],
};
