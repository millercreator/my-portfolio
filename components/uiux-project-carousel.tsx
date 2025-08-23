import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { UIUXProjectCard } from "./uiux-project-card"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { mockData } from "@/app/data/mock-data"

export function UIUXProjectCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null)

  // Move to previous slide
  const handlePrev = () => {
    if (api) api.scrollPrev()
  }

  // Move to next slide
  const handleNext = () => {
    if (api) api.scrollNext()
  }

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {mockData.uiuxProjects.map((project, index) => (
            <CarouselItem key={index} className="basis-full">
              <div>
                <UIUXProjectCard project={project} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center mt-4 gap-2">
        <button
          type="button"
          aria-label="Previous project"
          onClick={handlePrev}
          className="bg-muted rounded-full p-4 w-14 h-14 flex items-center justify-center transition-colors cursor-pointer hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          aria-label="Next project"
          onClick={handleNext}
          className="bg-muted rounded-full p-4 w-14 h-14 flex items-center justify-center transition-colors cursor-pointer hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
