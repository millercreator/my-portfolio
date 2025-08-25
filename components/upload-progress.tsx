import VctrlyChalkyIconDeliveryVan from "@/assets/icons/vctrly-chalky-icon-delivery-van.svg";

export function UploadProgressCard() {
    return (
        <section className="w-full flex items-center justify-center h-[400px]">
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
                    <VctrlyChalkyIconDeliveryVan
                        width={80}
                        height={80}
                        aria-label="Upload in progress"
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
