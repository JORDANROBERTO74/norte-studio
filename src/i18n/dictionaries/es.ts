/**
 * Spanish dictionary. Mirrors the `Dictionary` type defined by `en.ts`;
 * a missing or misspelled key here fails `pnpm typecheck`.
 */
import type { Dictionary } from "./en";

export const es: Dictionary = {
  meta: {
    home: {
      title: "Norte Studio — Estudio digital independiente en Valencia",
      description:
        "Norte Studio es un equipo senior y reducido que diseña marcas, webs y productos digitales para empresas que prefieren ser claras a ser ruidosas.",
    },
    about: {
      title: "Estudio — Norte Studio",
      description:
        "Cuatro personas senior, nueve años independientes, un estudio en Valencia. Las personas, los valores y la historia detrás de Norte Studio.",
    },
    services: {
      title: "Servicios — Norte Studio",
      description:
        "Estrategia, identidad de marca, diseño y desarrollo web, diseño de producto, crecimiento y sistemas de contenido. Alcance claro, precio claro.",
    },
    work: {
      title: "Trabajo — Norte Studio",
      description:
        "Casos de estudio seleccionados de Norte Studio: banca, vino, hostelería, educación, mobiliario y logística, cada uno con la métrica que importó.",
    },
    journal: {
      title: "Revista — Norte Studio",
      description:
        "Notas sobre diseño de producto, sistemas de marca, estrategia y oficio del equipo de Norte Studio.",
    },
    contact: {
      title: "Contacto — Norte Studio",
      description:
        "Cuéntanos qué estás construyendo. Norte Studio responde a cada mensaje serio en un máximo de dos días laborables.",
    },
    notFound: {
      title: "Página no encontrada — Norte Studio",
      description: "Esta página no existe.",
    },
  },
  common: {
    brand: "Norte Studio",
    tagline: "Un estudio digital independiente en Valencia.",
    skip: "Saltar al contenido",
    close: "Cerrar",
    viewAll: "Ver todo",
    back: "Volver",
    readCase: "Leer el caso de estudio",
    readArticle: "Leer artículo",
    minRead: "min de lectura",
    from: "Desde",
    getInTouch: "Hablemos",
  },
  nav: {
    home: "Inicio",
    about: "Estudio",
    services: "Servicios",
    work: "Trabajo",
    journal: "Revista",
    contact: "Contacto",
    language: "Idioma",
    menu: "Menú",
  },
  home: {
    hero: {
      eyebrow: "Estudio digital independiente · Valencia",
      title: "Diseño que se gana su lugar.",
      subtitle:
        "Norte Studio es un equipo senior y reducido que diseña marcas, webs y productos digitales para empresas que prefieren ser claras a ser ruidosas.",
      cta: "Ver nuestro trabajo",
      secondary: "Nuestros servicios",
      note: "Solo equipo senior · Sin juniors, sin traspasos",
    },
    clients: {
      title: "Clientes seleccionados",
      subtitle: "Algunas de las empresas con las que hemos diseñado.",
    },
    cases: {
      eyebrow: "Trabajo",
      title: "Trabajo que movió un número.",
      subtitle: "Una selección breve de proyectos recientes, con la métrica que importó.",
      viewAll: "Todos los casos",
    },
    testimonials: {
      eyebrow: "Buenas palabras",
      title: "Lo que dicen cuando salimos de la sala.",
      items: [
        {
          quote:
            "Norte reconstruyó nuestra app y nuestra confianza en el mismo trimestre. El trabajo se paga solo cada mes.",
          author: "Elena Márquez",
          role: "VP de Producto, Atlántica",
        },
        {
          quote: "La primera agencia que respondió a nuestro brief con preguntas en vez de un logo.",
          author: "Jordi Serra",
          role: "Fundador, Bodega Solera",
        },
        {
          quote: "Nos dijeron que no a una funcionalidad que no necesitábamos. Ahí empezamos a confiar.",
          author: "Noor Haddad",
          role: "COO, Viento",
        },
      ],
    },
    stats: {
      eyebrow: "En números",
      items: [
        { value: "60+", label: "proyectos entregados" },
        { value: "12", label: "premios del sector" },
        { value: "9", label: "años independientes" },
        { value: "96%", label: "clientes que repiten" },
      ],
    },
    approach: {
      eyebrow: "Cómo trabajamos",
      title: "Cuatro pasos, sin teatro.",
      subtitle:
        "Equipos pequeños, ciclos cortos y puntos de control honestos. Siempre sabes qué pasa después.",
      steps: [
        {
          title: "Escuchar",
          text: "Empezamos con las personas que usan el producto y el número que tiene que moverse. Sin suposiciones, sin jerga.",
        },
        {
          title: "Dar forma",
          text: "Convertimos lo escuchado en una dirección breve y comprobable: un posicionamiento, un prototipo, un plan que se puede discutir.",
        },
        {
          title: "Construir",
          text: "El equipo senior diseña y publica en ciclos cortos. Ves software funcionando, no diapositivas.",
        },
        {
          title: "Lanzar",
          text: "Lanzamos juntos, medimos contra el número acordado y nos quedamos para lo que necesite otra pasada.",
        },
      ],
    },
    cta: {
      title: "¿Tienes un problema que merece resolverse?",
      subtitle:
        "Cuéntanos qué estás construyendo. Te diremos con honestidad si podemos ayudar.",
      button: "Empezar una conversación",
    },
  },
  about: {
    hero: {
      eyebrow: "El estudio",
      title: "Pequeños a propósito.",
      subtitle:
        "Norte Studio somos cuatro personas senior que llevan nueve años trabajando juntas. Nos mantenemos pequeños porque el mejor trabajo ocurre cuando quienes te reciben son quienes hacen el trabajo.",
    },
    history: {
      eyebrow: "Una breve historia",
      title: "Nueve años, una pregunta.",
      body1:
        "Norte empezó en un piso de Valencia en 2017 con un escritorio prestado y una creencia obstinada: la claridad es una ventaja competitiva. Queríamos trabajar con empresas cansadas de agencias llenas de ejecutivos de cuenta y vacías de decisiones.",
      body2:
        "Nueve años después la creencia no ha cambiado, solo la prueba. Hemos entregado más de sesenta proyectos en banca, vino, hostelería, educación y logística — y seguimos siendo un equipo de cuatro.",
      timeline: [
        { year: "2017", text: "Fundado en un piso de Valencia con dos mesas y ningún cliente." },
        { year: "2019", text: "Primer cliente de producto en retainer, una fintech que sigue con nosotros." },
        { year: "2021", text: "Crecemos a cuatro personas y decidimos que ese era todo el plan." },
        { year: "2024", text: "Nos rebautizamos Norte Studio y nos mudamos al Cabanyal." },
      ],
    },
    values: {
      eyebrow: "En lo que creemos",
      title: "Las reglas que no rompemos.",
      items: [
        {
          title: "Claridad antes que ingenio",
          text: "Si una solución necesita un párrafo para explicarse, no está terminada. Diseñamos hasta que es obvia.",
        },
        {
          title: "Equipos pequeños, manos senior",
          text: "Sin ejecutivos de cuenta, sin juniors aprendiendo con tu presupuesto. Quien te recibe hace el trabajo.",
        },
        {
          title: "Medir lo que importa",
          text: "Cada proyecto empieza por el número que tiene que mover. El diseño sin columna vertebral es decoración.",
        },
        {
          title: "Publicar y luego mejorar",
          text: "Algo bueno en producción gana a algo perfecto en un deck. Lanzamos pronto e iteramos con honestidad.",
        },
      ],
    },
    team: {
      eyebrow: "El equipo",
      title: "Cuatro personas, sin capas.",
      subtitle:
        "Un equipo senior que diseña, construye y publica junto. Hablas con quienes hacen el trabajo.",
    },
    insights: {
      eyebrow: "De la revista",
      title: "Lo que estamos pensando.",
      viewAll: "Todos los artículos",
    },
  },
  services: {
    hero: {
      eyebrow: "Servicios",
      title: "Seis maneras de ayudar.",
      subtitle:
        "Contrátanos para un servicio o para todos. En cualquier caso, trabajas con el mismo equipo senior y pagas un precio claro.",
    },
    list: {
      eyebrow: "Qué hacemos",
      title: "El trabajo, desglosado.",
      subtitle: "Sin retainers vagos. Cada servicio tiene un cometido, un precio y una persona responsable.",
      items: [
        {
          title: "Estrategia y posicionamiento",
          text: "Encontramos lo único por lo que tu producto debería ser conocido y el número que tiene que mover.",
          deliverables: ["Taller de descubrimiento", "Declaración de posicionamiento", "Hoja de ruta"],
        },
        {
          title: "Identidad de marca",
          text: "Un nombre, una voz y un sistema visual que tu equipo pueda usar de verdad cuando nos vayamos.",
          deliverables: ["Identidad verbal", "Sistema visual", "Guías como tokens"],
        },
        {
          title: "Diseño y desarrollo web",
          text: "Sitios de marketing que cargan rápido, se leen con claridad y convierten visitas en conversaciones.",
          deliverables: ["Diseño", "Desarrollo", "CMS", "Base de SEO"],
        },
        {
          title: "Diseño de producto",
          text: "Interfaces para apps y plataformas, diseñadas en torno a quienes las usan cada día.",
          deliverables: ["Investigación UX", "Diseño UI", "Design system"],
        },
        {
          title: "Crecimiento y SEO",
          text: "Trabajo técnico y editorial que hace que lo que construiste sea más fácil de encontrar y de creer.",
          deliverables: ["SEO técnico", "Estrategia de contenido", "Configuración de analítica"],
        },
        {
          title: "Sistemas de contenido",
          text: "Guías de voz, plantillas de página y estructuras editoriales que escalan sin una agencia de guardia.",
          deliverables: ["Voz y tono", "Modelo de contenido", "Calendario editorial"],
        },
      ],
    },
    projects: {
      eyebrow: "Pruebas",
      title: "Proyectos seleccionados",
      subtitle: "Algunos resultados, con el número que importó.",
      viewAll: "Todos los casos",
    },
    plans: {
      eyebrow: "Formas de trabajar",
      title: "Tres maneras de contratarnos.",
      subtitle: "Alcance claro, precio claro. Sin facturación por horas salvo que la pidas.",
      plans: [
        {
          name: "Sprint de marca",
          priceLabel: "desde",
          price: 480000,
          period: "dos semanas",
          blurb: "Un problema, resuelto rápido. Posicionamiento y una dirección visual que puedes probar.",
          features: [
            "Taller de descubrimiento",
            "Declaración de posicionamiento",
            "Dirección visual",
            "Web de una página",
          ],
          cta: "Reservar un sprint",
          featured: false,
        },
        {
          name: "Sitio web",
          priceLabel: "desde",
          price: 1200000,
          period: "seis semanas",
          blurb: "Un sitio de marketing, diseñado, desarrollado y lanzado de principio a fin.",
          features: [
            "Estrategia y contenido",
            "Design system",
            "Desarrollo y CMS",
            "SEO y analítica",
            "Soporte de lanzamiento",
          ],
          cta: "Planear una web",
          featured: true,
        },
        {
          name: "Socio de producto",
          priceLabel: "a medida",
          price: 0,
          period: "continuo",
          blurb: "Un equipo senior integrado para empresas que necesitan el diseño como hábito.",
          features: [
            "Diseñador integrado",
            "Design system",
            "Cadencia de entrega",
            "Revisión trimestral",
          ],
          cta: "Hablemos",
          featured: false,
        },
      ],
      note: "Cada colaboración empieza con un sprint de descubrimiento de pago, para que ambas partes sepan qué están comprando.",
      popular: "Más popular",
    },
    process: {
      eyebrow: "Proceso",
      title: "Cómo transcurre un proyecto.",
      steps: [
        {
          title: "Descubrir",
          text: "Un sprint breve y de pago para definir el problema, la audiencia y el número que tiene que moverse.",
        },
        {
          title: "Definir",
          text: "Una dirección por escrito que puedes discutir: posicionamiento, alcance, calendario y precio.",
        },
        {
          title: "Diseñar",
          text: "Prototipos funcionales en ciclos cortos. Revisas pantallas reales, no mood boards.",
        },
        {
          title: "Publicar",
          text: "Lanzamos juntos, medimos contra el número acordado y nos quedamos para la iteración que sigue.",
        },
      ],
    },
  },
  work: {
    hero: {
      eyebrow: "Trabajo",
      title: "Pruebas, no promesas.",
      subtitle:
        "Cada proyecto de abajo se lanzó, y cada métrica es la que acordamos mover antes de empezar.",
    },
    metrics: {
      eyebrow: "En todo nuestro trabajo",
      items: [
        { value: "60+", label: "proyectos entregados" },
        { value: "12", label: "premios del sector" },
        { value: "4,8★", label: "valoración media de clientes" },
        { value: "9", label: "años independientes" },
      ],
    },
    list: {
      eyebrow: "Casos de estudio",
      title: "Cada proyecto, en un solo lugar.",
      subtitle: "De la banca al mobiliario, la misma pregunta en cada uno: ¿qué se movió?",
    },
    trusted: {
      title: "Con la confianza de equipos que necesitan que funcione.",
      subtitle:
        "No perseguimos logos para una portada. Cogemos unos pocos clientes al año y vamos a fondo con cada uno.",
    },
  },
  caseStudy: {
    back: "Todo el trabajo",
    client: "Cliente",
    sector: "Sector",
    year: "Año",
    services: "Servicios",
    challenge: "El reto",
    solution: "La solución",
    results: "Los resultados",
    next: "Proyecto siguiente",
  },
  journal: {
    hero: {
      eyebrow: "Revista",
      title: "Notas sobre el trabajo.",
      subtitle:
        "Lo que estamos aprendiendo sobre diseño, marca y producto digital — escrito en abierto.",
    },
    list: {
      eyebrow: "Todos los artículos",
      title: "El último pensamiento.",
      subtitle: "Escritura breve y práctica de las personas que hacen el trabajo.",
    },
  },
  article: {
    back: "Todos los artículos",
    published: "Publicado",
    related: "Sigue leyendo",
    next: "Artículo siguiente",
  },
  contact: {
    hero: {
      eyebrow: "Contacto",
      title: "Empecemos a hablar.",
      subtitle:
        "Cuéntanos qué estás construyendo y qué debería lograr. Respondemos a cada mensaje serio en un máximo de dos días laborables.",
    },
    form: {
      name: "Tu nombre",
      namePlaceholder: "Ada García",
      email: "Email",
      emailPlaceholder: "tu@empresa.com",
      company: "Empresa",
      companyPlaceholder: "Empresa o producto",
      budget: "Presupuesto",
      budgetOptions: [
        "Menos de 10.000 €",
        "10.000 € – 30.000 €",
        "30.000 € – 80.000 €",
        "Más de 80.000 €",
        "Aún no lo sé",
      ],
      message: "Cuéntanos sobre el proyecto",
      messagePlaceholder: "¿Qué estás construyendo y qué debería lograr?",
      submit: "Enviar mensaje",
      success: "Gracias — tu mensaje va de camino. Respondemos en un máximo de dos días laborables.",
      invalidEmail: "Introduce un email válido.",
      required: "Por favor, completa este campo.",
    },
    info: {
      eyebrow: "Directo",
      title: "¿Prefieres el email?",
      text: "Escríbenos directamente. Lo leemos todo y respondemos a cada mensaje serio.",
      emailLabel: "Email",
      locationLabel: "Estudio",
      socialLabel: "En otros lugares",
    },
  },
  footer: {
    tagline:
      "Un estudio digital independiente. Estrategia, marca, web y producto — diseñado y construido en Valencia.",
    explore: "Explorar",
    studio: "Estudio",
    contact: "Contacto",
    rights: "Todos los derechos reservados.",
    note: "Norte Studio S.L. · Valencia, España",
    language: "Idioma",
  },
  notFound: {
    title: "Esta página se fue al norte.",
    text: "Puede que el enlace sea antiguo o que la página se haya movido.",
    cta: "Volver al inicio",
  },
};
