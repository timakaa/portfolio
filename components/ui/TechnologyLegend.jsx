import Link from "next/link";
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

const TechnologyLegend = ({
  name,
  icon,
  description,
  projectLink,
  technologies,
}) => {
  return (
    <div className='px-6 md:px-20 z-20 bg-background py-8 rounded-xl border border-border max-w-xl md:max-w-4xl mx-auto'>
      <div className='flex items-center md:gap-4 gap-2'>
        <div className='md:size-14 size-8 relative'>
          {React.cloneElement(icon, { className: "w-full h-full" })}
        </div>
        <span className='mdLtext-4xl text-xl font-bold'>{name}</span>
      </div>
      <div className='flex flex-wrap gap-4 mt-4'>
        {technologies.map((technology) => (
          <ProjectTechnology key={technology.name} {...technology} />
        ))}
      </div>
      <div className='mt-6 text-neutral-400 text-xl'>{description}</div>
      {projectLink ? (
        <a href={projectLink} target='_blank' className='mt-6 block'>
          <Button disabled={!projectLink} variant='shine' asChild>
            <div>Open</div>
          </Button>
        </a>
      ) : (
        <span className='relative inline'>
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <div className='z-20 inline-block mt-6'>
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
    </div>
  );
};

export default TechnologyLegend;