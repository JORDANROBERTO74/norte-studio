import type { Article } from "@/types";

export const articles: Article[] = [
  {
    slug: "designing-for-calm",
    title: {
      en: "Designing for calm in a noisy product",
      es: "Diseñar para la calma en un producto ruidoso",
    },
    excerpt: {
      en: "Most interfaces shout. The ones people return to are the ones that whisper.",
      es: "La mayoría de interfaces gritan. A las que la gente vuelve son las que susurran.",
    },
    date: "2026-09-14",
    readingTime: 6,
    category: { en: "Product design", es: "Diseño de producto" },
    image: "/images/article-calm.svg",
    body: {
      en: [
        "Every product wants a piece of your attention, and the result is a screen full of badges, banners and begging. The interfaces that survive that noise are not the loudest — they are the most legible.",
        "Calm is not emptiness. It is a decision about what deserves the user's eye first. When a bank shows one number instead of eleven, it is not hiding information; it is answering the only question that mattered at that moment.",
        "We start every project by writing the single sentence a screen must communicate before any wireframe exists. If a screen has three sentences, it has three jobs — and usually two of them are ours to cut.",
        "The practical work of calm is subtraction: fewer type sizes, one accent colour, whitespace where the dashboard used to be. The hard part is not the pixels. It is defending the subtraction in a room that expects more.",
      ],
      es: [
        "Todo producto quiere un trozo de tu atención, y el resultado es una pantalla llena de insignias, banners y súplicas. Las interfaces que sobreviven a ese ruido no son las más altas: son las más legibles.",
        "La calma no es vacío. Es una decisión sobre qué merece la mirada del usuario primero. Cuando un banco muestra un solo número en lugar de once, no esconde información; responde la única pregunta que importaba en ese momento.",
        "Empezamos cada proyecto escribiendo la única frase que una pantalla debe comunicar, antes de que exista ningún wireframe. Si una pantalla tiene tres frases, tiene tres trabajos — y normalmente dos son nuestros, de recortar.",
        "El trabajo práctico de la calma es la sustracción: menos tamaños de letra, un único color de acento, aire donde antes estaba el panel. Lo difícil no son los píxeles. Es defender la sustracción en una sala que espera más.",
      ],
    },
  },
  {
    slug: "brand-systems-that-survive",
    title: {
      en: "Brand systems that survive the handover",
      es: "Sistemas de marca que sobreviven al traspaso",
    },
    excerpt: {
      en: "A brand is not a PDF. It is what a team can hold when you are not in the room.",
      es: "Una marca no es un PDF. Es lo que un equipo puede sostener cuando tú no estás en la sala.",
    },
    date: "2026-07-02",
    readingTime: 8,
    category: { en: "Brand", es: "Marca" },
    image: "/images/article-brand.svg",
    body: {
      en: [
        "Most brand guidelines fail the same way: they describe a logo and a palette but never teach the team how to decide. The moment a real decision appears, the PDF goes back on the shelf.",
        "A system that survives is one that makes choices feel obvious. It names the few rules that matter, shows the common situations a brand actually meets, and trusts the team with the rest.",
        "We build systems as tokens first and documents second. When the colour, type and spacing live as code, the brand stops being an argument and starts being infrastructure.",
        "The test is simple: six months after we leave, can a new hire ship something that still feels like the brand? If the answer is yes, the handover worked. If it depends on us, it did not.",
      ],
      es: [
        "La mayoría de manuales de marca fallan igual: describen un logo y una paleta, pero nunca enseñan al equipo a decidir. En cuanto aparece una decisión real, el PDF vuelve a la estantería.",
        "Un sistema que sobrevive es uno que hace que las elecciones parezcan obvias. Nombra las pocas reglas que importan, muestra las situaciones habituales que una marca encuentra de verdad y confía el resto al equipo.",
        "Construimos sistemas como tokens primero y documentos después. Cuando el color, la tipografía y el espaciado viven como código, la marca deja de ser una discusión y pasa a ser infraestructura.",
        "La prueba es simple: seis meses después de irnos, ¿puede una incorporación nueva publicar algo que siga pareciendo la marca? Si la respuesta es sí, el traspaso funcionó. Si depende de nosotros, no.",
      ],
    },
  },
  {
    slug: "cost-of-a-fast-redesign",
    title: {
      en: "The real cost of a fast redesign",
      es: "El coste real de un rediseño rápido",
    },
    excerpt: {
      en: "You can ship a new look in a month. It takes a year to find out what it broke.",
      es: "Puedes publicar una imagen nueva en un mes. Tardas un año en descubrir qué rompió.",
    },
    date: "2026-04-18",
    readingTime: 7,
    category: { en: "Strategy", es: "Estrategia" },
    image: "/images/article-redesign.svg",
    body: {
      en: [
        "A redesign looks cheap on a calendar and expensive on a balance sheet. The pixels ship in weeks; the trust, the rankings and the learned behaviour they replace took years to accumulate.",
        "Fast redesigns usually skip the one question that matters: what is actually wrong, and how do we know? Without that, a new look is just new furniture in the same broken room.",
        "We measure before we move. Baseline analytics, user recordings and a handful of honest interviews tell us which problem the redesign is solving — and give us a number to beat after launch.",
        "Slower in the planning and faster in the shipping is the only order that works. The weeks spent on the question come back as months saved on the answer.",
      ],
      es: [
        "Un rediseño parece barato en el calendario y caro en el balance. Los píxeles se publican en semanas; la confianza, el posicionamiento y el comportamiento aprendido que sustituyen tardaron años en acumularse.",
        "Los rediseños rápidos suelen saltarse la única pregunta que importa: ¿qué está mal de verdad y cómo lo sabemos? Sin eso, una imagen nueva es solo mobiliario nuevo en la misma habitación rota.",
        "Medimos antes de mover. Analítica de partida, grabaciones de usuarios y unas pocas entrevistas honestas nos dicen qué problema resuelve el rediseño — y nos dan una cifra que superar tras el lanzamiento.",
        "Más lentos en la planificación y más rápidos en la publicación es el único orden que funciona. Las semanas invertidas en la pregunta vuelven como meses ahorrados en la respuesta.",
      ],
    },
  },
  {
    slug: "typography-with-a-point-of-view",
    title: {
      en: "Typography with a point of view",
      es: "Tipografía con un punto de vista",
    },
    excerpt: {
      en: "A typeface is not decoration. It is the accent your brand speaks with.",
      es: "Una tipografía no es decoración. Es el acento con el que habla tu marca.",
    },
    date: "2026-01-27",
    readingTime: 5,
    category: { en: "Craft", es: "Oficio" },
    image: "/images/article-type.svg",
    body: {
      en: [
        "Choose a typeface and you have chosen a tone of voice before a single word is written. A geometric sans sounds modern and a little cold; a humanist serif sounds warm and a little old. Neither is wrong, but both are a decision.",
        "We pair type the way we pair people in a conversation: one voice leads, another listens, a third annotates. A display face for the headline, a sans for the body, a mono for the numbers that need to be believed.",
        "The discipline is restraint. Two families, maybe three, each with a job. Every extra weight and size is a rule someone has to remember — and eventually forget.",
        "Type only works when it is consistent. A brand that changes voice between pages is like a person who changes accent between rooms. The reader may not name it, but they will not trust it.",
      ],
      es: [
        "Elige una tipografía y habrás elegido un tono de voz antes de escribir una sola palabra. Una sans geométrica suena moderna y un poco fría; una serif humanista suena cálida y un poco antigua. Ninguna está mal, pero ambas son una decisión.",
        "Emparejamos tipos como emparejamos voces en una conversación: una dirige, otra escucha y una tercera anota. Una tipografía de display para el titular, una sans para el cuerpo y una mono para los números que necesitan ser creídos.",
        "La disciplina es la contención. Dos familias, quizá tres, cada una con un trabajo. Cada peso y tamaño extra es una regla que alguien tiene que recordar — y acabar olvidando.",
        "La tipografía solo funciona cuando es coherente. Una marca que cambia de voz entre páginas es como una persona que cambia de acento entre habitaciones. Quien lee quizá no lo nombre, pero no lo creerá.",
      ],
    },
  },
  {
    slug: "why-we-stopped-pitching-decks",
    title: {
      en: "Why we stopped pitching decks",
      es: "Por qué dejamos de presentar decks",
    },
    excerpt: {
      en: "Sixty slides cannot explain a decision. A working prototype can.",
      es: "Sesenta diapositivas no explican una decisión. Un prototipo que funciona sí.",
    },
    date: "2025-11-10",
    readingTime: 4,
    category: { en: "Studio", es: "Estudio" },
    image: "/images/article-pitch.svg",
    body: {
      en: [
        "For years we pitched the way everyone else did: sixty slides, a reveal, a polite room. Then we noticed the best projects never started with a pitch at all. They started with a question we could answer together.",
        "A deck describes an idea. A prototype is the idea. When a client clicks a real button and sees their own name in it, the decision stops being abstract and starts being theirs.",
        "So we replaced the pitch with a working session: a small prototype, a shared screen and the problem written on the wall. The conversation is shorter, the decisions are stickier, and nobody leaves wondering what they just bought.",
        "The lesson generalises. Whenever a document is standing in for the work, replace the document with a small version of the work. It is slower to make and faster to decide.",
      ],
      es: [
        "Durante años presentamos como todos: sesenta diapositivas, una revelación, una sala educada. Luego notamos que los mejores proyectos nunca empezaban con un pitch. Empezaban con una pregunta que podíamos responder juntos.",
        "Un deck describe una idea. Un prototipo es la idea. Cuando un cliente pulsa un botón real y ve su propio nombre dentro, la decisión deja de ser abstracta y pasa a ser suya.",
        "Así que sustituimos el pitch por una sesión de trabajo: un prototipo pequeño, una pantalla compartida y el problema escrito en la pared. La conversación es más corta, las decisiones son más firmes y nadie se va preguntándose qué acaba de comprar.",
        "La lección se generaliza. Cuando un documento sustituye al trabajo, reemplaza el documento por una versión pequeña del trabajo. Es más lento de hacer y más rápido de decidir.",
      ],
    },
  },
  {
    slug: "measuring-what-design-moves",
    title: {
      en: "Measuring what design actually moves",
      es: "Medir lo que el diseño mueve de verdad",
    },
    excerpt: {
      en: "Design is not magic, and it is not garnish. It is measurable — if you measure the right thing.",
      es: "El diseño no es magia ni guarnición. Es medible — si mides lo correcto.",
    },
    date: "2025-08-05",
    readingTime: 6,
    category: { en: "Strategy", es: "Estrategia" },
    image: "/images/article-measure.svg",
    body: {
      en: [
        "Ask what a redesign achieved and you will often hear about screens and delight. Ask what it moved and you will hear silence. The gap is not the design; it is the measurement.",
        "Design moves a small set of numbers: time to value, conversion, retention, support load. Pick one before you start, agree how you will know, and every decision after that has a referee.",
        "Not everything is a number, and that is fine. Some things — trust, clarity, confidence — show up in the numbers later, through behaviour rather than survey answers.",
        "The point is not to reduce design to a spreadsheet. It is to give the work a spine. When design can say what it moved, it stops being a cost and starts being an investment.",
      ],
      es: [
        "Pregunta qué logró un rediseño y a menudo oirás hablar de pantallas y deleite. Pregunta qué movió y oirás silencio. La brecha no es el diseño; es la medición.",
        "El diseño mueve un conjunto pequeño de números: tiempo hasta el valor, conversión, retención, carga de soporte. Elige uno antes de empezar, acuerda cómo lo sabrás, y cada decisión posterior tendrá un árbitro.",
        "No todo es un número, y está bien. Algunas cosas —confianza, claridad, seguridad— aparecen en los números más tarde, a través del comportamiento más que de las respuestas a encuestas.",
        "La idea no es reducir el diseño a una hoja de cálculo. Es darle columna vertebral al trabajo. Cuando el diseño puede decir qué movió, deja de ser un coste y empieza a ser una inversión.",
      ],
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((item) => item.slug === slug);
}
