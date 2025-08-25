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
      username: "millercreator_",
      link: "https://x.com/millercreator_",
      platform: "x",
    },
    {
      image: "/me.jpeg",
      username: "millercreator",
      link: "https://linkedin.com/in/millercreator/",
      platform: "linkedin",
    }
  ],

  skills: [
    { key: "fullstack", label: "Full-Stack" },
    { key: "uiux", label: "UI/UX Design" },
    { key: "ai", label: "AI" },
    { key: "security", label: "Smart Contract Security" },
  ],

  // UI/UX Projects data
  uiuxProjects: [
    {
      title: "E-commerce App Redesign",
      role: "Lead UI/UX Designer",
      description: "Complete redesign of mobile e-commerce app focusing on improved user flow and conversion rates.",
      link: "https://example.com/project1",
      images: [
        "/mock-images/1.png",
        "/mock-images/2.png",
      ]
    },
    {
      title: "Healthcare Dashboard",
      role: "Lead UI/UX Designer",
      description: "Patient management dashboard designed for healthcare providers with accessibility focus.",
      link: "https://example.com/project2",
      images: [
        "/mock-images/1.png",
        "/mock-images/2.png",
      ]
    },
    {
      title: "Travel Booking Platform",
      role: "Lead UI/UX Designer",
      description: "Streamlined booking experience for travel accommodations with smart search and filtering.",
      link: "https://example.com/project3",
      images: [
        "/mock-images/1.png",
        "/mock-images/2.png",
      ]
    },
    {
      title: "Social Media Analytics",
      role: "Lead UI/UX Designer",
      description: "Data visualization dashboard for social media marketers with interactive charts and reports.",
      link: "https://example.com/project4",
      images: [
        "/mock-images/1.png",
        "/mock-images/2.png",
      ]
    }
  ],

  fullstackProjects: [  
      {
        logo: "/icons/promptdrive.svg",
        title: "PromptDrive",
        subtitle: "Marketplace for AI prompts to find, share, and buy creative ideas",
        description: "Marketplace to find, share, and buy AI prompts.",
        techstack: ["Next.js", "TypeScript", "TailwindCSS", "React", "PostgreSQL"],
        tags: ["Website", "AI", "Marketplace"],
        image: "/promptdrive.png",
        link: "https://photomart-ai.vercel.app/",
        sourceCode: "https://photomart-ai.vercel.app/",
        previewAlt: "PromptDrive AI prompt marketplace screenshot",
        details: `PromptDrive is a simple online marketplace for AI prompts. You can search, share, and buy prompts for different AI tools. The platform helps creators sell their best prompts and lets users find what they need fast.

Built with a clean interface, PromptDrive makes it easy to browse, preview, and purchase prompts. It supports categories, user profiles, and secure payments. The goal is to help everyone get more value from AI, whether you're a creator or just looking for a prompt to use.`
      },
//     {
//       logo: "/icons/promptdrive.svg",
//       title: "Bill Payment Platform",
//       subtitle: "Simple, secure bill payments",
//       description: "Manage accounts, send money, track spending, secure banking",
//       techstack: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
//       tags: ["Fintech", "Payments"],
//       image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
//       link: "https://example.com/billpay",
//       previewAlt: "Bill payment dashboard screenshot",
//       details: `A modern platform for paying bills and managing finances. Users can link accounts, send money, and track spending in real time. Security is built-in, with strong encryption and fraud detection.

// The dashboard gives a clear view of all transactions and spending habits. The platform supports multiple payment methods and is easy to use for everyone.`
//     },
//     {
//       logo: "/icons/promptdrive.svg",
//       title: "Team Chat App",
//       subtitle: "Fast, reliable team messaging",
//       description: "Real-time chat, fast messaging, reliable, easy for teams",
//       techstack: ["Next.js", "Socket.io", "TypeScript", "Redis", "TailwindCSS"],
//       tags: ["Chat", "Collaboration"],
//       image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
//       link: "https://example.com/teamchat",
//       previewAlt: "Team chat app screenshot",
//       details: `A chat app built for teams who need to move fast. Messages are delivered instantly, and the interface is simple and clean.

// Features include group chats, file sharing, and notifications. The app is reliable even with many users online at once. It helps teams stay connected and get work done.`
//     },
//     {
//       logo: "/icons/promptdrive.svg",
//       title: "Issue Tracker",
//       subtitle: "Track and squash bugs easily",
//       description: "Track bugs, assign issues, comment, close tickets quickly",
//       techstack: ["Vue.js", "Firebase", "TailwindCSS"],
//       tags: ["Productivity", "Bug Tracking"],
//       image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
//       link: "https://example.com/issuetracker",
//       previewAlt: "Issue tracker dashboard screenshot",
//       details: `A simple tool for tracking bugs and issues. Teams can create tickets, assign them, and comment to keep everyone in the loop.

// The dashboard shows open and closed issues at a glance. Fast search and filters make it easy to find what you need. This tool helps teams fix problems quickly and keep projects on track.`
//     },
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
