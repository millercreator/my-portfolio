import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Joshua Miller | Portfolio",
  description: "Welcome to my personal portfolio. Explore my projects, skills, and experience as a fullstack web developer.",
  keywords: [
    "portfolio",
    "web developer",
    "fullstack engineer",
    "frontend engineer",
    "backend engineer",
    "UI/UX designer",
    "AI engineer",
    "smart contract security",
    "blockchain",
    "system design",
    "machine learning",
    "language models",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "APIs",
    "data handling",
    "web applications",
    "rapid development",
    "clean code",
    "scalable code",
    "user experience",
    "user interface",
    "projects",
    "resume",
    "personal website",
    "trust",
    "safety",
    "best practices"
  ],
  authors: [{ name: "Joshua Miller", url: "https://millercreator.vercel.app/" }],
  creator: "Joshua Miller",
  publisher: "Joshua Miller",
  metadataBase: new URL("https://millercreator.vercel.app/"),
  openGraph: {
    title: "Joshua Miller | Portfolio",
    description: "See my work, skills, and experience as a web developer.",
    url: "https://millercreator.vercel.app/",
    siteName: "Joshua Miller Portfolio",
    images: [
      {
        url: "https://millercreator.vercel.app//og-image.png", // TODO: Add an opengraph image
        width: 1200,
        height: 630,
        alt: "Joshua Miller Portfolio Preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Miller | Portfolio",
    description: "Explore my projects and skills as a fullstack web developer.",
    creator: "@millercreator_",
    images: ["https://millercreator.vercel.app//og-image.png"] // TODO: Add an opengraph image
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: "portfolio"
}