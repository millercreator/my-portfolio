"use client";

import { useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { cn } from "@/lib/utils";
import { mockData } from "@/app/data/mock-data";

export function KnowledgeTimeline() {
  const [activeSnapShot, setActiveSnapShot] = useState<null | string>("uiux");

  return (
    <section className="mb-16">
      <p className="mb-6 font-semibold text-3xl font-display italic">Knowledge Timeline</p>
      <Timeline>
        {mockData.timelineItems.map((item) => (
          <TimelineItem key={item.key} status={item.status === "current" ? undefined : item.status}>
            <TimelineHeading side="right" className="text-base">
              {item.title} - <span className="text-muted-foreground">({item.period})</span>
              <Button
                size="lg"
                variant={activeSnapShot === item.key ? "default" : "secondary"}
                className={`rounded-full ml-2 transition-all duration-200`}
                aria-pressed={activeSnapShot === item.key}
                onClick={() => setActiveSnapShot(activeSnapShot === item.key ? null : item.key)}
              >
                <ArrowDown
                  size={20}
                  className={`transition-transform duration-200 ${activeSnapShot === item.key ? "rotate-180" : ""}`}
                />
                {activeSnapShot === item.key ? "Hide Snapshot" : "Skill Snapshot"}
              </Button>
            </TimelineHeading>
            <TimelineDot status={item.status === "current" ? undefined : item.status} />
            <TimelineLine done={item.status === "done"} />
            <TimelineContent className="mt-3 ml-2">
              {item.description}
              <br />
              <span className="block my-2" />
              <strong>{item.period}:</strong> {item.summary}

              <div
                className={cn(
                  "transition-all duration-500 ease-in-out overflow-hidden bg-gray-200 rounded-md w-full",
                  activeSnapShot === item.key
                    ? "h-32 opacity-100 mt-3"
                    : "h-0 opacity-0 mt-0"
                )}
                aria-hidden={activeSnapShot !== item.key}
              >
                {/* Display more stuffs */}
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
}
