"use client";

import React from "react";
import { FloatingDockDesktop } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconHome,
    IconTimeline,
    IconFolder,
} from "@tabler/icons-react";

export function FloatingNav() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Knowledge timeline",
            icon: (
                <IconTimeline className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#knowledge",
        },
        {
            title: "Projects",
            icon: (
                <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#projects",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="fixed bottom-10 left-0 w-full flex items-center justify-center z-50">
            <FloatingDockDesktop
                className="flex"
                items={links}
            />
        </div>
    );
}
