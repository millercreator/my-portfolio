import React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export type UIUXProjectPreviewDetails = {
  images: string[];         // list of image URLs
  title: string;            // project title
  role: string;             // your role in the project
  description: string;      // short project description
  link: string;             // project link (URL)
}

type UIUXProjectCardProps = {
  project: UIUXProjectPreviewDetails;
}

export function UIUXProjectCard({ project }: UIUXProjectCardProps) {
  return (
    <div
      className="flex flex-col md:flex-row gap-4 p-4 w-full md:gap-10"
    >
      {/* 
        On mobile: Info first, then carousel.
        On tablet and desktop: Carousel first, then info.
        This is done by using md:flex-row-reverse on the parent.
      */}
      <div className="flex-1 order-2 md:order-1 flex items-center justify-center min-w-0">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-md relative"
        >
          <CarouselContent>
            {project.images.map((img, idx) => (
              <CarouselItem key={idx} className="flex items-center justify-center">
                <div className="relative w-full h-[calc(100vw-2rem)] max-h-96 md:h-[564px] md:max-h-[564px] aspect-square md:aspect-auto">
                  <Image
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    fill
                    className="rounded-xl object-cover bg-muted"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority={idx === 0}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="flex-1 order-1 md:order-2 flex flex-col justify-between md:my-6 text-base">
        <div>
          <p className="font-semibold">{project.title}</p>
          <p className="text-muted-foreground">{project.role}</p>
        </div>
        <div className="mt-3 flex flex-col gap-2">
          <p className="md:text-muted-foreground">{project.description}</p>
          <Button
            asChild
            className="mt-3 rounded-full w-fit"
          >
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <ExternalLink size={18} aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}