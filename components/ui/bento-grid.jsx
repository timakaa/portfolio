import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Lock from "./Lock";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  technologies,
  available = true,
}) => (
  <div
    key={name}
    className={cn(
      "group border border-border relative col-span-3 z-0 h-full flex flex-col justify-between overflow-hidden rounded-xl before:absolute before:inset-x-0 before:bottom-0 before:h-96 before:bg-gradient-to-t before:from-black before:via-[rgba(0,0,0,0.7)] before:to-[rgba(0,0,0,0.3)] before:z-[1] before:translate-y-1",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {!available && (
      <div className='absolute top-6 left-6 z-10'>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <div className='z-20 text-neutral-500'>
                <Lock />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>This project is not live</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    )}
    <div>{background}</div>
    <div className='pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10 z-[1]' />
    <a href={href} target='_blank' className='absolute inset-0 z-[5]'></a>
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 z-[10]",
      )}
    >
      <Button
        variant='ghost'
        onClick={() => href && window.open(href, "_blank")}
        size='sm'
        className='pointer-events-auto relative z-[15]'
      >
        <>
          {cta}
          <ArrowRightIcon className='ml-2 h-4 w-4' />
        </>
      </Button>
    </div>
    <div className='pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10'>
      {Icon && (
        <Icon className='h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75' />
      )}
      <h3 className='text-xl font-semibold text-neutral-700 dark:text-neutral-300'>
        {name}
      </h3>
      <div className='flex gap-2 flex-wrap my-1'>
        {technologies &&
          technologies.map((technology) => (
            <div
              key={technology.name}
              className='flex shrink-0 items-center bg-background gap-2 text-sm border-border border rounded-md px-2 py-2'
            >
              {technology.icon}
              <span>{technology.name}</span>
            </div>
          ))}
      </div>
      <p className='max-w-lg text-neutral-400'>{description}</p>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
