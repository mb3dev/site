/* Single source of truth for shared nav, footer, and project data.
   Rendered by js/site.js on every page. Edit content here, not in markup. */
window.SITE_DATA = {
  // Primary navigation (order = display order). `key` matches <body data-page="…">.
  nav: [
    { href: '/about.html', label: 'About', key: 'about' },
    { href: '/books.html', label: 'Books', key: 'books' },
    { href: '/projects.html', label: 'Projects', key: 'projects' },
    { href: '/timeline.html', label: 'Timeline', key: 'timeline' },
    { href: '/cv.html', label: 'CV', key: 'cv' },
    { href: '/contact.html', label: 'Contact', key: 'contact' },
  ],

  // External profile links (footer).
  profiles: [
    { href: 'https://orcid.org/0000-0001-5462-8926', label: 'ORCID' },
    { href: 'https://national.academia.edu/MichaelBarros', label: 'Academia.edu' },
    { href: 'https://www.linkedin.com/in/michaelbarros22', label: 'LinkedIn' },
  ],

  // Footer tagline links.
  tagline: [
    { href: '/about.html#dissertation', label: 'Research' },
    { href: '/books.html', label: 'Books' },
    { href: '/projects.html', label: 'Projects' },
  ],

  // Projects — powers BOTH the homepage "Now" list and the Projects page cards.
  //   shortTitle + now  -> homepage "What I'm working on right now"
  //   title/org/desc/current/tags/fields -> Projects page cards & filters
  projects: [
    {
      id: 'dissertation',
      shortTitle: 'Dissertation',
      title: 'Dissertation: The Relationship Between Sensorimotor Dream Content and Waking Spiritual Experience',
      org: 'National University · Chair: Dr. Patrick McNamara',
      fields: ['dissertation', 'csr'],
      status: 'Active',
      desc: 'Examines whether simulation richness in dream content predicts religiosity and paranormal belief. Uses a grounded cognition framework — modeling dreaming as a high-intensity simulation process — and longitudinal dream data to test how variation in simulated experience relates to supernatural agent concepts and belief orientation.',
      current: 'data analysis &amp; chapter drafting',
      now: 'Recently submitted Chapter 3. Currently building out a new coding system and putting together the overall dissertation proposal — aiming to have that complete within the next few weeks.',
      tags: ['Grounded Cognition', 'Dreams', 'Supernatural Agents', 'Religiosity'],
    },
    {
      id: 'zelda-religion',
      shortTitle: 'The Legend of Zelda &amp; Religion',
      title: 'The Legend of Zelda &amp; Religion',
      org: 'Bloomsbury Academic · with Talbot Hook · due June 2026',
      fields: ['media-religion'],
      status: 'Active',
      desc: 'An edited scholarly volume exploring how religion and the sacred emerge from within the structure and narrative of <em>The Legend of Zelda</em> series. Rather than mapping Zelda onto existing traditions, the volume investigates how religious meaning arises internally — through gameplay mechanics, symbolism, spatial design, and narrative. Timed to coincide with the Zelda film debut in March 2027.',
      current: 'second drafts',
      now: 'First round of drafts complete. Authors are now on their second round of revisions.',
      tags: ['Zelda', 'Media Studies', 'Myth', 'Sacred Space'],
    },
    {
      id: 'omega-point',
      shortTitle: 'The Omega Point of Philip K. Dick',
      title: "Philip K. Dick's Omega Point",
      org: 'Anti-Oedipus Press · Exegetics: PKD Studies',
      fields: ['media-religion'],
      status: 'Active',
      desc: "A monograph examining Philip K. Dick's engagement with Pierre Teilhard de Chardin's theology — particularly the concept of the Omega Point — drawing primarily from Dick's <em>Exegesis</em>. The volume maps the extent of Dick's reading of Chardin and investigates how he makes use of and expands Chardin's eschatological framework.",
      current: 'initial research',
      now: "Still in the research phase. Working through transcriptions of PKD's unpublished notebooks and mapping his engagement with Teilhard de Chardin's eschatology.",
      tags: ['PKD', 'Teilhard de Chardin', 'Eschatology', 'Exegesis'],
    },
    {
      id: 'waypoint',
      type: 'organization',
      shortTitle: 'Waypoint Institute',
      title: 'Waypoint Institute',
      org: 'waypoint.institute',
      fields: ['education'],
      status: 'Active',
      desc: 'A tuition-free Christian college education pursuing the Good, the True, and the Beautiful. Waypoint Institute offers a supporter-funded college pathway in Scripture, doctrine, culture, and mission — delivered through self-paced modules, guided checkpoints, and oral capstone examinations. Designed to make serious theological formation accessible without cost barriers.',
      current: 'pre-launch testing',
      now: 'Currently in the second round of beta testing.',
      tags: ['Christian Education', 'Tuition-Free', 'Formation'],
      url: 'https://waypoint.institute',
    },
    {
      id: 'religious-cognition-collab',
      type: 'organization',
      shortTitle: 'Religious Cognition Collaborative',
      title: 'Religious Cognition Collaborative',
      org: 'religiouscognitioncollab.org · Managing Director',
      fields: ['csr'],
      status: 'Active',
      desc: 'A research organization advancing the interdisciplinary study of religious cognition — bringing together scholars across psychology, cognitive science, and religious studies to support empirical work on how the mind gives rise to religious and spiritual experience.',
      current: 'operations &amp; research coordination',
      now: 'Coordinating research and operations as Managing Director.',
      tags: ['Cognitive Science of Religion', 'Research Network', 'Collaboration'],
      url: 'https://www.religiouscognitioncollab.org',
    },
  ],
};
