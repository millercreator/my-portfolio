import React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type SocialPreviewCardProps = {
    image: string // url to social media image (logo or avatar)
    username: string
    link: string
    platform: string // e.g. "twitter", "github", "dribbble", "linkedin", etc.
}

// Simple map for brand colors
const platformColors: Record<string, string> = {
    twitter: "#1DA1F2",
    github: "#24292F",
    dribbble: "#EA4C89",
    linkedin: "#0077B5",
    medium: "#00ab6c",
    web3: "#F6851B",
}

export function SocialPreviewCard({ image, username, link, platform }: SocialPreviewCardProps) {
    // Pick color or fallback to a default
    const brandBg = platformColors[platform?.toLowerCase()] || "#6366F1" // fallback to indigo-500

    return (
        <div
            className="flex items-center gap-6 rounded-full p-2"
            style={{ backgroundColor: brandBg, color: "#fff" }}
        >
            <div className="flex items-center gap-2">
                <Image
                    src={image}
                    alt="Social"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border"
                />
                <span className="font-medium text-base truncate">@{username}</span>
            </div>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto"
                aria-label={`Open ${username} profile`}
            >
                <Button
                    type="button"
                    size="icon"
                    className="rounded-full bg-white text-black hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50 w-12 h-12 min-w-12 min-h-12 shadow"
                >
                    <ArrowUpRight className="w-5 h-5" />
                </Button>
            </Link>
        </div>
    )
}
