"use client"

import React from "react";
import Image from "next/image";
import { ExternalLink, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerTrigger,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

type ProductProjectCardProps = {
    logo: string;
    title: string;
    subtitle?: string;
    description: string;
    details?: string;
    techstack?: string[];
    tags?: string[];
    image?: string;
    link?: string;
    previewAlt?: string;
    sourceCode?: string;
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
    subtitle,
    description,
    details,
    techstack,
    tags,
    image,
    link,
    sourceCode,
    previewAlt,
}: ProductProjectCardProps) {
    const bgColor = getRandomBgColor(title);

    return (
        <div className="flex items-center gap-4 py-3 px-2 rounded-lg transition-colors group">
            <div className={`size-14 flex rounded-lg ${bgColor} flex justify-center items-center`}>
                <Image
                    src={logo}
                    alt={title}
                    width={32}
                    height={32}
                />
            </div>
            <div className="flex-1 min-w-0">
                <p className="font-semibold text-base leading-tight">{title}</p>
                <p className="text-muted-foreground truncate">{description}</p>
            </div>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button
                        type="button"
                        variant="secondary"
                        className="ml-2 p-1 rounded-full transition-colors hover:bg-black/40"
                        aria-label="View more"
                    >
                        <Plus size={20} />
                    </Button>
                </DrawerTrigger>
                <DrawerContent className="min-h-[50vh] max-h-[90vh]">
                    <div className="mx-auto w-full max-w-3xl h-full">
                        <ScrollArea className="h-[90vh] md:h-auto px-1">
                            <DrawerHeader>
                                <div className="flex flex-col gap-6 mt-8 mb-4">
                                    {tags && tags.length > 0 && (
                                        <div className="flex gap-2 flex-wrap">
                                            {tags.map((tag, idx) => (
                                                <Badge key={tag + idx} variant="secondary" className="rounded-full px-4 py-2">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                    <DrawerTitle className="font-display text-3xl text-start">{title}</DrawerTitle>
                                    {subtitle && (
                                        <p className="text-xl text-muted-foreground text-start font-normal">{subtitle}</p>
                                    )}
                                    {techstack && techstack.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {techstack.map((tech, idx) => (
                                                <Badge key={tech + idx} variant="outline" className="rounded px-3 py-1">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                    <DrawerDescription className="text-base text-foreground text-start whitespace-pre-line">
                                        {details ? details : description}
                                    </DrawerDescription>
                                    <div className="flex gap-2 mt-2">
                                        {link && (
                                            <Button
                                                asChild
                                                className="w-fit rounded-full"
                                            >
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Visit Website
                                                    <ExternalLink size={18} />
                                                </a>
                                            </Button>
                                        )}
                                        {sourceCode && (
                                            <Button
                                                asChild
                                                variant="outline"
                                                className="w-fit rounded-full"
                                            >
                                                <a
                                                    href={sourceCode}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Source Code
                                                    <ExternalLink size={18} />
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                    {image && (
                                        <div className="rounded-xl overflow-hidden border border-gray-700 shadow-lg w-full aspect-[3/2]">
                                            <Image
                                                src={image}
                                                alt={previewAlt || title}
                                                className="w-full h-full object-cover"
                                                width={600}
                                                height={400}
                                                priority
                                            />
                                        </div>
                                    )}
                                </div>
                            </DrawerHeader>
                        </ScrollArea>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
}   
