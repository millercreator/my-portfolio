import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { UIUXProjectCard, UIUXProjectPreviewDetails } from "./uiux-project-card"
import { ArrowLeft, ArrowRight } from "lucide-react"

// Mock data for UI/UX projects
const mockProjects: UIUXProjectPreviewDetails[] = [
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
]

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
          {mockProjects.map((project, index) => (
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
