"use client";

import { useState } from "react"
import { Info, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline"
import { cn } from "@/lib/utils";
import { UIUXProjectCarousel } from "@/components/uiux-project-carousel";
import { FullstackProjectsList } from "@/components/fullstack-projects-list";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { SocialPreviewCard } from "@/components/social-preview-card";

// Mock data for social profiles
const socialProfiles = [
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    username: "joshuamiller.eth",
    link: "https://twitter.com/joshuamiller",
    platform: "twitter",
  },
  {
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    username: "jmiller_dev",
    link: "https://github.com/jmiller",
    platform: "github",
  },
  {
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    username: "joshua.design",
    link: "https://dribbble.com/joshua",
    platform: "dribbble",
  },
  {
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    username: "joshua.linkedin",
    link: "https://linkedin.com/in/joshuamiller",
    platform: "linkedin",
  },
  {
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    username: "joshua.medium",
    link: "https://medium.com/@joshua",
    platform: "medium",
  },
  {
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    username: "joshua.web3",
    link: "https://web3.social/joshua",
    platform: "web3",
  },
];

export default function Home() {
  const [activeSnapShot, setActiveSnapShot] = useState<null | string>("uiux");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // List of skills for the buttons
  const skills = [
    { key: "uiux", label: "UI/UX Design" },
    { key: "fullstack", label: "Full-Stack" },
    { key: "ai", label: "AI" },
    { key: "security", label: "Smart Contract Security" },
  ];

  // Helper to show all project previews when nothing is selected
  function renderProjectPreview() {
    return (
      <>
        {(activeSkill === null || activeSkill === "uiux") && (
          <div className="py-6 border-b">
            <UIUXProjectCarousel />
          </div>
        )}
        {(activeSkill === null || activeSkill === "fullstack") && (
          <div className="py-6 border-b">
            <FullstackProjectsList />
          </div>
        )}
        {(activeSkill === null || activeSkill === "ai") && (
          <div className="py-6 border-b text-muted-foreground text-center">
            <span>No AI projects to show yet.</span>
          </div>
        )}
        {(activeSkill === null || activeSkill === "security") && (
          <div className="py-6 border-b text-muted-foreground text-center">
            <span>No Smart Contract Security projects to show yet.</span>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen">
      <section className="mb-16 flex flex-col md:flex-row w-full md:justify-between">
        <div>
          <h1 className="font-semibold text-base leading-7">Joshua Miller</h1>
          <div className="flex items-center gap-2 group">
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  variant="link"
                  className="text-muted-foreground text-base p-0 h-auto font-normal hover:cursor-pointer hover:no-underline"
                >
                  Full-Stack Engineer
                </Button>
              </DrawerTrigger>
              <DrawerContent className="min-h-[50vh] ">
                <div className="mx-auto w-full max-w-3xl h-full">
                  <DrawerHeader>
                    <DrawerTitle className="mt-8 mb-4 text-xl text-start">Who is a Full-Stack Engineer?</DrawerTitle>
                    <DrawerDescription className="text-base text-start">
                      A Full-Stack Engineer is a developer who can work on both the front-end and back-end of applications.
                      They handle everything from user interface design and user experience to server-side logic, databases,
                      and system architecture.
                      {<span className="block my-6" />}
                      Full-Stack Engineers are versatile problem-solvers who can build complete
                      applications from start to finish, making them valuable team members who can bridge different technical
                      domains and contribute to all aspects of software development.
                    </DrawerDescription>
                  </DrawerHeader>
                </div>
              </DrawerContent>
            </Drawer>
            <Info
              className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>
        <div>
          <div className="bg-muted rounded-xl p-4">
            <div className="grid grid-cols-6 gap-2">
              {/* use hover card here */}
              {socialProfiles.map((profile, i) => (
                <HoverCard key={i}>
                  <HoverCardTrigger asChild>
                    <span
                      className="w-4 h-4 rounded-full bg-primary inline-block cursor-pointer"
                      tabIndex={0}
                      aria-label={`Show ${profile.username} social preview`}
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="p-0 w-auto shadow-none border-none">
                    <SocialPreviewCard
                      image={profile.image}
                      username={profile.username}
                      link={profile.link}
                      platform={profile.platform}
                    />
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4 text-muted-foreground mb-16">
        <p className="text-base leading-relaxed">
          I build secure, intelligent, user-friendly apps and audit smart contracts. I like to create solutions that
          bridge the gap between complex technology and intuitive user experiences.
        </p>
        <p className="text-base leading-relaxed">
          Previously, I worked on various full-stack projects focusing on security and smart contract development.
        </p>
      </section>

      <section className=" mb-16">
        <p className="mb-6 text-base font-semibold">Knowledge Timeline</p>
        <Timeline>
          <TimelineItem status="done">
            <TimelineHeading className="text-sm">
              UI/UX Designer - <span className="text-muted-foreground">(2016 - 2018)</span>
              <Button
                size="sm"
                variant={activeSnapShot === "uiux" ? "default" : "secondary"}
                className={`rounded-full ml-2 transition-all duration-200 ${activeSnapShot === "uiux" ? "bg-primary text-primary-foreground" : ""}`}
                aria-pressed={activeSnapShot === "uiux"}
                onClick={() =>
                  setActiveSnapShot("uiux")
                }
              >
                <ArrowDown
                  size={20}
                  className={`transition-transform duration-200 ${activeSnapShot === "uiux" ? "rotate-180" : ""}`}
                />
                {activeSnapShot === "uiux" ? "Hide Snapshot" : "Skill Snapshot"}
              </Button>
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent className="mt-3 ml-2">
              Learned how to design for people, not just screens. Did lots of usability testing and built quick prototypes to improve how things flow.<br />
              <span className="block my-2" />
              <strong>2016-2018:</strong> Taught me to always think about the end user first.

              <div
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden bg-gray-200 rounded-md w-full",
                  activeSnapShot === "uiux"
                    ? "h-32 opacity-100 mt-3"
                    : "h-0 opacity-0 mt-0"
                )}
                aria-hidden={activeSnapShot !== "uiux"}
              >
                {/* Display more stuffs */}
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem status="done">
            <TimelineHeading side="right" className="text-sm">
              Full-Stack Engineer - <span className="text-muted-foreground">(2018 - 2021)</span>
              <Button
                size="sm"
                variant={activeSnapShot === "fullstack" ? "default" : "secondary"}
                className={`rounded-full ml-2 transition-all duration-200 ${activeSnapShot === "fullstack" ? "bg-primary text-primary-foreground" : ""}`}
                aria-pressed={activeSnapShot === "fullstack"}
                onClick={() =>
                  setActiveSnapShot("fullstack")
                }
              >
                <ArrowDown
                  size={20}
                  className={`transition-transform duration-200 ${activeSnapShot === "fullstack" ? "rotate-180" : ""}`}
                />
                {activeSnapShot === "fullstack" ? "Hide Snapshot" : "Skill Snapshot"}
              </Button>
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent className="mt-3 ml-2">
              Moved into building both front-end and back-end (React, Node, APIs, databases). Turned design ideas into real, working products.<br />
              <span className="block my-2" />
              <strong>2018-2021:</strong> Gave me the ability to ship end-to-end solutions.

              <div
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden bg-gray-200 rounded-md w-full",
                  activeSnapShot === "fullstack"
                    ? "h-32 opacity-100 mt-3"
                    : "h-0 opacity-0 mt-0"
                )}
                aria-hidden={activeSnapShot !== "fullstack"}
              >
                {/* Display more stuffs */}
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem status="done">
            <TimelineHeading className="text-sm">
              AI Engineer - <span className="text-muted-foreground">(2021 - 2023)</span>
              <Button
                size="sm"
                variant={activeSnapShot === "ai" ? "default" : "secondary"}
                className={`rounded-full ml-2 transition-all duration-200 ${activeSnapShot === "ai" ? "bg-primary text-primary-foreground" : ""}`}
                aria-pressed={activeSnapShot === "ai"}
                onClick={() =>
                  setActiveSnapShot("ai")
                }
              >
                <ArrowDown
                  size={20}
                  className={`transition-transform duration-200 ${activeSnapShot === "ai" ? "rotate-180" : ""}`}
                />
                {activeSnapShot === "ai" ? "Hide Snapshot" : "Skill Snapshot"}
              </Button>
            </TimelineHeading>
            <TimelineDot status="done" />
            <TimelineLine done />
            <TimelineContent className="mt-3 ml-2">
              Learned about machine learning and language models. Integrated AI into apps, worked with data pipelines and model deployment.<br />
              <span className="block my-2" />
              <strong>2021-2023:</strong> Added intelligence to the systems I was already building.

              <div
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden bg-gray-200 rounded-md w-full",
                  activeSnapShot === "ai"
                    ? "h-32 opacity-100 mt-3"
                    : "h-0 opacity-0 mt-0"
                )}
                aria-hidden={activeSnapShot !== "ai"}
              >
                {/* Display more stuffs */}
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeading className="text-sm" side="right">
              Smart Contract Security - <span className="text-muted-foreground">(2023 - Present)</span>
              <Button
                size="sm"
                variant={activeSnapShot === "security" ? "default" : "secondary"}
                className={`rounded-full ml-2 transition-all duration-200 ${activeSnapShot === "security" ? "bg-primary text-primary-foreground" : ""}`}
                aria-pressed={activeSnapShot === "security"}
                onClick={() =>
                  setActiveSnapShot("security")
                }
              >
                <ArrowDown
                  size={20}
                  className={`transition-transform duration-200 ${activeSnapShot === "security" ? "rotate-180" : ""}`}
                />
                {activeSnapShot === "security" ? "Hide Snapshot" : "Skill Snapshot"}
              </Button>
            </TimelineHeading>
            <TimelineDot />
            <TimelineLine />
            <TimelineContent className="mt-3 ml-2">
              Studying Solidity, auditing, and security tools. Practicing bug-finding and learning how to spot vulnerabilities.<br />
              <span className="block my-2" />
              <strong>2023-Present:</strong> Extends my mindset into trust, security, and reliability.

              <div
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden bg-gray-200 rounded-md w-full",
                  activeSnapShot === "security"
                    ? "h-32 opacity-100 mt-3"
                    : "h-0 opacity-0 mt-0"
                )}
                aria-hidden={activeSnapShot !== "security"}
              >
                {/* Display more stuffs */}
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>

      <section className="mb-16">
        <p className="mb-6 text-base font-semibold">Projects</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Button
              key={skill.key}
              variant={activeSkill === skill.key ? "default" : "secondary"}
              className="rounded-full"
              onClick={() => setActiveSkill(skill.key)}
              aria-pressed={activeSkill === skill.key}
            >
              {skill.label}
            </Button>
          ))}
        </div>

        {renderProjectPreview()}
      </section>

      {/* <section className="mb-16">
        <p className="mb-6 text-base font-semibold">Work Experience</p>

      </section> */}
    </div>
  )
}
