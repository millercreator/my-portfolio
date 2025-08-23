"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UIUXProjectCarousel } from "@/components/uiux-project-carousel";
import { FullstackProjectsList } from "@/components/fullstack-projects-list";
import { mockData } from "@/app/data/mock-data";

export function ProjectsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

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
    <section className="mb-16">
      <p className="mb-6 font-semibold text-3xl font-display italic">Projects</p>
      <div className="flex flex-wrap gap-2">
        {mockData.skills.map((skill) => (
          <Button
            key={skill.key}
            variant={activeSkill === skill.key ? "default" : "secondary"}
            className="rounded-full"
            onClick={() => setActiveSkill(activeSkill === skill.key ? null : skill.key)}
            aria-pressed={activeSkill === skill.key}
          >
            {skill.label}
          </Button>
        ))}
      </div>

      {renderProjectPreview()}
    </section>
  );
}
