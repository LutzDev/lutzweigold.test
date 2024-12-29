export default {
  general: {
    cta: {
      menu: 'Menü',
      language: 'Sprache',
      close: 'Schließen',
    },
    personal: {
      phone: {
        name: '+41 (0)795398424',
        to: 'tel:+41(0)795398424',
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
      github: {
        name: 'GitHub',
        to: 'https://github.com/LutzDev',
        title: 'Schaue auf @:general.personal.github.name vorbei',
      },
      linkedin: {
        name: 'LinkedIn',
        to: 'https://www.linkedin.com/in/lutz-weigold/',
        title: 'Schaue auf @:general.personal.linkedin.name vorbei',
      },
      company: 'Lutz Weigold (Einzelunterehmen)',
      street: 'Hintergasse 8',
      city: 'Wald-Michelbach',
      code: '69483',
    },
    phrases: {
      openInNewTab: 'Öffne Webseite in einem neuem Browsertab:',
      openInSameTab: 'Gehe weiter zu:',
      openProject: 'Nähere Informationen zum Projekt:',
      closeProject: 'Zurück zur Übersicht aller Projekte',
    },
    tags: {
      work: 'arbeit',
      education: 'akademisch',
    },
    footer: {
      contact: 'Kontakt',
      copyright: '© lutz weigold',
      socials: 'Soziale Netzwerke',
      headline: 'Interesse an einem Austausch?',
    },
  },
  projects: {
    general: {
      back: 'Zurück zur Projektseite',
    },
    xtrym: {
      content: {
        visual: {
          headline: 'Webauftritt für den Austatter Xtrym',
          image: {
            alt: 'Vorschaubild des Xtrym E-Commerce Shops',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Site',
              value: 'xtrym.de',
              to: 'https://xtrym.de/',
              title: 'Projekt in einem neuen Browsertab öffnen: Xtrym',
            },
          },
          description:
            'Für den Kunden Xtrym wurden mehrere Projekte umgesetzt. Dazu gehört unter anderem die erfolgreich Implementierung des Onlineauftritts. Die Integration wurde auf Basis des bewährten Content Management Systems Shopware 5 durchgeführt, um ein benutzerfreundliches und effizientes Einkaufserlebnis zu gewährleisten.',
        },
        teaser: {
          image: {
            alt: 'Vorschaubild der Listing-Seite des Xtrym E-Commerce Shops',
          },
        },
      },
    },
    didem: {
      content: {
        visual: {
          headline: 'Dialog Manager für Interventionen',
          image: {
            alt: 'Vorschaubild des Dialog-Managers',
          },
        },
        introduction:
          'Im Rahmen des DIDEM-Projekts des Insituts IMTT wurde eine Anwendung für den Einsatz von Interventions-Chatbots im Gesundheitswesen realisiert. Hierfür habe ich vier Schlüsselservices konzipiert und umgesetzt.',
        interface: {
          headline: 'Verwalten der Chat-Dialoge.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              frontend: {
                value: 'User interface',
                to: 'https://github.com/LutzDev/admin-frontend',
                title: 'Code auf Github öffnen: Admin-Frontend',
              },
              backend: {
                value: 'REST-Api',
                to: 'https://github.com/LutzDev/admin-backend',
                title: 'Code auf Github öffnen: Admin-Backend',
              },
            },
          },
          description:
            'Dieser Service dient als Schnittstelle zwischen System und Gesundheitswissenschaftler. Hierüber können Experten Chatbot-Dialoge einpflegen und konfigurieren.',
        },
        parser: {
          headline: 'Transformieren der Dialoge.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              value: 'Transformation service',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Code auf Github öffnen: Transformation-Service',
            },
          },
          description:
            'Damit die eingepflegten Dialoge vom System gelesen werden können, habe ich einen Transformator als Microservice implementiert, welcher die Dialogstränge in ein JSON-Format bündelt. Anschließend werden die Informationen in einer NoSQL-Datenbank persistiert.',
        },
        architecture: {
          image: {
            alt: 'Auflistung der einzelnen Services der Anwendung',
          },
        },
        dialogManager: {
          headline: 'Die Kernkomponente der Anwendung.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              value: 'Dialog manager',
              to: 'https://github.com/LutzDev/',
              title: 'Code auf Github öffnen: Dialog-Manager',
            },
          },
          description:
            'Dieser Service wurde entwickelt, um gezielt Interventionen aus der NoSQL-Datenbank abzurufen und diese, entsprechend den Eingaben der Interventions-Teilnehmer, zu durchlaufen.',
        },
        mobileApplication: {
          headline: 'Schnittstelle für Interventions-Teilnehmer.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              value: 'Mobile app',
              to: 'https://github.com/LutzDev/mobile-application',
              title: 'Code auf Github öffnen: Mobile-Applikation',
            },
          },
          description:
            'Die mobile Applikation (iOS/Andriod) dient als Schnittstelle zwischen Teilnehmer und Intervention. Diese gibt Interaktionen an den Dialog-Manager weiter und erhält von diesem den passenden Dialogstrang.',
        },
      },
    },
    fuwaCar: {
      content: {
        visual: {
          headline: 'Studentische Mitfahr-App.',
          image: {
            alt: 'Vorschaubild der FuwaCar Applikation',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              value: 'FuwaCar',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Code auf Github öffnen: FuwaCar',
            },
          },
          description:
            "Die iOS-App 'FuwaCar' is ein Prototyp, der von mir entwickelt wurde, um gemeinsame Fahrgelegenheiten zu organisieren und die Mobilität auf dem Campus zu erleichtern.",
        },
      },
    },
    portfolio: {
      content: {
        visual: {
          headline: 'Mein eigener Webauftritt ',
          image: {
            alt: 'Vorschaubild der Skillseite von Lutz Weigold',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              value: 'Portfolio',
              to: 'https://github.com/LutzDev/lutzweigold.test',
              title: 'Code auf Github öffnen: Lutz Weigold Portfolio',
            },
          },
        },
        teaser: {
          image: {
            alt: 'Preview of the portfolio webpage in mobile view',
          },
        },
      },
    },
    smaract: {
      content: {
        visual: {
          headline: 'Webdesign für das Team von SmarAct',
          image: {
            alt: 'Vorschaubild der Produktseite von Smaract',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Seite',
              value: 'smaract.com',
              to: 'https://www.smaract.com/de/',
              title: 'Projekt in einem neuen Browsertab öffnen: SmarAct',
            },
          },
          description:
            'Als Unterstützung habe ich den Webauftritt für den Kunden SmarAct mit gestaltet. Besondere Herausforderung bestand darin, umfangreiche Produktdaten auf der Seite übersichtlich und ansprechend darzustellen.',
        },
        teaser: {
          image: {
            alt: 'Vorschaubild der Produktseite von SmarAct in der mobilen Version',
          },
        },
      },
    },
    querformat: {
      content: {
        visual: {
          headline: 'Webauftritt von Querformat',
          image: {
            alt: 'Vorschaubild der Startseite von Querformat',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Seite',
              value: 'querformat-weyhe.de',
              to: 'https://querformat-weyhe.de/',
              title: 'Projekt in einem neuen Browsertab öffnen: Querformat',
            },
          },
          description:
            'Ich habe den Web-Auftritt für das Unternehmen Querformat vom Design bis zur Implementierung realisiert. Eine herausfordernde Aufgabe bestand darin, eine große Menge an Bildern auf der Seite übersichtlich und ästhetisch ansprechend zu präsentieren.',
        },
        teaser: {
          image: {
            alt: 'Vorschaubild der Gallerie-Seite von Querformat',
          },
        },
      },
    },
    freya: {
      content: {
        visual: {
          headline: 'Webauftritt für das Team von Freya',
          image: {
            alt: 'Vorschaubild der Startseite von Freya',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            contributor: {
              name: 'Mitwirkender',
              value: 'Philipp Oeschger',
              to: 'https://philipp-oeschger.de/',
              title: 'Zum Porfolio von Philipp Oeschger',
            },
            preview: {
              name: 'Zum Projekt',
              value: 'freya-stuttgart.de',
              to: 'https://www.freya-stuttgart.de/',
              title: 'Projekt in einem neuen Browsertab öffnen: Freya',
            },
          },
          description:
            'Für die Hebammen von Freya haben wir einen Webseiten-Relaunch durchgeführt, der darauf abzielte, wesentliche Inhalte klar und strukturiert zu präsentieren. Zusätzlich wurde ein benutzerfreundliches Buchungssystem für Hebammen-Kurse integriert, um Interessenten eine nahtlose Anmeldemöglichkeit zu bieten.',
        },
        teaser: {
          image: {
            alt: 'Vorschaubild der Kurs-Seite von Freya',
          },
        },
      },
    },
    pleta: {
      content: {
        visual: {
          headline: 'Webauftritt für das Start-up Pleta',
          image: {
            alt: 'Mobile Ansicht der Produktseite von Pleta',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Projekt',
              value: 'pleta.de',
              to: 'https://pleta.de/',
              title: 'Projekt in einem neuen Browsertab öffnen: Pleta',
            },
          },
          description:
            'Für den Kunden Pleta haben ich mehrere Webprojekte erfolgreich vom Design bis zur Implementierung realisiert. Dazu zählt unter anderem der E-Commerce-Shop, über den nachhaltiges Geschirr verkauft wird. Ein vorrangiges Ziel war es, die Ideologie und Werte des Unternehmens in das Design und die Funktionalität des Online-Shops zu integrieren.',
        },
        images: {
          visual: {
            alt: 'Vorschaubild der Startseite von Pleta',
          },
        },
      },
    },
    darkPattern: {
      content: {
        visual: {
          headline: 'Detektion von Dark-Pattern',
          image: {
            alt: 'Vorschau der Browser-Erweiterung',
          },
        },
        techStack: {
          headline: 'Projektübersicht.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Zum Code',
              value: 'Dark Pattern Detection',
              to: 'https://github.com/LutzDev/darkpattern',
              title: 'Code auf Github öffnen: Dark Pattern Detektion',
            },
          },
          description:
            'Im Rahmen meiner Bachelorarbeit habe ich eine Browsererweiterung für Google Chrome entwickelt, die darauf abzielt, Dark Patterns auf Webseiten zu erkennen und zu eliminieren. Derzeit ist die Erweiterung in der Lage, Dark Patterns in den Google-Suchergebnissen und Cookie-Bannern zu identifizieren, um das Nutzererlebnis zu verbessern. Zusätzlich bietet die Browsererweiterung eine Community-Funktion, mit der nicht erkannte Dark Patterns gemeldet werden können, um die Transparenz und Nutzerfreundlichkeit weiter zu fördern. Diese Arbeit stellt einen wichtigen Schritt zur Verbesserung der Online-Nutzererfahrung dar und trägt dazu bei, irreführende Gestaltungen auf Websites zu bekämpfen.',
        },
      },
    },
  },
  pages: {
    about: {
      name: 'Profil',
      title: '@:general.phrases.openInSameTab @:pages.about.name',
      seo: {
        ogDescription:
          'Lutz ist ein selbständiger Entwickler, der mit Leidenschaft und Expertise Softwareprodukte entwickelt.',
        description:
          'Lutz ist ein selbständiger Entwickler, der mit Leidenschaft und Expertise Softwareprodukte entwickelt.',
        ogTitle: "Profil {'|'} Lutz Weigold",
        title: "Profil {'|'} Lutz Weigold",
      },
      to: 'index',
      content: {
        visual: {
          headline: 'Creative developer.',
          image: {
            business: {
              alt: 'Portraitbild von Lutz Weigold',
            },
            hobby: {
              alt: 'Lutz Weigold in den Bergen wandern',
            },
          },
          description: {
            role: 'Ich bin ein Software-Entwickler mit Sitz in Zürich 🇨🇭, der Spaß daran hat, Projekte vom Konzept bis zur Implementierung umzusetzen. Bei meinen Projekten arbeite ich sowohl auf der Backend- als auch auf der Frontend-Seite.',
            hobby: '',
          },
        },
        experience: {
          headline: 'Mehrere Jahre an praktischer Erfahrung als Entwickler.',
          items: {
            abi: {
              additionalYear: 'begonnen 08/2015 · 2 Jahre',
              title: "Erwerb der Fachhochschulreife {'@'}hms",
              description: ['Schwerpunkt: Informationstechnik'],
            },
            reizwerk: {
              additionalYear: 'begonnen 08/2015 · 1 Jahr',
              title: "Praktikum als Web- und Grafikdesigner {'@'}reizwerk",
              description: ['Web- und Grafikdesign für kleine und mittelständische Unternehmen'],
              link: {
                to: 'https://www.reizwerk.com/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.reizwerk.link.to',
              },
            },
            webbrand: {
              additionalYear: 'begonnen 09/2018 · 6 Monate',
              title: "Praktikum als Front-end Entwickler {'@'}webbrand",
              description: [
                'Entwicklung von Webanwendungen für kleine und mittelständische Unternehmen',
                'Eigenständige Kundenbetreuung',
              ],
              link: {
                to: 'https://www.webbrand.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.webbrand.link.to',
              },
            },
            ibc: {
              additionalYear: 'beigetreten  06/2018 · 6 Semester',
              title: "Studentischer Berater {'@'}ibc",
              description: ['Umsetzung von Beratungsprojekten', 'Teilnahme an Beratungsworkshops'],
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
                'Durchführung eines Usability-Tests für das Fraunhofer-Institut unter Verwendung der Eyetracking-Technologie',
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
                'Model-Driven Development',
                'Information Systems',
                'Event Processing',
                'Cloud Native Computing',
                'Machine Learning',
              ],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.master.link.to',
              },
            },
            zuehlke: {
              additionalYear: 'begonnen 01/2023 · bis heute',
              title: "Software Engineer {'@'}Zühlke",
              link: {
                to: 'https://www.zuehlke.com/de',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.zuehlke.link.to',
              },
            },
            selfEmployment: {
              additionalYear: 'begonnen 06/2016 · 7 Jahre',
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
      seo: {
        ogDescription: 'Ich plane, entwickle und verwalte Softwareprodukte für kleine und mittlere Unternehmen.',
        description: 'Ich plane, entwickle und verwalte Softwareprodukte für kleine und mittlere Unternehmen.',
        ogTitle: "Projekte {'|'} Lutz Weigold",
        title: "Projekte {'|'} Lutz Weigold",
      },
      content: {
        headline: 'Ausgewählte Projekte:',
        filter: {
          all: 'Alle',
          title: 'Nach Tags filtern:',
          prefix: '~/projekte/',
          close: '@:general.cta.close',
          tags: {
            website: 'Webseite',
            shop: 'Onlineshop',
            application: 'Applikation',
          },
        },
        images: {
          portfolio: {
            alt: 'Vorschau der Portfolio Webseite',
          },
          didem: {
            alt: 'Vorschau der Didem Applikation',
          },
          xtrym: {
            alt: 'Vorschau des Xtrym Online-Shops',
          },
          freya: {
            alt: 'Vorschau der Freya Webseite',
          },
          pleta: {
            alt: 'Vorschau des Pleta Online-Shops',
          },
          smaract: {
            alt: 'Vorschau der SmarAct Webseite',
          },
          querformat: {
            alt: 'Vorschau der Querformat Webseite',
          },
          darkPattern: {
            alt: 'Vorschau der Dark-Pattern Applikation',
          },
          fuwaCar: {
            alt: 'Vorschau der Fuwa-Car Applikation',
          },
          rotlachs: {
            alt: 'Vorschau der Rotlachs Stuttgart Webseite',
          },
        },
      },
    },
    skill: {
      name: 'Skill',
      title: '@:general.phrases.openInSameTab @:pages.skill.name',
      seo: {
        ogDescription:
          'Ich bin Softwareentwickler mit Kenntnissen im Design, der Entwicklung und Pflege von Softwareprodukten.',
        description:
          'Ich bin Softwareentwickler mit Kenntnissen im Design, der Entwicklung und Pflege von Softwareprodukten.',
        ogTitle: "Skill {'|'} Lutz Weigold",
        title: "Skill {'|'} Lutz Weigold",
      },
      to: 'skill',
      content: {
        visual: {
          headline: 'Expertise in Planung und Entwicklung von Software.',
          circles: {
            strategy: {
              title: 'Design',
              description: 'Spezifizierung einer maßgeschneiderten Lösung',
            },
            development: {
              title: 'Entwicklung',
              description: 'Umsetzung des Produkts',
            },
            maintenance: {
              title: 'Wartung',
              description: 'Aktualisierungen und Hosting der Applikation',
            },
            backend: {
              title: 'Backend',
              description: 'Entwicklung des Backend-Services',
            },
            frontend: {
              title: 'Frontend',
              description: 'Entwicklung der interaktiven Benutzeroberflächen',
            },
          },
        },
        technologies: {
          languages: 'Sprachen',
          frameworks: 'Frameworks & Bibliotheken',
          tools: 'Werkzeuge & Engines',
          prototyping: 'Prototyping',
          learning: 'Zurzeit am Lernen',
          backend: 'Backend Entwicklung',
          frontend: 'Frontend Entwicklung',
        },
      },
    },
    contact: {
      name: 'Kontakt',
      title: '@:general.phrases.openInSameTab @:pages.contact.name',
      seo: {
        ogDescription:
          'Sind Sie bereit, Ihr nächstes digitales Produkt aufzubauen? Lassen Sie uns zusammenarbeiten und Ihre Vision zum Leben erwecken! Nehmen Sie noch heute Kontakt auf.',
        description:
          'Sind Sie bereit, Ihr nächstes digitales Produkt aufzubauen? Lassen Sie uns zusammenarbeiten und Ihre Vision zum Leben erwecken! Nehmen Sie noch heute Kontakt auf.',
        ogTitle: "Kontakt {'|'} Lutz Weigold",
        title: "Kontakt {'|'} Lutz Weigold",
      },
      to: 'contact',
      content: {},
    },
    privacy: {
      name: 'Datenschutz',
      title: '@:general.phrases.openInSameTab @:pages.privacy.name',
      seo: {
        ogDescription: 'Entdecken Sie die Datenschutzbestimmungen, damit Ihre Daten sicher sind.',
        description: 'Entdecken Sie die Datenschutzbestimmungen, damit Ihre Daten sicher sind.',
        ogTitle: "Datenschutz {'|'} Lutz Weigold",
        title: "Datenschutz {'|'} Lutz Weigold",
      },
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
      seo: {
        ogDescription:
          'Hier finden Sie alle notwendigen Informationen zu meiner Person, einschließlich Kontaktinformationen und rechtliche Hinweise.',
        description:
          'Hier finden Sie alle notwendigen Informationen zu meiner Person, einschließlich Kontaktinformationen und rechtliche Hinweise.',
        ogTitle: "Impressum {'|'} Lutz Weigold",
        title: "Impressum {'|'} Lutz Weigold",
      },
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
    didem: {
      name: 'Didem',
      title: '@:general.phrases.openInSameTab @:pages.didem.name',
      seo: {
        ogDescription: 'Projektübersicht über Didem.',
        description: 'Projektübersicht über Didem.',
        ogTitle: "Projekt - Didem {'|'} Lutz Weigold",
        title: "Projekt - Didem {'|'} Lutz Weigold",
      },
    },
    portfolio: {
      name: 'Portfolio',
      title: '@:general.phrases.openInSameTab @:pages.portfolio.name',
      seo: {
        ogDescription: 'Projekt overview of my portfolio.',
        description: 'Projektübersicht über Didem.',
        ogTitle: "Projekt - Portfolio {'|'} Lutz Weigold",
        title: "Projekt - Portfolio {'|'} Lutz Weigold",
      },
    },
    xtrym: {
      name: 'Xtrym',
      title: '@:general.phrases.openInSameTab @:pages.xtrym.name',
      seo: {
        ogDescription: 'Projektübersicht über Xtrym.',
        description: 'Projektübersicht über Xtrym.',
        ogTitle: "Projekt - Xtrym {'|'} Lutz Weigold",
        title: "Projekt - Xtrym {'|'} Lutz Weigold",
      },
    },
    freya: {
      name: 'Freya',
      title: '@:general.phrases.openInSameTab @:pages.freya.name',
      seo: {
        ogDescription: 'Projektübersicht über Freya.',
        description: 'Projektübersicht über Freya.',
        ogTitle: "Projekt - Freya {'|'} Lutz Weigold",
        title: "Projekt - Freya {'|'} Lutz Weigold",
      },
    },
    pleta: {
      name: 'Pleta',
      title: '@:general.phrases.openInSameTab @:pages.pleta.name',
      seo: {
        ogDescription: 'Projektübersicht über Pleta.',
        description: 'Projektübersicht über Pleta.',
        ogTitle: "Projekt - Pleta {'|'} Lutz Weigold",
        title: "Projekt - Pleta {'|'} Lutz Weigold",
      },
    },
    smaract: {
      name: 'SmarAct',
      title: '@:general.phrases.openInSameTab @:pages.smaract.name',
      seo: {
        ogDescription: 'Projektübersicht über SmarAct.',
        description: 'Projektübersicht über SmarAct.',
        ogTitle: "Projekt - SmarAct {'|'} Lutz Weigold",
        title: "Projekt - SmarAct {'|'} Lutz Weigold",
      },
    },
    darkpattern: {
      name: 'pattern',
      title: '@:general.phrases.openInSameTab @:pages.darkpattern.name',
      seo: {
        ogDescription: 'Projektübersicht über Dark Pattern Detection.',
        description: 'Projektübersicht über Dark Pattern Detection.',
        ogTitle: "Projekt - Dark Pattern {'|'} Lutz Weigold",
        title: "Projekt - Dark Pattern {'|'} Lutz Weigold",
      },
    },
    querformat: {
      name: 'Querformat',
      title: '@:general.phrases.openInSameTab @:pages.querformat.name',
      seo: {
        ogDescription: 'Projektübersicht über Querformat.',
        description: 'Projektübersicht über Querformat.',
        ogTitle: "Projekt - Querformat {'|'} Lutz Weigold",
        title: "Projekt - Querformat {'|'} Lutz Weigold",
      },
    },
    fuwacar: {
      name: 'Fuwa Car',
      title: '@:general.phrases.openInSameTab @:pages.fuwacar.name',
      seo: {
        ogDescription: 'Projektübersicht über Fuwa Car.',
        description: 'Projektübersicht über Fuwa Car.',
        ogTitle: "Projekt - Fuwa Car {'|'} Lutz Weigold",
        title: "Projekt - Fuwa Car {'|'} Lutz Weigold",
      },
    },
  },
};
