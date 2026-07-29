/* Single source of truth for shared nav, footer, and project data.
   Rendered by js/site.js on every page. Edit content here, not in markup. */
window.SITE_DATA = {
  // Primary navigation (order = display order). `key` matches <body data-page="…">.
  nav: [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About', key: 'about' },
    { href: '/initiatives', label: 'Initiatives', key: 'initiatives' },
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

  // Homepage "Research Areas" tags — kept in sync with the CV's Research
  // Interests line.
  researchInterests: [
    'Cognitive Science of Religion',
    'Dreams',
    'Theology of Culture',
    'Religion and Culture',
    'Grounded Cognition',
    'Media Theory',
  ],

  // Footer page links, in display order, plus a direct CV download.
  footerNav: [
    { href: '/about', label: 'About' },
    { href: '/initiatives', label: 'Initiatives' },
    { href: '/books', label: 'Books' },
    { href: '/contact', label: 'Contact' },
    { href: '/assets/Barros_CV_2026.pdf', label: 'Download CV', blank: true },
  ],

  // Initiatives page.
  initiatives: [
    {
      id: 'waypoint',
      title: 'Waypoint Institute',
      org: 'waypoint.institute · Operations Director',
      status: 'Active',
      desc: '<p>A developing tuition-free Christian education initiative in theology and the humanities.</p>',
      url: 'https://waypoint.institute',
    },
  ],
};
