export default {
  general: {
    cta: {
      menu: 'Menu',
      language: 'Language',
    },
    personal: {
      phone: {
        name: '+49 (0)152 26269766',
        to: 'tel:+49(0)15226269766',
        title: 'Call me via @:general.personal.phone.name',
      },
      email: {
        name: "info{'@'}lutzweigold.de",
        to: "mailto:info{'@'}lutzweigold.de",
        title: 'Email me at @:general.personal.email.name',
      },
      website: {
        name: 'lutzweigold.de',
        to: '/',
        title: 'Check out the website @:general.personal.website.name',
      },
      company: 'Lutz Weigold (Einzelunterehmen)',
      street: 'Hintergasse 8',
      city: 'Wald-Michelbach',
      code: '69483',
    },
    phrases: {
      openInNewTab: 'Open web page in a new browser tab:',
      openInSameTab: 'Discover webpage:',
    },
    footer: {
      contact: 'Contact details',
      copyright: '© lutz weigold',
      headline: "Let's collaborate and build your next projects together.",
    },
  },
  pages: {
    about: {
      name: 'About',
      title: '@:general.phrases.openInSameTab @:pages.about.name',
      description: 'the description',
      to: 'index',
      content: {
        visual: {
          headline: 'I build digital solutions, tailer-made for your audience.',
          description: {
            role: 'I am an independent developer based in Germany who enjoys shaping and implementing projects from concept to implementation and maintenance. With a academical background in both, I work for my projects on the backend and frontend side.',
            hobby: "When I'm not exploring new technologies, I'm probably hiking in the mountains.",
          },
        },
        experience: {
          headline: '6+ years of practical experience',
          items: {
            abi: {
              additionalYear: 'angefangen Ende 2015',
              title: "Erwerb der Hochschulreife {'@'}hms",
              description: [
                'Designing and implementing five projects',
                'Customer service for small and medium-sized brands',
              ],
            },
            reizwerk: {
              additionalYear: 'angefangen Ende 2015',
              title: "Internship as frontend developer at {'@'}reizwerk",
              description: [
                'Designing and implementing five projects',
                'Customer service for small and medium-sized brands',
              ],
              link: {
                to: 'https://www.reizwerk.com/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.reizwerk.link.to',
              },
            },
            webbrand: {
              additionalYear: 'angefangen Ende 2018',
              title: "Internship as frontend developer at {'@'}webbrand",
              description: [
                'Designing and implementing five projects',
                'Customer service for small and medium-sized brands',
              ],
              link: {
                to: 'https://www.webbrand.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.webbrand.link.to',
              },
            },
            ibc: {
              additionalYear: 'beigetreten Mitte 2018',
              title: 'Berater bei Institute for Business Consulting',
              description: [
                'Austausch zu BLABLABLA THEMEN!!!',
                'Successful realisation of four projects',
                'Participation in consulting workshops',
              ],
              link: {
                to: 'https://business-consulting.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.ibc.link.to',
              },
            },
            bachelor: {
              additionalYear: 'angefangen Ende 2017',
              title: "Absolvieren Medieninformatik (B.Sc.) {'@'}hfu",
              description: ['Successful realisation of four projects', 'Participation in consulting workshops'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.bachelor.link.to',
              },
            },
            teaching: {
              additionalYear: 'angefangen Ende 2021',
              title: "Lehrauftrag für Webtechnologien {'@'}hfu",
              description: ['Successful realisation of four projects', 'Participation in consulting workshops'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.teaching.link.to',
              },
            },
            master: {
              additionalYear: 'angefangen Anfang 2021',
              title: "Absolvieren Informatik (B.Sc.) {'@'}hfu",
              description: ['Successful realisation of four projects', 'Participation in consulting workshops'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.master.link.to',
              },
            },
            selfEmployment: {
              additionalYear: 'angefangen Mitte 2015 · Today',
              title: 'Eigener Gewerbebetrieb',
              description: ['Successful realisation of four projects'],
            },
          },
        },
      },
    },
    work: {
      name: 'Work',
      title: '@:general.phrases.openInSameTab @:pages.work.name',
      description: 'the description',
      to: 'work',
      content: {},
    },
    skill: {
      name: 'Skill',
      title: '@:general.phrases.openInSameTab @:pages.skill.name',
      description: 'the description',
      to: 'skill',
      content: {},
    },
    contact: {
      name: 'Contact',
      title: '@:general.phrases.openInSameTab @:pages.contact.name',
      description: 'the description',
      to: 'contact',
      content: {},
    },
    privacy: {
      name: 'Privacy',
      title: '@:general.phrases.openInSameTab @:pages.privacy.name',
      description: 'the description',
      to: 'privacy',
      content: {
        analytics: {
          policy: {
            website: {
              entry: 'policies.google.com/privacy/frameworks',
              title: '@:general.phrases.openInNewTab @:pages.privacy.content.analytics.policy.website.entry',
            },
          },
          business: {
            website: {
              entry: 'business.safety.google/adsprocessorterms/',
              title: '@:general.phrases.openInNewTab @:pages.privacy.content.analytics.business.website.entry',
            },
          },
          optout: {
            website: {
              entry: 'tools.google.com/dlpage/gaoptout?hl=de',
              title: '@:general.phrases.openInNewTab @:pages.privacy.content.analytics.optout.website.entry',
            },
          },
          terms: {
            website: {
              entry: 'www.google.com/analytics/terms/de.html',
              title: '@:general.phrases.openInNewTab @:pages.privacy.content.analytics.terms.website.entry',
            },
          },
          intl: {
            website: {
              entry: 'www.google.de/intl/de/policies/',
              title: '@:general.phrases.openInNewTab @:pages.privacy.content.analytics.intl.website.entry',
            },
          },
          cookies: {
            website: {
              entry: 'policies.google.com/technologies/cookies?hl=de',
              title: '@:general.phrases.openInNewTab @:pages.privacy.content.analytics.cookies.website.entry',
            },
          },
        },
      },
    },
    imprint: {
      name: 'Imprint',
      title: '@:general.phrases.openInSameTab @:pages.imprint.name',
      description: 'the description',
      to: 'imprint',
      content: {
        commission: {
          website: {
            entry: 'ec.europa.eu/consumers/odr/',
            title: '@:general.phrases.openInNewTab @:pages.imprint.content.commission.website.entry',
          },
        },
      },
    },
  },
};
