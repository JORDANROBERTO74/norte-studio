/**
 * English dictionary. This file is the source of truth for the copy shape:
 * every other locale must implement the same `Dictionary` type.
 */
export const en = {
  meta: {
    home: {
      title: "Norte Studio — Independent digital studio in Valencia",
      description:
        "Norte Studio is a small senior team designing brands, websites and digital products for companies that would rather be clear than loud.",
    },
    about: {
      title: "Studio — Norte Studio",
      description:
        "Four senior people, nine years independent, one studio in Valencia. The people, the values and the history behind Norte Studio.",
    },
    services: {
      title: "Services — Norte Studio",
      description:
        "Strategy, brand identity, web design and development, product design, growth and content systems. Clear scope, clear price.",
    },
    work: {
      title: "Work — Norte Studio",
      description:
        "Selected case studies from Norte Studio: banking, wine, hospitality, education, furniture and logistics, each with the metric that mattered.",
    },
    journal: {
      title: "Journal — Norte Studio",
      description:
        "Notes on product design, brand systems, strategy and craft from the Norte Studio team.",
    },
    contact: {
      title: "Contact — Norte Studio",
      description:
        "Tell us what you are building. Norte Studio replies to every serious message within two working days.",
    },
    notFound: {
      title: "Page not found — Norte Studio",
      description: "This page does not exist.",
    },
  },
  common: {
    brand: "Norte Studio",
    tagline: "An independent digital studio in Valencia.",
    skip: "Skip to content",
    close: "Close",
    viewAll: "View all",
    back: "Back",
    readCase: "Read the case study",
    readArticle: "Read article",
    minRead: "min read",
    from: "From",
    getInTouch: "Get in touch",
  },
  nav: {
    home: "Home",
    about: "Studio",
    services: "Services",
    work: "Work",
    journal: "Journal",
    contact: "Contact",
    language: "Language",
    menu: "Menu",
  },
  home: {
    hero: {
      eyebrow: "Independent digital studio · Valencia",
      title: "Design that earns its keep.",
      subtitle:
        "Norte Studio is a small senior team that designs brands, websites and digital products for companies that would rather be clear than loud.",
      cta: "See our work",
      secondary: "Our services",
      note: "Senior team only · No juniors, no handoffs",
    },
    clients: {
      title: "Selected clients",
      subtitle: "A few of the companies we have designed with.",
    },
    cases: {
      eyebrow: "Work",
      title: "Work that moved a number.",
      subtitle: "A short selection of recent projects, with the metric that mattered.",
      viewAll: "All case studies",
    },
    testimonials: {
      eyebrow: "Kind words",
      title: "What partners say when we leave the room.",
      items: [
        {
          quote:
            "Norte rebuilt our app and our confidence in the same quarter. The work pays for itself every month.",
          author: "Elena Márquez",
          role: "VP Product, Atlántica",
        },
        {
          quote: "The first agency that answered our brief with questions instead of a logo.",
          author: "Jordi Serra",
          role: "Founder, Bodega Solera",
        },
        {
          quote: "They said no to a feature we did not need. That is when we trusted them.",
          author: "Noor Haddad",
          role: "COO, Viento",
        },
      ],
    },
    stats: {
      eyebrow: "In numbers",
      items: [
        { value: "60+", label: "projects shipped" },
        { value: "12", label: "industry awards" },
        { value: "9", label: "years independent" },
        { value: "96%", label: "clients who return" },
      ],
    },
    approach: {
      eyebrow: "How we work",
      title: "Four steps, no theatre.",
      subtitle:
        "Small teams, short cycles, honest checkpoints. You always know what happens next.",
      steps: [
        {
          title: "Listen",
          text: "We start with the people who use the product and the number that has to move. No assumptions, no jargon.",
        },
        {
          title: "Shape",
          text: "We turn what we heard into a short, testable direction: a positioning, a prototype, a plan you can argue with.",
        },
        {
          title: "Build",
          text: "The senior team designs and ships in short cycles. You see working software, not slideware.",
        },
        {
          title: "Launch",
          text: "We launch together, measure against the number we agreed, and stay for the parts that need another pass.",
        },
      ],
    },
    cta: {
      title: "Have a problem worth solving?",
      subtitle:
        "Tell us what you are building. We will tell you honestly whether we can help.",
      button: "Start a conversation",
    },
  },
  about: {
    hero: {
      eyebrow: "The studio",
      title: "Small on purpose.",
      subtitle:
        "Norte Studio is four senior people who have worked together for nine years. We stay small because the best work happens when the people you meet are the people who do the work.",
    },
    history: {
      eyebrow: "A brief history",
      title: "Nine years, one question.",
      body1:
        "Norte began in a Valencia apartment in 2017 with a borrowed desk and a stubborn belief: clarity is a competitive advantage. We wanted to work with companies that were tired of agencies full of account managers and empty of decisions.",
      body2:
        "Nine years later the belief has not changed, only the proof. We have shipped more than sixty projects across banking, wine, hospitality, education and logistics — and stayed a team of four the whole way.",
      timeline: [
        { year: "2017", text: "Founded in a Valencia apartment with two desks and no clients." },
        { year: "2019", text: "First retained product client, a fintech that is still with us." },
        { year: "2021", text: "Grew to four people and decided that was the whole plan." },
        { year: "2024", text: "Rebranded as Norte Studio and moved to El Cabanyal." },
      ],
    },
    values: {
      eyebrow: "What we believe",
      title: "The rules we do not break.",
      items: [
        {
          title: "Clarity over cleverness",
          text: "If a solution needs a paragraph to explain, it is not finished. We design until it is obvious.",
        },
        {
          title: "Small teams, senior hands",
          text: "No account managers, no juniors learning on your budget. The people you meet do the work.",
        },
        {
          title: "Measure what matters",
          text: "Every project starts with the number it has to move. Design without a spine is decoration.",
        },
        {
          title: "Ship, then improve",
          text: "A good thing in production beats a perfect thing in a deck. We launch early and iterate honestly.",
        },
      ],
    },
    team: {
      eyebrow: "The team",
      title: "Four people, no layers.",
      subtitle:
        "A senior team that designs, builds and ships together. You talk to the people doing the work.",
    },
    insights: {
      eyebrow: "From the journal",
      title: "What we are thinking about.",
      viewAll: "All articles",
    },
  },
  services: {
    hero: {
      eyebrow: "Services",
      title: "Six ways we help.",
      subtitle:
        "Engage us for one service or for all of them. Either way, you work with the same senior team and pay a clear price.",
    },
    list: {
      eyebrow: "What we do",
      title: "The work, itemised.",
      subtitle: "No vague retainers. Each service has a job, a price and a person who owns it.",
      items: [
        {
          title: "Strategy & positioning",
          text: "We find the one thing your product should be known for and the number it has to move.",
          deliverables: ["Discovery workshop", "Positioning statement", "Roadmap"],
        },
        {
          title: "Brand identity",
          text: "A name, a voice and a visual system your team can actually use after we leave.",
          deliverables: ["Verbal identity", "Visual system", "Guidelines as tokens"],
        },
        {
          title: "Web design & development",
          text: "Marketing sites that load fast, read clearly and turn visitors into conversations.",
          deliverables: ["Design", "Build", "CMS", "SEO baseline"],
        },
        {
          title: "Product design",
          text: "Interfaces for apps and platforms, designed around the people who use them every day.",
          deliverables: ["UX research", "UI design", "Design system"],
        },
        {
          title: "Growth & SEO",
          text: "Technical and editorial work that makes the thing you built easier to find and believe.",
          deliverables: ["Technical SEO", "Content strategy", "Analytics setup"],
        },
        {
          title: "Content systems",
          text: "Voice guidelines, page templates and editorial structures that scale without an agency on call.",
          deliverables: ["Voice & tone", "Content model", "Editorial calendar"],
        },
      ],
    },
    projects: {
      eyebrow: "Proof",
      title: "Selected projects",
      subtitle: "A few results, with the number that mattered.",
      viewAll: "All case studies",
    },
    plans: {
      eyebrow: "Ways to work",
      title: "Three ways to hire us.",
      subtitle: "Clear scope, clear price. No hourly billing unless you ask for it.",
      plans: [
        {
          name: "Brand sprint",
          priceLabel: "from",
          price: 480000,
          period: "two weeks",
          blurb: "One problem, solved fast. Positioning and a visual direction you can test.",
          features: [
            "Discovery workshop",
            "Positioning statement",
            "Visual direction",
            "One-page site",
          ],
          cta: "Book a sprint",
          featured: false,
        },
        {
          name: "Website",
          priceLabel: "from",
          price: 1200000,
          period: "six weeks",
          blurb: "A marketing site, designed, built and launched end to end.",
          features: [
            "Strategy & content",
            "Design system",
            "Build & CMS",
            "SEO & analytics",
            "Launch support",
          ],
          cta: "Plan a website",
          featured: true,
        },
        {
          name: "Product partner",
          priceLabel: "custom",
          price: 0,
          period: "ongoing",
          blurb: "An embedded senior squad for teams that need design as a habit.",
          features: [
            "Embedded designer",
            "Design system",
            "Shipping cadence",
            "Quarterly review",
          ],
          cta: "Talk to us",
          featured: false,
        },
      ],
      note: "Every engagement starts with a paid discovery sprint so both sides know what they are buying.",
      popular: "Most popular",
    },
    process: {
      eyebrow: "Process",
      title: "How a project runs.",
      steps: [
        {
          title: "Discover",
          text: "A short, paid sprint to define the problem, the audience and the number that has to move.",
        },
        {
          title: "Define",
          text: "A written direction you can argue with: positioning, scope, timeline and price.",
        },
        {
          title: "Design",
          text: "Working prototypes in short cycles. You review real screens, not mood boards.",
        },
        {
          title: "Ship",
          text: "We launch together, measure against the agreed number and stay for the iteration that follows.",
        },
      ],
    },
  },
  work: {
    hero: {
      eyebrow: "Work",
      title: "Proof, not promises.",
      subtitle:
        "Every project below shipped, and every metric is the one we agreed to move before we started.",
    },
    metrics: {
      eyebrow: "Across our work",
      items: [
        { value: "60+", label: "projects shipped" },
        { value: "12", label: "industry awards" },
        { value: "4.8★", label: "average partner rating" },
        { value: "9", label: "years independent" },
      ],
    },
    list: {
      eyebrow: "Case studies",
      title: "Every project, in one place.",
      subtitle: "From banking to furniture, the same question in each: what moved?",
    },
    trusted: {
      title: "Trusted by teams who need it to work.",
      subtitle:
        "We do not chase logos for a homepage. We take a few clients a year and go deep with each.",
    },
  },
  caseStudy: {
    back: "All work",
    client: "Client",
    sector: "Sector",
    year: "Year",
    services: "Services",
    challenge: "The challenge",
    solution: "The solution",
    results: "The results",
    next: "Next project",
  },
  journal: {
    hero: {
      eyebrow: "Journal",
      title: "Notes on the work.",
      subtitle:
        "What we are learning about design, brand and building digital products — written in the open.",
    },
    list: {
      eyebrow: "All articles",
      title: "The latest thinking.",
      subtitle: "Short, practical writing from the people doing the work.",
    },
  },
  article: {
    back: "All articles",
    published: "Published",
    related: "Keep reading",
    next: "Next article",
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      title: "Start a conversation.",
      subtitle:
        "Tell us what you are building and what it should achieve. We reply to every serious message within two working days.",
    },
    form: {
      name: "Your name",
      namePlaceholder: "Ada García",
      email: "Email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyPlaceholder: "Company or product",
      budget: "Budget",
      budgetOptions: [
        "Under €10k",
        "€10k – €30k",
        "€30k – €80k",
        "Over €80k",
        "Not sure yet",
      ],
      message: "Tell us about the project",
      messagePlaceholder: "What are you building, and what should it achieve?",
      submit: "Send message",
      success: "Thanks — your message is on its way. We reply within two working days.",
      invalidEmail: "Enter a valid email address.",
      required: "Please fill in this field.",
    },
    info: {
      eyebrow: "Direct",
      title: "Prefer email?",
      text: "Write to us directly. We read everything and answer every serious message.",
      emailLabel: "Email",
      locationLabel: "Studio",
      socialLabel: "Elsewhere",
    },
  },
  footer: {
    tagline:
      "An independent digital studio. Strategy, brand, web and product — designed and built in Valencia.",
    explore: "Explore",
    studio: "Studio",
    contact: "Contact",
    rights: "All rights reserved.",
    note: "Norte Studio S.L. · Valencia, Spain",
    language: "Language",
  },
  notFound: {
    title: "This page went north.",
    text: "The link may be old, or the page may have moved.",
    cta: "Back to the start",
  },
};

export type Dictionary = typeof en;
