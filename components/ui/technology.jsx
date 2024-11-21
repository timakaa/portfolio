"use client";

import { cn } from "@/lib/utils";
import ShineBorder from "./shine-border";

export default function Technology({ name, description, icon, color, link }) {
  return (
    <ShineBorder
      className='relative flex w-full flex-col items-center justify-center overflow-hidden bg-background'
      borderRadius={17.5}
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <figure
        onClick={() => {
          if (!link) return;
          window.open(link, "_blank");
        }}
        className={cn(
          "relative select-none w-full cursor-pointer overflow-hidden rounded-2xl p-4",
          // light styles
          "bg-white",
          // dark styles
          "transform-gpu dark:bg-transparent dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        )}
      >
        <div className='flex flex-col md:flex-row items-center gap-3'>
          <div
            className='flex shrink-0 size-14 p-2 items-center justify-center rounded-lg'
            style={{
              backgroundColor: `${color}`,
            }}
          >
            <span className='text-lg'>{icon}</span>
          </div>
          <div className='flex-col overflow-hidden'>
            <figcaption className='flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white '>
              <span className='text-sm sm:text-lg'>{name}</span>
            </figcaption>
            <p className='text-xs md:text-sm font-normal dark:text-white/60 hidden md:block'>
              {description}
            </p>
          </div>
        </div>
      </figure>
    </ShineBorder>
  );
}
