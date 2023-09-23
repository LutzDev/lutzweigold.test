export default {
  general: {
    cta: {
      menu: 'Menü',
      language: 'Sprache',
    },
    personal: {
      phone: {
        name: '+49 (0)152 26269766',
        to: 'tel:+49(0)15226269766',
        title: 'Rufe mich über @:general.personal.phone.name an',
      },
      email: {
        name: "info{'@'}lutzweigold.de",
        to: "mailto:info{'@'}lutzweigold.de",
        title: 'Schreibe mir eine Email an @:general.personal.email.name',
      },
      website: {
        name: 'lutzweigold.de',
        to: '/',
        title: 'Schaue auf der Website @:general.personal.website.name vorbei',
      },
      company: 'Lutz Weigold (Einzelunterehmen)',
      street: 'Hintergasse 8',
      city: 'Wald-Michelbach',
      code: '69483',
    },
    phrases: {
      openInNewTab: 'Öffne Webseite in einem neuem Browsertab:',
      openInSameTab: 'Gehe weiter zu:',
    },
    footer: {
      contact: 'Kontakt',
      copyright: '© lutz weigold',
      headline: 'Lassen Sie uns zusammenarbeiten und Ihr nächstes Projekt umsetzen.',
    },
  },
  pages: {
    about: {
      name: 'Profil',
      title: '@:general.phrases.openInSameTab @:pages.about.name',
      description: 'the description',
      to: 'index',
      content: {
        visual: {
          headline: 'Ich entwickle digitale Lösungen, die auf Ihr Publikum zugeschnitten sind.',
          description: {
            role: 'Ich bin ein unabhängiger Entwickler mit Sitz in Deutschland, der Spaß daran hat, Projekte vom Konzept über die Implementierung bis zur Wartung zu gestalten und umzusetzen. Bei meinen Projekten arbeite ich sowohl auf der Backend- als auch auf der Frontend-Seite.',
            hobby: 'Wenn ich gerade nicht neue Technologien erforsche, bin ich wahrscheinlich in den Bergen wandern.',
          },
        },
        experience: {
          headline: '6+ Jahre an praktischer Erfahrung',
          items: {
            abi: {
              additionalYear: 'begonnen 08/2015 · 2 Jahre',
              title: "Erwerb der Fachhochschulreife {'@'}hms",
              description: ['Schwerpunkt: Informationstechnik'],
            },
            reizwerk: {
              additionalYear: 'begonnen 08/2015 · 1 Jahr',
              title: "Praktikum als Web- und Grafikdesigner {'@'}reizwerk",
              description: ['Web- und Grafikdesign'],
              link: {
                to: 'https://www.reizwerk.com/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.reizwerk.link.to',
              },
            },
            webbrand: {
              additionalYear: 'begonnen 09/2018 · 6 Monate',
              title: "Praktikum als Front-end Entwickler {'@'}webbrand",
              description: [
                'Eigenständige Kundenbetreuung',
                'Entwicklung von Webanwendungen für kleine und mittelständische Unternehmen',
              ],
              link: {
                to: 'https://www.webbrand.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.webbrand.link.to',
              },
            },
            ibc: {
              additionalYear: 'beigetreten  06/2018 · 6 Semester',
              title: "Studentischer Berater {'@'}ibc",
              description: ['Umsetzung von vier Beratungsprojekten', 'Teilnahme an Beratungsworkshops'],
              link: {
                to: 'https://business-consulting.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.ibc.link.to',
              },
            },
            bachelor: {
              additionalYear: 'begonnen 10/2017 · 7 Semester',
              title: "Abschluss in Medieninformatik [B.Sc.] {'@'}hfu",
              description: ['Spezialisierung im Bereich Softwareentwicklung'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.bachelor.link.to',
              },
            },
            hiwi: {
              additionalYear: 'begonnen  02/2021 · 1 Semester',
              title: "Studentische Hilfskraft {'@'}hfu",
              description: [
                'Durchführung eines Usability-Tests für das Frauenhofer IPM unter Verwendung der Eyetracking-Technologie ',
              ],
            },
            teaching: {
              additionalYear: 'begonnen 10/2021 · 2 Semester',
              title: "Lehrauftrag für den Bereich 'Interaktive Systeme' {'@'}hfu",
              description: ['Verantwortlich für die praktische Lehre von Webtechnologien'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.teaching.link.to',
              },
            },
            master: {
              additionalYear: 'begonnen 03/2021 · 3 Semester',
              title: "Abschluss in Informatik [M.Sc.] {'@'}hfu",
              description: [
                'Distributed Systems',
                'Event Processing',
                'Cloud Native Computing',
                'Information Systems',
                'Model-Driven Development',
                'Machine Learning',
              ],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.master.link.to',
              },
            },
            selfEmployment: {
              additionalYear: 'angefangen 06/2015 · bis heute',
              title: 'Eigener Gewerbebetrieb',
              description: ['Umsetzung von Webanwendungen', 'Betreuung von kleinen Unternehmen'],
            },
          },
        },
      },
    },
    work: {
      name: 'Projekte',
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
      name: 'Kontakt',
      title: '@:general.phrases.openInSameTab @:pages.contact.name',
      description: 'the description',
      to: 'contact',
      content: {},
    },
    privacy: {
      name: 'Datenschutz',
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
      name: 'Impressum',
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
