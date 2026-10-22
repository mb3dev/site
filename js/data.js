/* Single source of truth for shared nav, footer, and project data.
   Rendered by js/site.js on every page. Edit content here, not in markup. */
window.SITE_DATA = {
  // Primary navigation (order = display order). `key` matches <body data-page="…">.
  nav: [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About', key: 'about' },
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

  // Homepage "Research Areas" tags — research interests.
  researchInterests: [
    'Cognitive Science of Religion',
    'Dreams',
    'Theology of Culture',
    'Religion and Culture',
    'Media Theory',
  ],

  // Footer page links, in display order.
  footerNav: [
    { href: '/about', label: 'About' },
    { href: '/books', label: 'Books' },
    { href: '/contact', label: 'Contact' },
  ],

};
