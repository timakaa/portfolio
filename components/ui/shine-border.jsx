"use client";
import { cn } from "@/lib/utils";
import { memo } from "react";

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */

const ShineBorder = memo(function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 8,
  color = "#000000",
  className,
  children,
}) {
  return (
    <div className='group'>
      <div
        style={{
          "--border-radius": `${borderRadius}px`,
        }}
        className={cn(
          "relative min-h-[60px] w-fit place-items-center rounded-[--border-radius] p-[2px]",
          className,
        )}
      >
        <div
          style={{
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${
              color instanceof Array ? color.join(",") : color
            },transparent,transparent)`,
          }}
          className={`pointer-events-none before:dark:[border:1px_solid_rgba(255,255,255,.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out before:bg-shine-size before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:![mask-composite:exclude] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] motion-safe:before:animate-shine`}
        ></div>
        {children}
      </div>
    </div>
  );
});

export default ShineBorder;
