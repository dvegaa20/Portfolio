import React from "react";
import { Spotlight } from "@/components/ui/spotlight";

export default function AmbientSpotlights() {
    const leftSpotlights = [
        { className: "top-[28%] -left-10 md:-left-32 h-[80vh] w-[50vw]", fill: "blue" },
        { className: "top-[34%] -left-20 md:-left-40 h-[60vh] w-[40vw]", fill: "white" },
        { className: "top-[72%] -left-10 md:-left-32 h-[130vh] w-[45vw]", fill: "purple" },
        { className: "bottom-20 -left-10 md:-left-32 h-[90vh] w-[75vw]", fill: "white" }
    ];

    const rightSpotlights = [
        { className: "top-[40%] -left-10 md:-left-32 h-[75vh] w-[55vw]", fill: "purple" },
        { className: "top-[88%] -left-10 md:-left-32 h-[100vh] w-[45vw]", fill: "blue" },
        { className: "top-[92%] -left-10 md:-left-32 h-[75vh] w-[50vw]", fill: "white" }
    ];

    return (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
            {/* Left side spotlights */}
            {leftSpotlights.map((spot, idx) => (
                <Spotlight
                    key={`left-${idx}`}
                    className={spot.className}
                    fill={spot.fill}
                />
            ))}

            {/* Right side spotlights - container is flipped horizontally */}
            <div className="absolute inset-0 w-full h-full scale-x-[-1]">
                {rightSpotlights.map((spot, idx) => (
                    <Spotlight
                        key={`right-${idx}`}
                        className={spot.className}
                        fill={spot.fill}
                    />
                ))}
            </div>
        </div>
    );
}
