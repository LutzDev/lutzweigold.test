export default {
  general: {
    cta: {
      menu: 'Menu',
      language: 'Language',
      close: 'Close',
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
      github: {
        name: 'GitHub',
        to: 'https://github.com/LutzDev',
        title: 'Check out my @:general.personal.github.name profile',
      },
      linkedin: {
        name: 'LinkedIn',
        to: 'https://www.linkedin.com/in/lutz-weigold/',
        title: 'Check out my @:general.personal.linkedin.name profile',
      },
      company: 'Lutz Weigold (Einzelunterehmen)',
      street: 'Hintergasse 8',
      city: 'Wald-Michelbach',
      code: '69483',
    },
    phrases: {
      openInNewTab: 'Open web page in a new browser tab:',
      openInSameTab: 'Discover webpage:',
      openProject: 'Discover project:',
      closeProject: 'Back to the overview of all projects',
    },
    tags: {
      work: 'work',
      education: 'education',
    },
    footer: {
      contact: 'Contact details',
      copyright: '© lutz weigold',
      socials: 'Socials',
      headline: "Let's collaborate and build your next projects together.",
    },
  },
  projects: {
    general: {
      back: 'Back to project list',
    },
    xtrym: {
      content: {
        visual: {
          headline: 'Website for the supplier Xtrym',
          image: {
            alt: 'Preview of the Xtrym E-Commerce shope',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Site',
              value: 'xtrym.de',
              to: 'https://xtrym.de/',
              title: 'Open project in a new browser tab: Xtrym',
            },
          },
          description:
            'Several projects were implemented for the customer Xtrym. Among them is the successful implementation of the e-commerce shop. The integration was based on the proven content management system Shopware 5 to ensure a user-friendly and efficient shopping experience.',
        },
        teaser: {
          image: {
            alt: 'Preview of the Xtrym listing page',
          },
        },
      },
    },
    didem: {
      content: {
        visual: {
          headline: 'Dialog Manager for Interventions',
          image: {
            alt: 'Preview of the Dialog-Managers',
          },
        },
        introduction:
          'As part of the DIDEM project of the IMTT Institute, an application for the use of intervention chatbots in healthcare was implemented. For this I designed and realized four key services.',
        interface: {
          headline: 'Management of chat dialogs.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              frontend: {
                value: 'User interface',
                to: 'https://github.com/LutzDev/admin-frontend',
                title: 'Open code on Github: Admin Frontend',
              },
              backend: {
                value: 'REST-Api',
                to: 'https://github.com/LutzDev/admin-backend',
                title: 'Open code on Github: Admin-Backend',
              },
            },
          },
          description:
            'This service acts as an interface between the system and the health scientist. Experts can use it to add and configure chatbot dialogs.',
        },
        parser: {
          headline: 'Transforming the dialogs.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              value: 'Transformation service',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Open code on Github: Transformation-Service',
            },
          },
          description:
            'To enable the system to read the added dialogs, I implemented a transformer as a microservice, which bundles the dialog strings into a JSON format. The information is then persisted in a NoSQL database.',
        },
        architecture: {
          image: {
            alt: 'Listing of the applications services',
          },
        },
        dialogManager: {
          headline: 'The core component of the application.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              value: 'Dialog manager',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Open code on Github: Dialog-Manager',
            },
          },
          description:
            'This service is designed to retrieve targeted interventions from the NoSQL database and run them, according to the inputs of the intervention participants.',
        },
        mobileApplication: {
          headline: 'Mobile application for intervention participants.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              value: 'Mobile app',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Open code on Github: Mobile-Applikation',
            },
          },
          description:
            'The mobile application (iOS/Andriod) acts as an interface between the participant and the intervention. It accepts user input, forwards it to the dialog manager, and then receives the appropriate dialog thread from the manager.',
        },
      },
    },
    fuwaCar: {
      content: {
        visual: {
          headline: 'Student ride-sharing app.',
          image: {
            alt: 'Preview of the FuwaCar application',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              value: 'FuwaCar',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Open code on Github: FuwaCar',
            },
          },
          description:
            "The iOS app 'FuwaCar' is a prototype I developed to organize shared rides and facilitate mobility on campus.",
        },
      },
    },
    portfolio: {
      content: {
        visual: {
          headline: 'My own webpage',
          image: {
            alt: 'Preview of the portfolio website',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              value: 'Portfolio',
              to: 'https://github.com/LutzDev/transformation-service',
              title: 'Open code on Github: Lutz Weigold Portfolio',
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
          headline: 'Web design for SmarAct',
          image: {
            alt: 'Preview of the Smaract Webpage',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Site',
              value: 'smaract.com',
              to: 'https://www.smaract.com/en/',
              title: 'Open project in a new browser tab: SmarAct',
            },
          },
          description:
            'I supported the design team of webbrand to shape the website for the customer SmarAct. The challenge was to present large amounts of product data on the site in a clear and appealing way.',
        },
        teaser: {
          image: {
            alt: 'Preview of the SmarAct product page on mobile device.',
          },
        },
      },
    },
    querformat: {
      content: {
        visual: {
          headline: 'Webpage of Querformat',
          image: {
            alt: 'Preview of the Querformat Website',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Site',
              value: 'querformat-weyhe.de',
              to: 'https://querformat-weyhe.de/',
              title: 'Open project in a new browser tab: Querformat',
            },
          },
          description:
            'I realized the webpage for the company Querformat from design to implementation. A challenging task was to present a large amount of images on the site in a clear and aesthetically pleasing way.',
        },
        teaser: {
          image: {
            alt: 'Preview of the gallery page of Querformat',
          },
        },
      },
    },
    freya: {
      content: {
        visual: {
          headline: 'Webpage for Freya.',
          image: {
            alt: 'Preview of the homepage of Freya',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            contributor: {
              name: 'Contributor',
              value: 'Philipp Oeschger',
              to: 'https://philipp-oeschger.de/',
              title: 'Open portfolio of Philipp Oeschger',
            },
            preview: {
              name: 'Live-Site',
              value: 'freya-stuttgart.de',
              to: 'https://www.freya-stuttgart.de/',
              title: 'Open project in a new browser tab: Freya',
            },
          },
          description:
            'We conducted a website relaunch for Freya, which aimed to present content in a clear and structured form. In addition, a user-friendly booking system for midwifery courses was integrated to offer interested parties a seamless registration option.',
        },
        teaser: {
          image: {
            alt: 'Preview of the course page of Freya',
          },
        },
      },
    },
    pleta: {
      content: {
        visual: {
          headline: 'Webpage for the Start-up Pleta',
          image: {
            alt: 'Mobile preview of Pleta',
          },
        },
        techStack: {
          headline: 'Product preview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Live-Site',
              value: 'pleta.de',
              to: 'https://pleta.de/',
              title: 'Open project in a new browser tab: Pleta',
            },
          },
          description:
            'For the client Pleta I have successfully realized several web projects from design to implementation. This includes the e-commerce store. A primary goal was to integrate the ideology and values of the company into the design and functionality of the online store.',
        },
        images: {
          visual: {
            alt: 'Preview of the homepage of Freya',
          },
        },
      },
    },
    darkPattern: {
      content: {
        visual: {
          headline: 'Dark pattern detection',
          image: {
            alt: 'Preview of the browser-extension',
          },
        },
        techStack: {
          headline: 'Project overview.',
          list: {
            technology: 'Tech-Stack',
            preview: {
              name: 'Code',
              value: 'Dark Pattern Detection',
              to: 'https://www.darkpattern-stuttgart.de/',
              title: 'Open code on Github: Dark Pattern Detektion',
            },
          },
          description:
            'As part of my bachelor thesis, I developed a browser extension for Google Chrome that aims to detect and eliminate dark patterns on web pages. Currently, the extension is able to identify dark patterns in Google search results and cookie banners to improve the user experience. Additionally, the browser extension provides a community feature to report undetected Dark Patterns to further promote transparency and user experience. This work represents an important step in improving the online user experience and helps reduce misleading designs on websites.',
        },
      },
    },
  },
  pages: {
    about: {
      name: 'About',
      title: '@:general.phrases.openInSameTab @:pages.about.name',
      seo: {
        ogDescription: 'Lutz is a self-employed developer creating digital products with passion and expertise.',
        description: 'Lutz is a self-employed developer creating digital products with passion and expertise.',
        ogTitle: "About {'|'} Lutz Weigold",
        title: "About {'|'} Lutz Weigold",
      },
      to: 'index',
      content: {
        visual: {
          headline: 'I build digital solutions, tailer-made for your audience.',
          image: {
            business: {
              alt: 'Portrait image of Lutz Weigold',
            },
            hobby: {
              alt: 'Lutz Weigold hiking in the mountains',
            },
          },
          description: {
            role: 'I am an independent developer based in Germany who enjoys shaping and implementing projects from concept to implementation and maintenance. With a academical background in both, I work for my projects on the backend and frontend side.',
            hobby: "When I'm not exploring new technologies, I'm probably hiking in the mountains.",
          },
        },
        experience: {
          headline: '6+ years of practical experience',
          items: {
            abi: {
              additionalYear: 'started 08/2015 · 2 years',
              title: "Higher Education Entrance qualifications {'@'}hms",
              description: ['Specialization: Information technology'],
            },
            reizwerk: {
              additionalYear: 'started 08/2015 · 1 year',
              title: "Internship as web and graphic designer {'@'}reizwerk",
              description: ['Web and graphic design for small and medium-sized businesses'],
              link: {
                to: 'https://www.reizwerk.com/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.reizwerk.link.to',
              },
            },
            webbrand: {
              additionalYear: 'started 09/2018 · 6 months',
              title: "Internship as Front-end Developer {'@'}webbrand",
              description: ['Development of web application for small and medium-sized businesses', 'Customer support'],
              link: {
                to: 'https://www.webbrand.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.webbrand.link.to',
              },
            },
            ibc: {
              additionalYear: 'joined  06/2018 · 6 semesters',
              title: "Student consultant {'@'}ibc",
              description: ['Realisation of web projects', 'Participation in consulting workshops'],
              link: {
                to: 'https://business-consulting.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.ibc.link.to',
              },
            },
            bachelor: {
              additionalYear: 'started 10/2017 · 7 semesters',
              title: "Bachelors's degree, Computer Science and Media [B.Sc.] {'@'}hfu",
              description: ['Specialization: Software development.'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.bachelor.link.to',
              },
            },
            hiwi: {
              additionalYear: 'started  02/2021 · 1 semesters',
              title: "Student assistant {'@'}hfu",
              description: ["Usability test for the 'Fraunhofer-Institute' using eye tracking technology"],
            },
            teaching: {
              additionalYear: 'started 10/2021 · 2 semesters',
              title: "Teaching position for the subject 'Interactive Systems' {'@'}hfu",
              description: ['Responsible for the practical teaching of web technologies'],
              link: {
                to: 'https://www.hs-furtwangen.de/',
                title: '@:general.phrases.openInNewTab @:pages.about.content.experience.items.teaching.link.to',
              },
            },
            master: {
              additionalYear: 'started 03/2021 · 3 semesters',
              title: "Master's degree, Computer Science [M.Sc.] {'@'}hfu",
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
            selfEmployment: {
              additionalYear: 'started 06/2015 · today',
              title: 'Independent developer',
              description: ['Realisation of web applications ', 'Customer support for small businesses'],
            },
          },
        },
      },
    },
    work: {
      name: 'Work',
      title: '@:general.phrases.openInSameTab @:pages.work.name',
      to: 'work',
      seo: {
        ogDescription: 'I design, develop and ship digital products for small and medium-sized businesses.',
        description: 'I design, develop and ship digital products for small and medium-sized businesses.',
        ogTitle: "Work {'|'} Lutz Weigold",
        title: "Work {'|'} Lutz Weigold",
      },
      content: {
        headline: 'Selected projects:',
        filter: {
          all: 'All',
          title: 'Filter by tag:',
          prefix: '~/projects/',
          close: '@:general.cta.close',
          tags: {
            website: 'Website',
            shop: 'E-Commerce',
            application: 'Application',
          },
        },
        images: {
          portfolio: {
            alt: 'Preview of the Portfolio website',
          },
          didem: {
            alt: 'Preview of the didem application',
          },
          xtrym: {
            alt: 'Preview of the Xtrym e-commerce shop',
          },
          freya: {
            alt: 'Preview of the Freya website',
          },
          pleta: {
            alt: 'Preview of the Pleta e-commerce shop',
          },
          smaract: {
            alt: 'Preview of the SmarAct website',
          },
          querformat: {
            alt: 'Preview of the Querformat website',
          },
          darkPattern: {
            alt: 'Preview of the Dark-Pattern application',
          },
          fuwaCar: {
            alt: 'Preview of the Fuwa-Car application',
          },
          rotlachs: {
            alt: 'Preview of the Rotlachs stuttgart website',
          },
        },
      },
    },
    skill: {
      name: 'Skill',
      title: '@:general.phrases.openInSameTab @:pages.skill.name',
      to: 'skill',
      seo: {
        ogDescription:
          'I am a software developer with a skill set in designing, developing and maintaining digital products.',
        description:
          'I am a software developer with a skill set in designing, developing and maintaining digital products.',
        ogTitle: "Skill {'|'} Lutz Weigold",
        title: "Skill {'|'} Lutz Weigold",
      },
      content: {
        visual: {
          headline: 'I help brands with developing and maintaining digital products.',
          circles: {
            strategy: {
              title: 'Strategy',
              description: 'specifying a tailor-made solutions',
            },
            development: {
              title: 'Development',
              description: 'bringing your ideas to code',
            },
            maintenance: {
              title: 'Maintenance',
              description: 'deploying and hosting your project',
            },
            backend: {
              title: 'Backend',
              description: 'building the service you need',
            },
            frontend: {
              title: 'Frontend',
              description: 'shaping user-friendly interfaces',
            },
          },
        },
        technologies: {
          languages: 'Languages',
          frameworks: 'Frameworks & Libraries',
          tools: 'Tools & Engines',
          prototyping: 'Prototyping',
          learning: 'Currently exploring',
          backend: 'Backend Development',
          frontend: 'Frontend Development',
        },
      },
    },
    contact: {
      name: 'Contact',
      title: '@:general.phrases.openInSameTab @:pages.contact.name',
      seo: {
        ogDescription:
          "Ready to create your next digital masterpiece? Let's connect and bring your vision to life! Get in touch today.",
        description:
          "Ready to create your next digital masterpiece? Let's connect and bring your vision to life! Get in touch today.",
        ogTitle: "Contact {'|'} Lutz Weigold",
        title: "Contact {'|'} Lutz Weigold",
      },
      to: 'contact',
      content: {},
    },
    privacy: {
      name: 'Privacy',
      title: '@:general.phrases.openInSameTab @:pages.privacy.name',
      seo: {
        ogDescription: 'Discover the privacy policy, keeping your information safe and secure.',
        description: 'Discover the privacy policy, keeping your information safe and secure.',
        ogTitle: "Privacy {'|'} Lutz Weigold",
        title: "Privacy {'|'} Lutz Weigold",
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
      name: 'Imprint',
      title: '@:general.phrases.openInSameTab @:pages.imprint.name',
      seo: {
        ogDescription: 'Find all the necessary details about myself, including contact information and legal stuff.',
        description: 'Find all the necessary details about myself, including contact information and legal stuff.',
        ogTitle: "Imprint {'|'} Lutz Weigold",
        title: "Imprint {'|'} Lutz Weigold",
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
        ogDescription: 'Project overview of the case Didem.',
        description: 'Project overview of the case Didem.',
        ogTitle: "Project - Didem {'|'} Lutz Weigold",
        title: "Project - Didem {'|'} Lutz Weigold",
      },
    },
    portfolio: {
      name: 'Portfolio',
      title: '@:general.phrases.openInSameTab @:pages.portfolio.name',
      seo: {
        ogDescription: 'Project overview of my portfolio.',
        description: 'Project overview of the case Didem.',
        ogTitle: "Project - Portfolio {'|'} Lutz Weigold",
        title: "Project - Portfolio {'|'} Lutz Weigold",
      },
    },
    xtrym: {
      name: 'Xtrym',
      title: '@:general.phrases.openInSameTab @:pages.xtrym.name',
      seo: {
        ogDescription: 'Project overview of the case Xtrym.',
        description: 'Project overview of the case Xtrym.',
        ogTitle: "Project - Xtrym {'|'} Lutz Weigold",
        title: "Project - Xtrym {'|'} Lutz Weigold",
      },
    },
    freya: {
      name: 'Freya',
      title: '@:general.phrases.openInSameTab @:pages.freya.name',
      seo: {
        ogDescription: 'Project overview of the case Freya.',
        description: 'Project overview of the case Freya.',
        ogTitle: "Project - Freya {'|'} Lutz Weigold",
        title: "Project - Freya {'|'} Lutz Weigold",
      },
    },
    pleta: {
      name: 'Pleta',
      title: '@:general.phrases.openInSameTab @:pages.pleta.name',
      seo: {
        ogDescription: 'Project overview of the case Pleta.',
        description: 'Project overview of the case Pleta.',
        ogTitle: "Project - Pleta {'|'} Lutz Weigold",
        title: "Project - Pleta {'|'} Lutz Weigold",
      },
    },
    smaract: {
      name: 'SmarAct',
      title: '@:general.phrases.openInSameTab @:pages.smaract.name',
      seo: {
        ogDescription: 'Project overview of the case SmarAct.',
        description: 'Project overview of the case SmarAct.',
        ogTitle: "Project - SmarAct {'|'} Lutz Weigold",
        title: "Project - SmarAct {'|'} Lutz Weigold",
      },
    },
    darkpattern: {
      name: 'pattern',
      title: '@:general.phrases.openInSameTab @:pages.darkpattern.name',
      seo: {
        ogDescription: 'Project overview of the case Dark Pattern Detection.',
        description: 'Project overview of the case Dark Pattern Detection.',
        ogTitle: "Project - Dark Pattern {'|'} Lutz Weigold",
        title: "Project - Dark Pattern {'|'} Lutz Weigold",
      },
    },
    querformat: {
      name: 'Querformat',
      title: '@:general.phrases.openInSameTab @:pages.querformat.name',
      seo: {
        ogDescription: 'Project overview of the case Querformat.',
        description: 'Project overview of the case Querformat.',
        ogTitle: "Project - Querformat {'|'} Lutz Weigold",
        title: "Project - Querformat {'|'} Lutz Weigold",
      },
    },
    fuwacar: {
      name: 'Fuwa Car',
      title: '@:general.phrases.openInSameTab @:pages.fuwacar.name',
      seo: {
        ogDescription: 'Project overview of the case Fuwa Car.',
        description: 'Project overview of the case Fuwa Car.',
        ogTitle: "Project - Fuwa Car {'|'} Lutz Weigold",
        title: "Project - Fuwa Car {'|'} Lutz Weigold",
      },
    },
  },
};
