export const mockData = {
  hero: {
    name: "Joshua Miller",
    title: "Full-Stack Engineer",
    titleDescription: "A Full-Stack Engineer is a developer who can work on both the front-end and back-end of applications. They handle everything from user interface design and user experience to server-side logic, databases, and system architecture.",
    titleDescriptionExtended: "Full-Stack Engineers are versatile problem-solvers who can build complete applications from start to finish, making them valuable team members who can bridge different technical domains and contribute to all aspects of software development."
  },
  socialProfiles: [
    {
      image: "/me.jpeg",
      logo: "/icons/x.svg",
      username: "millercreator_",
      link: "https://twitter.com/joshuamiller",
      platform: "twitter",
    },
    {
      image: "/me.jpeg",
      logo: "/icons/linkedin.svg",
      username: "millercreator",
      link: "https://github.com/jmiller",
      platform: "github",
    }
  ],

  skills: [
    { key: "uiux", label: "UI/UX Design" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "ai", label: "AI" },
    { key: "security", label: "Smart Contract Security" },
  ],

  timelineItems: [
    {
      key: "uiux",
      title: "UI/UX Designer",
      period: "2018 - 2020",
      status: "done",
      description:
        "I started by diving deep into design, learning from platforms like Pinterest and Dribbble. I focused on small details and best practices, making sure every app I touched felt smooth and easy to use.",
      summary:
        "This phase taught me that good design is about making things simple and enjoyable. I learned to always put the user first.",
      tools: [
        "/icons/behance.svg",
        "/icons/dribbble.svg",
        "/icons/figma.svg",
        "/icons/layers.svg",
        "/icons/notebook-and-pen.svg",
        "/icons/pinterest.svg",
      ]
    },
    {
      key: "frontend",
      title: "Frontend Engineer",
      period: "2020 - 2023",
      status: "done",
      description:
        "My design skills pushed me to build real, interactive web experiences. I wanted to connect people through easy-to-use websites. This step let me turn ideas into working products, using my eye for design to guide every decision.",
      summary:
        "I learned to turn designs into fast, friendly websites. My design background made my code more thoughtful and user-focused.",
      tools: [
        "/icons/nextjs.svg",
        "/icons/reactjs.svg",
        "/icons/tailwindcss.svg",
        "/icons/typescript.svg",
        "/icons/javascript.svg",
        "/icons/graphql.svg",
      ]
    },
    {
      key: "backend",
      title: "Backend Engineer",
      period: "2023 - 2024",
      status: "done",
      description:
        "Curious about how things work behind the scenes, I moved into backend development. I built APIs, handled data, and made sure everything ran smoothly. This helped me see how the frontend and backend fit together.",
      summary:
        "I made sure the systems powering the apps were strong and could grow. This made my work more complete and reliable.",
      tools: [
        "/icons/nodejs.svg",
        "/icons/nestjs.svg",
        "/icons/expressjs.svg",
        "/icons/python.svg",
        "/icons/fastapi.svg",
        "/icons/postgressql.svg",
      ]
    },
    {
      key: "ai",
      title: "AI Engineer",
      period: "2024 - 2025",
      status: "done",
      description:
        "Working at an AI agency, I learned about machine learning and language models. I used these tools to make apps smarter and more helpful. This step built on my backend skills, letting me solve new kinds of problems.",
      summary:
        "I learned to add smart features to apps, making them more useful and able to handle real-world needs.",
      tools: []
    },
    {
      key: "security",
      title: "Smart Contract Security",
      period: "2025 - Present",
      status: "current",
      description:
        "Now, I'm focused on blockchain and smart contract security. I'm learning how to keep new tech safe, using everything I've learned so far. My goal is to build systems people can trust.",
      summary:
        "This step is about trust and safety. It ties together my design, coding, and AI experience to protect users and data.",
      tools: []
    }
  ] as const,

  aboutText: {
    main: "👋🏻 Hi, I'm a fullstack engineer with over 4 years of hands-on experience building modern web applications using rapid development practices. I focus on writing clean, scalable code that follows industry standards and best practices.",
    secondary: "My technical foundation covers system design and both backend and frontend technologies, which lets me work effectively across different parts of the stack."
  }
};

/**
 * I am a fullstack engineer with 4+ years of hands on experience in morderm rapid development
 * Following industry best practices and convetions, i build scalable web applications,
 * I might not know, but i will surely figure it out, this qualities make me work in a cross functional tasks, from mobile development, to web, design and AI
 * Complex problem is just a problem not broken down enough, 
 * I have strong technical and problem solving foundation in both backend and frontend technology
 * My 3+ years of design experience has trained my eyes to only build software that feels and looks good using it
 * I prioritize security
 * 
 * */
