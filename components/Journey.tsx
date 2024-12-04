import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { journey } from "@/data/journey";

export function Journey() {
  return (
    <div className="py-20 w-full" id="journey">
      <Timeline data={journey} />
    </div>
  );
}
