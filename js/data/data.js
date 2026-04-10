(() => {
  const SITE_DATA = {
    links: {
      blog: 'https://mythonoesis.substack.com/',
      research: 'https://www.researchgate.net/'
    },
    contact: {
      email: 'barrostheology@gmail.com'
    },
    books: [
      {
        id: 'pkd-esoteric-theology',
        featured: true,
        title: 'The Esoteric Theology of Philip K. Dick',
        status: 'Published · Jan 8, 2026',
        summary:
          'Edited scholarly volume (Bloomsbury, published January 8, 2026) on Philip K. Dick's theology, mysticism, and Christian esotericism.',
        cover: './assets/images/books/pkd.jpg',
        buy_links: [
          {
            label: 'Order',
            url: 'https://amzn.to/46Fn12N'
          }
        ],
        description:
          'This volume marks the 50th anniversary of Philip K. Dick\'s 1974 experiences and examines his religious imagination through interdisciplinary scholarship. Contributors engage Dick as Christian, mystic, theologian, and speculative writer, while addressing reception history and adaptation.',
        reviews: []
      }
    ],
    projects: [
      {
        id: 'dream-cognition-dissertation',
        hero: true,
        accent: 'violet',
        type: 'Dissertation',
        field: 'csr',
        title: 'Dream Simulation & Supernatural Agent Cognition',
        summary:
          'A grounded-cognition dissertation testing whether simulation richness in dream reports predicts religiosity and paranormal belief orientation.',
        status: 'Active data analysis and chapter drafting',
        links: [{ label: 'Dissertation overview', href: './about.html#dissertation' }]
      },
      {
        id: 'zelda-religion',
        accent: 'gold',
        type: 'Article cluster',
        field: 'religion-culture',
        title: 'The Legend of Zelda & Religion',
        summary:
          'A research and writing cluster on sacred imagination, ritual structure, and symbolic memory across Zelda narratives and fan cultures.',
        status: 'Ongoing writing and conference expansion',
        links: [{ label: 'Related essays', href: 'https://mythonoesis.substack.com/' }]
      },
      {
        id: 'waypoint-institute',
        accent: 'blue',
        type: 'Institute development',
        field: 'religion-culture',
        title: 'Waypoint Institute Initiative',
        summary:
          'Program design and editorial planning for interdisciplinary projects bridging theology, culture, and media analysis.',
        status: 'Planning and partnership development',
        links: []
      }
    ],
    updates: [
      {
        date: '2026-03-24',
        accent: 'violet',
        title: 'Dissertation model refinement completed',
        text:
          'Completed revisions to the grounded-cognition model and updated coding schema for dream-report analysis in the current dissertation chapter sequence.',
        projectId: 'dream-cognition-dissertation'
      }
    ],
    appearances: [
      {
        date: '2026-02-14',
        event: 'SWPACA Conference',
        title: 'Paper: Reality Shifters of Reddit',
        notes: 'Roundtables on immersion and symbolic media.'
      },
      {
        date: '2026-11-06',
        event: 'Conference appearance (planned)',
        title: 'Dream reports and religious cognition',
        notes: 'Details to be announced.'
      }
    ],
    timeline: [
      {
        id: 'abd',
        track: 'scholarship',
        title: 'PhD Candidate (ABD)',
        start: '2021-01',
        end: null,
        summary:
          'Doctoral work in cognitive science of religion with focus on dream simulation, supernatural agents, and grounded cognition.',
        tags: ['dreams', 'religion', 'cognition'],
        artifacts: [{ label: 'Dissertation overview', href: './about.html#dissertation' }]
      },
      {
        id: 'teaching',
        track: 'teaching',
        title: 'Adjunct and secondary teaching',
        start: '2020-01',
        end: null,
        summary: 'Teaching across philosophy, theology, and literature with cross-disciplinary course design.',
        tags: ['teaching'],
        artifacts: [{ label: 'Projects and research', href: './projects.html' }]
      }
    ],
    substack: {
      url: 'https://mythonoesis.substack.com/'
    }
  };

  window.SITE_DATA = SITE_DATA;
  window.LINKS = SITE_DATA.links;
})();