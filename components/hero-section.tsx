import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { SocialPreviewCard } from "@/components/social-preview-card";
import { mockData } from "@/app/data/mock-data";
import XIcon from "@/assets/icons/x.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";

const iconMap: Record<string, React.ReactNode> = {
  x: <XIcon />,
  linkedin: <LinkedInIcon />,
};

export function HeroSection() {
  return (
    <section className="my-16 flex flex-col md:flex-row w-full md:justify-between gap-10">
      <div>
        <h1 className="font-semibold text-4xl font-display italic mb-3">{mockData.hero.name}</h1>
        <div className="flex items-center gap-2">
          <span className="font-medium text-black text-base bg-yellow-200 rounded px-2">
            {mockData.hero.title}
          </span>
        </div>
      </div>
      <div>
        <div className="bg-muted rounded-xl p-4 grid grid-cols-2 gap-3 w-fit">
          {mockData.socialProfiles.map((profile, i) => (
            <div key={i}>
              {/* On mobile: show icon as a link. On md+ screens: show hover card */}
              <div className="block md:hidden w-6 h-6">
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${profile.username} profile`}
                  className="w-6 h-6 flex items-center justify-center"
                >
                  {iconMap[profile.platform] || null}
                </a>
              </div>
              <div className="hidden md:block w-6 h-6">
                <HoverCard>
                  <HoverCardTrigger asChild className="w-6 h-6 cursor-pointer">
                    {iconMap[profile.platform] || null}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
