import React from "react";
import Image from "next/image";

export function UploadProgressCard() {
    return (
        <section className="w-full flex items-center justify-center h-[80vh] sm:h-[400px]">
            <div className="w-full h-full flex flex-col items-center justify-center border rounded-lg bg-background">
                <span className="mb-6 inline-block animate-[updown_1.2s_ease-in-out_infinite] motion-reduce:animate-none">
                    <style>
                        {`
                        @keyframes updown {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                        }
                        `}
                    </style>
                    <Image
                        src="/icons/vctrly-chalky-icon-delivery-van.svg"
                        alt="Upload in progress"
                        width={80}
                        height={80}
                    />
                </span>
                <h2 className="text-base font-semibold mb-2 text-center">
                    Upload in progress
                </h2>
                <p className="text-muted-foreground text-center">
                    Please wait while i upload my projects..
                </p>
            </div>
        </section>
    );
}
