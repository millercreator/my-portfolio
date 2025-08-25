"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { UIUXProjectCarousel } from "@/components/uiux-project-carousel";
import { mockData } from "@/app/data/mock-data";
import { UploadProgressCard } from "@/components/upload-progress";
import { ProductProjectCard } from "./product-project-card";

export function ProjectsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>("fullstack");

  return (
    <section className="mb-16">
      <p className="mb-6 font-semibold text-3xl font-display italic" id="projects">Projects</p>
      <div className="flex flex-wrap gap-2">
        {mockData.skills.map((skill) => (
          <Button
            key={skill.key}
            variant={activeSkill === skill.key ? "default" : "secondary"}
            className="rounded-full"
            onClick={() => activeSkill !== skill.key && setActiveSkill(skill.key)}
            aria-pressed={activeSkill === skill.key}
          >
            {skill.label}
          </Button>
        ))}
      </div>

      <>
        {(activeSkill === null || activeSkill === "uiux" || activeSkill === "ai" || activeSkill === "security") && (
          <div className="py-6 border-b">
            {/* <UIUXProjectCarousel /> */}
            <UploadProgressCard />
          </div>
        )}
        {(activeSkill === null || activeSkill === "fullstack") && (
          <div className="py-6 border-b space-y-2">
            {mockData.fullstackProjects.map((project) => (
              <ProductProjectCard
                key={project.title}
                {...project}
              />
            ))}
          </div>
        )}
      </>
    </section>
  );
}
