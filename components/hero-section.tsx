import Image from "next/image";
import { Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { SocialPreviewCard } from "@/components/social-preview-card";
import { mockData } from "@/app/data/mock-data";

export function HeroSection() {
  return (
    <section className="my-16 flex flex-col md:flex-row w-full md:justify-between">
      <div>
        <h1 className="font-semibold text-4xl font-display italic mb-3">{mockData.hero.name}</h1>
        <div className="flex items-center gap-2 group">
          <Drawer>
            <DrawerTrigger asChild>
              <Button
                variant="link"
                className="text-base p-0 h-auto font-normal hover:cursor-pointer hover:no-underline bg-yellow-200 rounded px-2 transition-colors duration-200"
              >
                <span className="font-medium text-black">{mockData.hero.title}</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent className="min-h-[50vh] ">
              <div className="mx-auto w-full max-w-3xl h-full">
                <DrawerHeader>
                  <DrawerTitle className="mt-8 mb-4 text-xl text-start">Who is a Full-Stack Engineer?</DrawerTitle>
                  <DrawerDescription className="text-base text-start">
                    {mockData.hero.titleDescription}
                    {<span className="block my-6" />}
                    {mockData.hero.titleDescriptionExtended}
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
        <div className="bg-muted rounded-xl p-4 grid grid-cols-2 gap-3 w-fit">
          {mockData.socialProfiles.map((profile, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger asChild>
                <Image
                  src={profile.logo}
                  alt={`${profile.platform} profile image`}
                  width={24}
                  height={24}
                  className="cursor-pointer"
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
    </section>
  );
}
