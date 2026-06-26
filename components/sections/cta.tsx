import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import MagicButton from "@/components/ui/magic-button";
import { FaPhoneAlt } from "react-icons/fa"
import Image from "next/image";

import { Button } from "@/components/ui/moving-borders";

export function Cta() {
    return (
        <section className="w-full relative">
            {/* CTA Container with grid-like styling */}
            <Button
                as="div"
                duration={3000}
                borderRadius="1.5rem"
                containerClassName="w-full shadow-xl"
                className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 overflow-hidden border border-white/[0.15] w-full min-h-[400px]"
                style={{
                    background: "rgb(4,7,29)",
                    backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
            >
                {/* Background Grid Image */}
                <div className="absolute top-0 left-0 w-full md:w-1/2 h-full z-0 pointer-events-none opacity-50">
                    <img
                        src="/icons/grid.svg"
                        alt="grid background"
                        className="object-cover object-left w-full h-full"
                    />
                </div>

                {/* Text Content */}
                <div className="flex-1 flex flex-col items-start justify-center relative z-20 space-y-6 max-w-lg pb-48 md:pb-0">
                    <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white">
                        Call to Action
                    </h2>
                    <p className="text-[#c1c2d3] max-w-md text-base md:text-lg font-sans font-extralight">
                        Get access to our collection of pre-built blocks and components today.
                    </p>

                    <div className="pt-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <div className="inline-block cursor-pointer">
                                    <MagicButton
                                        title="Contact Me"
                                        icon={<FaPhoneAlt />}
                                        position="left"
                                    />
                                </div>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Contact Me</DialogTitle>
                                    <DialogDescription>
                                        Fill in the form below to contact me.
                                    </DialogDescription>
                                </DialogHeader>
                                {/* Add form later */}
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

                {/* Image Containers - End Bottom */}

                {/* Under Container - 60% Width, 80% Height */}
                <div className="absolute right-0 bottom-0 w-[90%] md:w-[60%] h-[60%] md:h-[80%] bg-white/5 dark:bg-black-200 border-l border-t border-white/[0.1] rounded-tl-3xl flex items-center justify-center p-4 shadow-2xl z-0 rounded-br-3xl md:rounded-br-none">
                    <div className="w-full h-full border border-dashed border-white/20 rounded-2xl flex items-center justify-center bg-black/20">
                        <span className="text-white/30 text-sm">Background Layer</span>
                    </div>
                </div>

                {/* Upper Container - 55% Width, 80% Height */}
                <div className="absolute right-0 bottom-0 w-[85%] md:w-[55%] h-[55%] md:h-[80%] bg-[#04071d] border-l border-t border-white/[0.2] rounded-tl-3xl flex items-center justify-center p-4 md:p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-10 rounded-br-3xl md:rounded-br-none">
                    <div className="w-full h-full border-2 border-dashed border-white/30 rounded-2xl flex flex-col items-center justify-center bg-black/40">
                        <span className="text-white/70 text-sm font-medium">Upper Image</span>
                        <span className="text-white/40 text-xs mt-2">Will be replaced</span>
                    </div>
                </div>
            </Button>
        </section>
    )
}
