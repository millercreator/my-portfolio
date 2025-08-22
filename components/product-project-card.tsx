import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductProjectCardProps = {
    logo: string;         // image url or static import
    title: string;
    description: string;
    onViewMore?: () => void;
};

// Simple color list for backgrounds
const bgColors = [
    "bg-blue-600",
    "bg-cyan-700",
    "bg-indigo-700",
    "bg-teal-700",
    "bg-blue-800",
    "bg-cyan-800",
    "bg-indigo-800",
    "bg-teal-800",
];

// Pick a color based on the title so it's stable per card
function getRandomBgColor(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = key.charCodeAt(i) + ((hash << 5) - hash);
    }
    const idx = Math.abs(hash) % bgColors.length;
    return bgColors[idx];
}

export function ProductProjectCard({
    logo,
    title,
    description,
    onViewMore,
}: ProductProjectCardProps) {
    const bgColor = getRandomBgColor(title);

    return (
        <div className="flex items-center gap-4 py-3 px-2 rounded-lg transition-colors group cursor-pointer">
            <div className={`relative size-14 flex rounded-lg ${bgColor}`}>
                {/* <Image
                    fill
                    src={logo}
                    alt={``}
                    className="object-contain"
                /> */}
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-base leading-tight">{title}</p>
                <p className="text-muted-foreground truncate">{description}</p>
            </div>
            <Button
                type="button"
                onClick={onViewMore}
                variant="secondary"
                className="ml-2 p-1 rounded-full transition-colors group-hover:bg-black/40"
                aria-label="View more"
            >
                <Plus size={20} />
            </Button>
        </div>
    );
}
