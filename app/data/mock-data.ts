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
      period: "2016 - 2018",
      status: "done",
      side: "left",
      description: "Learned how to design for people, not just screens. Did lots of usability testing and built quick prototypes to improve how things flow.",
      summary: "2016-2018: Taught me to always think about the end user first."
    },
    {
      key: "fullstack",
      title: "Full-Stack Engineer",
      period: "2018 - 2021",
      status: "done",
      side: "right",
      description: "Moved into building both front-end and back-end (React, Node, APIs, databases). Turned design ideas into real, working products.",
      summary: "2018-2021: Gave me the ability to ship end-to-end solutions."
    },
    {
      key: "ai",
      title: "AI Engineer",
      period: "2021 - 2023",
      status: "done",
      side: "left",
      description: "Learned about machine learning and language models. Integrated AI into apps, worked with data pipelines and model deployment.",
      summary: "2021-2023: Added intelligence to the systems I was already building."
    },
    {
      key: "security",
      title: "Smart Contract Security",
      period: "2023 - Present",
      status: "current",
      side: "right",
      description: "Studying Solidity, auditing, and security tools. Practicing bug-finding and learning how to spot vulnerabilities.",
      summary: "2023-Present: Extends my mindset into trust, security, and reliability."
    }
  ],
  
  aboutText: {
    main: "I build secure, intelligent, user-friendly apps and audit smart contracts. I like to create solutions that bridge the gap between complex technology and intuitive user experiences.",
    secondary: "Previously, I worked on various full-stack projects focusing on security and smart contract development."
  }
};
