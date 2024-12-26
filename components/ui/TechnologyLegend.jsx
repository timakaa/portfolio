import React from "react";
import { Button } from "./button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";
import Lock from "./Lock";
import ProjectTechnology from "../ProjectTechnology";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";

const TechnologyLegend = ({
  name,
  icon,
  description,
  projectLink,
  technologies,
  iconClassName,
  github,
}) => {
  return (
    <div className='px-6 md:px-20 z-20 bg-background py-8 rounded-xl border border-border max-w-xl md:max-w-5xl mx-auto'>
      <div className='flex items-center md:gap-4 gap-2'>
        <div className='md:size-14 size-8 relative'>
          {React.cloneElement(icon, {
            className: cn("w-full h-full", iconClassName),
          })}
        </div>
        <span className='mdLtext-4xl text-xl font-bold'>{name}</span>
      </div>
      <div className='flex flex-wrap gap-4 mt-4'>
        {technologies.map((technology) => (
          <ProjectTechnology key={technology.name} {...technology} />
        ))}
      </div>
      <div className='mt-6 text-neutral-400 text-xl'>{description}</div>
      <div className='mt-6 flex items-center gap-x-2'>
        {projectLink ? (
          <a href={projectLink} target='_blank'>
            <Button disabled={!projectLink} variant='shine' asChild>
              <div>Open</div>
            </Button>
          </a>
        ) : (
          <span className='relative inline'>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <div className='z-20 inline-block'>
                    <Button variant='shine'>
                      <div className='text-neutral-500'>
                        <Lock />
                      </div>
                    </Button>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This project is not live</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        )}
        {github && (
          <a href={github} target='_blank'>
            <Button variant='shine' asChild>
              <div className='text-neutral-500'>
                <Github />
              </div>
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default TechnologyLegend;
