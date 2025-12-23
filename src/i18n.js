import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  },
  resources: {
    fr: {
      translation: {
        meta: {
  title: "COMIA Construction & Immobilier"
},
        nav: {
          home: "Accueil",
          about: "À propos",
          projects: "Projets",
          contact: "Contact"
        },
        footer: {
          company: "Construction & Immobilier",
          slogan: "Construire pour la vie"
        },
        home: {
          title: "COMIA (Construction d'Ouvrages Modernes Ingénierie et Architecture)",

          soustitre: "🏗️ Votre partenaire de confiance en construction et immobilier en Haïti.",

          subtitle: `Fondée en 2018, COMIA Construction & Immobilier est une entreprise haïtienne spécialisée dans la construction, l’ingénierie et l’immobilier. Basée en Haïti, précisément aux Gonaïves, COMIA accompagne particuliers, entreprises et institutions dans la réalisation de projets durables, fiables et de haute qualité.


Grâce à une équipe de professionnels qualifiés et à une organisation structurée, COMIA intervient à toutes les étapes des projets : conception, planification, exécution et suivi. Chaque réalisation est menée avec rigueur, respect des normes techniques et souci du détail.


Chez COMIA, la satisfaction du client est une priorité absolue. Nous mettons notre savoir-faire au service de solutions modernes, adaptées aux besoins réels de nos clients, afin de bâtir des ouvrages solides et pérennes.`,
cta: "Contactez-nous"

        },

        about: {
          title: "À propos",
          text: `COMIA – Construction d’Ouvrages Modernes, Ingénierie et Architecture est une entreprise de construction polyvalente qui intervient dans la conception, la réalisation et la rénovation de projets de bâtiments modernes et durables.

Forte d’une équipe qualifiée et d’un savoir-faire technique éprouvé, COMIA accompagne ses clients à chaque étape de leurs projets, en proposant des solutions fiables, innovantes et adaptées à leurs besoins. Nous plaçons la qualité, la sécurité et le respect des délais au cœur de nos priorités.

Grâce à une organisation structurée autour de quatre domaines d’expertise complémentaires, COMIA est en mesure de prendre en charge des projets complets, du gros œuvre aux finitions.`},

construction: {
title: "1. Construction et rénovation de bâtiments",

text: `COMIA réalise des projets de construction neuve et de rénovation pour des bâtiments résidentiels, commerciaux et industriels. Nous assurons toutes les phases du projet : étude technique, planification, exécution et livraison finale.

Notre objectif est de construire des ouvrages solides, fonctionnels et esthétiques, répondant aux normes en vigueur et valorisant durablement le patrimoine de nos clients.`,
},

  sanitary: {
title: "2. Installation sanitaire et électrique",

text: `Nous proposons des services complets d’installation sanitaire et électrique, conformes aux normes de sécurité et de performance. Cela inclut les réseaux d’eau potable, d’évacuation, les installations électriques domestiques et industrielles. Nos solutions garantissent confort, fiabilité, sécurité et efficacité énergétique pour tous types de bâtiments.`
},

wood: {
  title: "Menuiserie et ébénisterie",
  text:`COMIA offre des prestations de menuiserie et d’ébénisterie sur mesure, alliant précision, esthétique et durabilité. Nous réalisons portes, fenêtres, meubles, placards, plafonds et aménagements intérieurs en bois. 
  
  Chaque réalisation est conçue pour s’intégrer harmonieusement à l’architecture du bâtiment.`
},

finishing: {
  title: "4. Revêtement",
  text: `Nous assurons les travaux de revêtement intérieur et extérieur : carrelage, faïence, peinture, plâtrerie, faux plafonds et finitions décoratives. Nos interventions apportent une touche moderne, élégante et durable, avec une attention particulière portée aux détails et à la qualité de finition.`
},

cta: {contact: "Vous avez un projet ? Contactez-nous dès aujourd’hui."
},

contact: {
          title: "Contact",
          name: "Nom",
          email: "Email",
          message: "Message",
          send: "Envoyer"
        },
        contact: {
  title: "Contact",
  name: "Nom",
  email: "Email",
  message: "Message",
  send: "Envoyer"
},

projects: {
  title: "Nos projets",
  subtitle: "Découvrez quelques-unes de nos réalisations",
  gonaivesResidence: "Construction de résidence",
  portDePaixResidence: "Projet de résidence – Port-de-Paix",
  residenceDescription: "Projet de construction résidentielle moderne en cours de réalisation.",
  status: {
    inProgress: "En cours",
    study: "En étude",
    
  }
  }
  }
    },

    en: {
      translation: {
        meta: {
  title: "COMIA Construction & Real Estate"
},
        nav: {
          home: "Home",
          about: "About",
          projects: "Projects",
          contact: "Contact"
        },
        footer: {
          company: "Construction & Real Estate",
          slogan: "Building for life"
        },
        home: {
          title: "COMIA (Construction of Modern Structures Engineering and Architecture)",

          soustitre: "🏗️ Your trusted partner in construction and real estate in Haiti.",

          subtitle: `Founded in 2018, COMIA Construction & Real Estate is a Haitian company specializing in construction, engineering, and real estate development. Based in Haiti, specifically in Gonaïves, COMIA supports individuals, businesses, and institutions in delivering durable, reliable, and high-quality construction projects.


With a team of skilled professionals and a well-structured organization, COMIA manages projects from design and planning to execution and monitoring. Each project is carried out with precision, technical expertise, and strict adherence to industry standards.


At COMIA, customer satisfaction is our top priority. We provide modern, tailored solutions designed to meet real needs and create long-lasting, high-performance structures.`,
cta: "Contact us"
        },

        about: {
          title: "About COMIA",

          text: `COMIA – Construction of Modern Structures, Engineering and Architecture is a versatile construction company involved in the design, construction, and renovation of modern and sustainable building projects.

Backed by a qualified team and proven technical expertise, COMIA supports its clients at every stage of their projects by offering reliable, innovative solutions tailored to their needs. Quality, safety, and respect for deadlines are at the core of our priorities.

Thanks to a structured organization built around four complementary areas of expertise, COMIA is able to manage complete projects, from structural work to final finishes.`},

construction: {
title: "1. Building construction and renovation",

text: `COMIA carries out new construction and renovation projects for residential, commercial, and industrial buildings. We manage all project phases: technical studies, planning, execution, and final delivery.

Our goal is to build solid, functional, and aesthetically pleasing structures that meet current standards and enhance our clients’ assets sustainably.`,
},

  sanitary: {
title: "2. Plumbing and electrical installation",

text: `We provide complete plumbing and electrical installation services in compliance with safety and performance standards. This includes potable water networks, drainage systems, and domestic and industrial electrical installations.

Our solutions ensure comfort, reliability, safety, and energy efficiency for all types of buildings.`
},

wood: {
  title: "3. Carpentry and cabinetmaking",
  text:`COMIA offers custom carpentry and cabinetmaking services, combining precision, aesthetics, and durability. We create doors, windows, furniture, cabinets, ceilings, and wooden interior fittings.

Each project is designed to integrate harmoniously with the building’s architecture.`
},

finishing: {
  title: "4. Finishing and coatings",
  text: `We carry out interior and exterior finishing works: tiling, wall coverings, painting, plastering, suspended ceilings, and decorative finishes.

Our work brings a modern, elegant, and long-lasting touch, with particular attention to detail and quality.`
},

cta: {contact: "Vous avez un projet ? Contactez-nous dès aujourd’hui."
},

        contact: {
          title: "Contact",
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send"
        },
        projects: {
  title: "Our projects",
  subtitle: "Discover some of our achievements",
  gonaivesResidence: "Residential construction",
  portDePaixResidence: "Residential project – Port-de-Paix",
  residenceDescription: "Modern residential construction project currently in progress.",
  status: {
    inProgress: "In progress",
    study: "Under study"
  }
}
}
    },

    es: {
      translation: {
        meta: {
  title: "COMIA Construcción e Inmobiliaria"
},
        nav: {
          home: "Inicio",
          about: "Acerca de",
          projects: "Proyectos",
          contact: "Contacto"
        },
        footer: {
          company: "Construcción e Inmobiliaria",
          slogan: "Construyendo para la vida"
        },
        home: {
          title: "COMIA (Construcción de Obras Modernas de Ingeniería & Arquitectura)",

          soustitre: "🏗️ Su socio de confianza en construcción e inmobiliaria en Haití.",

          subtitle: `Fundada en 2018, COMIA Construcción e Inmobiliaria es una empresa haitiana especializada en construcción, ingeniería y desarrollo inmobiliario. Con sede en Haití, específicamente en Gonaïves, COMIA acompaña a particulares, empresas e instituciones en la ejecución de proyectos duraderos, confiables y de alta calidad.


Gracias a un equipo de profesionales calificados y a una organización bien estructurada, COMIA interviene en todas las fases del proyecto: diseño, planificación, ejecución y supervisión. Cada obra se realiza con rigor, excelencia técnica y respeto por las normas del sector.


En COMIA, la satisfacción del cliente es una prioridad fundamental. Ofrecemos soluciones modernas y personalizadas que responden a las necesidades reales y garantizan construcciones sólidas y sostenibles.`,
cta: "Contáctenos"
        },

        about: {
          title: "Acerca de COMIA",

          text: `COMIA – Construcción de Obras Modernas, Ingeniería y Arquitectura es una empresa de construcción versátil que interviene en el diseño, la ejecución y la renovación de proyectos de edificios modernos y sostenibles.

Con el respaldo de un equipo calificado y un saber técnico comprobado, COMIA acompaña a sus clientes en cada etapa de sus proyectos, ofreciendo soluciones confiables, innovadoras y adaptadas a sus necesidades. La calidad, la seguridad y el cumplimiento de los plazos son nuestras principales prioridades.

Gracias a una organización estructurada en cuatro áreas de especialización complementarias, COMIA puede encargarse de proyectos completos, desde la obra gruesa hasta los acabados finales.`},

construction: {
title: "1. Construcción y renovación de edificios",

text: `COMIA realiza proyectos de construcción nueva y renovación de edificios residenciales, comerciales e industriales. Gestionamos todas las fases del proyecto: estudio técnico, planificación, ejecución y entrega final.

Nuestro objetivo es construir obras sólidas, funcionales y estéticamente agradables, cumpliendo con las normas vigentes y valorizando de manera sostenible el patrimonio de nuestros clientes.`,
},

  sanitary: {
title: "2. Instalaciones sanitarias y eléctricas",

text: `Ofrecemos servicios completos de instalaciones sanitarias y eléctricas, cumpliendo con las normas de seguridad y rendimiento. Esto incluye redes de agua potable, evacuación e instalaciones eléctricas domésticas e industriales.

Nuestras soluciones garantizan confort, fiabilidad, seguridad y eficiencia energética en todo tipo de edificios.`
},

wood: {
  title: "3. Carpintería y ebanistería",
  text:`COMIA ofrece servicios de carpintería y ebanistería a medida, combinando precisión, estética y durabilidad. Realizamos puertas, ventanas, muebles, armarios, techos y acondicionamientos interiores en madera.

Cada proyecto está diseñado para integrarse armoniosamente en la arquitectura del edificio.`
},

finishing: {
  title: "4. Revestimientos y acabados",
  text: `Realizamos trabajos de revestimiento interior y exterior: azulejos, pintura, yeso, falsos techos y acabados decorativos.

Nuestras intervenciones aportan un toque moderno, elegante y duradero, con especial atención al detalle y a la calidad del acabado.`
},

cta: {contact: "Vous avez un projet ? Contactez-nous dès aujourd’hui."
},
        contact: {
          title: "Contacto",
          name: "Nombre",
          email: "Correo",
          message: "Mensaje",
          send: "Enviar"
        },
        projects: {
  title: "Nuestros proyectos",
  subtitle: "Descubra algunas de nuestras realizaciones",
  gonaivesResidence: "Construcción residencial",
  portDePaixResidence: "Proyecto residencial – Port-de-Paix",
  residenceDescription: "Proyecto de construcción residencial moderna en curso.",
  status: {
    inProgress: "En curso",
    study: "En estudio"
  }
}
}
    }
  }
});



export default i18n;
