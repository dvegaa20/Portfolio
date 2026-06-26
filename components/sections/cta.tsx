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
                    <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white">
                        Ready to take your digital presence to the next level?
                    </h2>
                    <p className="text-[#c1c2d3] max-w-md text-base md:text-lg font-sans font-extralight">
                        Reach out today and let&apos;s discuss how I can help you build robust and maintainable solutions.
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
                <img src="/decorations/leash.svg" alt="oval decoration" className="absolute -right-6 bottom-0 w-[120%] md:w-[70%] pointer-events-none opacity-60 translate-x-10 translate-y-10" />
            </Button>
        </section>
    )
}
