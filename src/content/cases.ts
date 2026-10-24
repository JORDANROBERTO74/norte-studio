import type { CaseStudy } from "@/types";

export const cases: CaseStudy[] = [
  {
    slug: "atlantica-bank",
    client: "Atlántica",
    sector: { en: "Banking & fintech", es: "Banca y fintech" },
    year: "2026",
    services: {
      en: ["Product strategy", "Product design", "Design system"],
      es: ["Estrategia de producto", "Diseño de producto", "Design system"],
    },
    image: "/images/case-atlantica.jpg",
    summary: {
      en: "A mobile banking app rebuilt around one idea: financial clarity, not dashboards.",
      es: "Una app de banca móvil reconstruida en torno a una idea: claridad financiera, no paneles de control.",
    },
    challenge: {
      en: "Atlántica's mobile app had grown into a maze of menus and jargon. Users could see their balance but not what it meant, and onboarding took twelve screens before a single useful action.",
      es: "La app de Atlántica se había convertido en un laberinto de menús y jerga. Los usuarios veían su saldo, pero no lo que significaba, y el alta tardaba doce pantallas antes de una sola acción útil.",
    },
    solution: {
      en: "We collapsed twelve onboarding screens into three, rebuilt the home screen around a single \"What changed?\" answer, and shipped a token-based design system so the team could move fast without breaking the visual language.",
      es: "Redujimos doce pantallas de alta a tres, reconstruimos la pantalla de inicio en torno a una única respuesta: \"¿Qué ha cambiado?\", y entregamos un design system por tokens para que el equipo avanzara rápido sin romper el lenguaje visual.",
    },
    metrics: [
      { value: "-64%", label: { en: "time to first transfer", es: "tiempo hasta la primera transferencia" } },
      { value: "+31%", label: { en: "weekly active users", es: "usuarios activos semanales" } },
      { value: "4.7★", label: { en: "store rating after relaunch", es: "valoración en tienda tras el relanzamiento" } },
    ],
    featured: true,
  },
  {
    slug: "solera-wines",
    client: "Bodega Solera",
    sector: { en: "Wine & drinks", es: "Vino y bebidas" },
    year: "2025",
    services: {
      en: ["Brand identity", "Ecommerce", "Art direction"],
      es: ["Identidad de marca", "Ecommerce", "Dirección de arte"],
    },
    image: "/images/case-solera.jpg",
    summary: {
      en: "A century-old winery that learned to sell direct without losing its cellar-door soul.",
      es: "Una bodega centenaria que aprendió a vender directo sin perder el alma de su cata.",
    },
    challenge: {
      en: "Solera sold almost entirely through distributors and had no direct relationship with drinkers. Their existing site was a brochure with a phone number, and they feared ecommerce would cheapen the brand.",
      es: "Solera vendía casi todo a través de distribuidores y no tenía relación directa con quien bebía sus vinos. Su web era un folleto con un teléfono, y temían que el ecommerce abaratara la marca.",
    },
    solution: {
      en: "We designed a story-led store where each wine gets a place, a season and a food pairing instead of a score. A restrained identity, generous photography and a subscription called La Cava tied it together.",
      es: "Diseñamos una tienda guiada por la historia, donde cada vino tiene un lugar, una estación y un maridaje en lugar de una puntuación. Una identidad contenida, fotografía generosa y una suscripción llamada La Cava lo unieron todo.",
    },
    metrics: [
      { value: "+180%", label: { en: "direct online sales, year one", es: "ventas directas online, primer año" } },
      { value: "3.2×", label: { en: "average order value vs. distributors", es: "valor medio de pedido frente a distribuidores" } },
      { value: "41%", label: { en: "of new customers repeat", es: "de clientes nuevos repiten" } },
    ],
    featured: true,
  },
  {
    slug: "marea-hotels",
    client: "Marea Hotels",
    sector: { en: "Hospitality", es: "Hostelería" },
    year: "2025",
    services: {
      en: ["Web design", "Development", "Booking experience"],
      es: ["Diseño web", "Desarrollo", "Experiencia de reserva"],
    },
    image: "/images/case-marea.jpg",
    summary: {
      en: "A booking flow that treats a room like a decision, not a form field.",
      es: "Un flujo de reserva que trata una habitación como una decisión, no como un campo de formulario.",
    },
    challenge: {
      en: "Marea's direct bookings were leaking to third-party platforms because its own site was slow, dated and convinced nobody. The brand had beautiful hotels and a booking engine that hid them.",
      es: "Las reservas directas de Marea se fugaban a plataformas externas porque su propia web era lenta, anticuada y no convencía a nadie. La marca tenía hoteles preciosos y un motor de reserva que los escondía.",
    },
    solution: {
      en: "We rebuilt the site around a fast, visual booking path: room first, dates second, trust last. Editorial photography, honest pricing and a three-step checkout cut the path to a reservation to under a minute.",
      es: "Reconstruimos la web en torno a un camino de reserva rápido y visual: primero la habitación, luego las fechas y por último la confianza. Fotografía editorial, precios honestos y un pago en tres pasos redujeron el camino a menos de un minuto.",
    },
    metrics: [
      { value: "+47%", label: { en: "direct bookings", es: "reservas directas" } },
      { value: "0.9s", label: { en: "median page load", es: "carga media de página" } },
      { value: "-38%", label: { en: "commission spend", es: "gasto en comisiones" } },
    ],
    featured: true,
  },
  {
    slug: "nido-schools",
    client: "Nido",
    sector: { en: "Education", es: "Educación" },
    year: "2024",
    services: {
      en: ["Product design", "Brand identity", "Design system"],
      es: ["Diseño de producto", "Identidad de marca", "Design system"],
    },
    image: "/images/case-nido.jpg",
    summary: {
      en: "A learning platform teachers actually open, rebuilt for the people in the room.",
      es: "Una plataforma de aprendizaje que los docentes sí abren, reconstruida para quienes están en el aula.",
    },
    challenge: {
      en: "Nido's platform was built for administrators, not classrooms. Teachers spent evenings fighting an interface that buried lesson planning under reporting menus.",
      es: "La plataforma de Nido estaba pensada para administradores, no para aulas. Los docentes pasaban las tardes peleando con una interfaz que enterraba la planificación bajo menús de informes.",
    },
    solution: {
      en: "We interviewed forty teachers and redesigned around their actual day: plan in the morning, teach in the afternoon, reflect in the evening. A warm, plain-language system replaced the dashboard-first layout.",
      es: "Entrevistamos a cuarenta docentes y rediseñamos en torno a su día real: planificar por la mañana, enseñar por la tarde, reflexionar por la noche. Un sistema cálido y en lenguaje llano sustituyó el diseño centrado en paneles.",
    },
    metrics: [
      { value: "2.4×", label: { en: "weekly active teachers", es: "docentes activos semanales" } },
      { value: "-71%", label: { en: "support tickets about navigation", es: "tickets de soporte sobre navegación" } },
      { value: "92%", label: { en: "would recommend to a colleague", es: "lo recomendaría a un colega" } },
    ],
    featured: false,
  },
  {
    slug: "trazo-furniture",
    client: "Trazo",
    sector: { en: "Furniture & interior", es: "Mobiliario e interiorismo" },
    year: "2024",
    services: {
      en: ["Brand identity", "Art direction", "Web design"],
      es: ["Identidad de marca", "Dirección de arte", "Diseño web"],
    },
    image: "/images/case-trazo.jpg",
    summary: {
      en: "A furniture studio that stopped sounding industrial and started sounding like a workshop.",
      es: "Un estudio de mobiliario que dejó de sonar industrial y empezó a sonar a taller.",
    },
    challenge: {
      en: "Trazo made furniture by hand but presented itself like a factory. The catalog buried every piece in SKUs and specs, and the brand said nothing about the hands that made it.",
      es: "Trazo fabricaba muebles a mano pero se presentaba como una fábrica. El catálogo enterraba cada pieza en referencias y especificaciones, y la marca no decía nada de las manos que la hacían.",
    },
    solution: {
      en: "We rebuilt the catalog as a gallery of making: each piece photographed in a real home, with the maker's name and the wood's origin. A quiet identity — ink, oak and a single warm accent — let the work speak.",
      es: "Reconstruimos el catálogo como una galería del oficio: cada pieza fotografiada en una casa real, con el nombre de quien la hizo y el origen de la madera. Una identidad serena —tinta, roble y un único acento cálido— dejó hablar al trabajo.",
    },
    metrics: [
      { value: "+92%", label: { en: "time on catalog pages", es: "tiempo en páginas de catálogo" } },
      { value: "3.1×", label: { en: "quote requests", es: "solicitudes de presupuesto" } },
      { value: "-55%", label: { en: "bounce rate", es: "tasa de rebote" } },
    ],
    featured: false,
  },
  {
    slug: "viento-logistics",
    client: "Viento",
    sector: { en: "Logistics", es: "Logística" },
    year: "2024",
    services: {
      en: ["Product design", "Design system", "Data visualization"],
      es: ["Diseño de producto", "Design system", "Visualización de datos"],
    },
    image: "/images/case-viento.jpg",
    summary: {
      en: "Turning a wall of logistics numbers into one calm, glanceable control room.",
      es: "Convertir un muro de números logísticos en una sala de control serena y legible de un vistazo.",
    },
    challenge: {
      en: "Viento's operations dashboard showed everything and communicated nothing. Dispatchers worked from forty widgets, missed delays until they were critical, and trained new hires for weeks.",
      es: "El panel de operaciones de Viento mostraba todo y no comunicaba nada. Los coordinadores trabajaban con cuarenta widgets, detectaban los retrasos cuando ya eran críticos y tardaban semanas en formar a cada incorporación.",
    },
    solution: {
      en: "We replaced forty widgets with a hierarchy of exceptions: what needs attention now, what can wait, and what is fine. A shared design system let three product squads ship to the same visual grammar.",
      es: "Sustituimos cuarenta widgets por una jerarquía de excepciones: qué requiere atención ahora, qué puede esperar y qué va bien. Un design system compartido permitió a tres equipos de producto trabajar con la misma gramática visual.",
    },
    metrics: [
      { value: "-43%", label: { en: "time to spot an exception", es: "tiempo en detectar una incidencia" } },
      { value: "5 days", label: { en: "new-hire ramp, down from three weeks", es: "incorporación, antes tres semanas" } },
      { value: "1", label: { en: "design system for three squads", es: "design system para tres equipos" } },
    ],
    featured: false,
  },
];

export function getCase(slug: string): CaseStudy | undefined {
  return cases.find((item) => item.slug === slug);
}
