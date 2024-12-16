import BackToProjectsButton from "@/components/ui/BackToProjectsButton";
import TechnologyLegend from "@/components/ui/TechnologyLegend";
import { projects } from "@/lib/projects";
import Image from "next/image";

const moonProject = projects.find(
  (project) => project.name.toLowerCase() === "moon",
);

const Moon = () => {
  return (
    <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0 my-20'>
      <BackToProjectsButton />
      <div className='relative mt-10'>
        <Image
          src='/moonscreen.png'
          width={1000}
          height={1200}
          alt='Moon'
          className='rounded-xl w-full object-cover border-border border'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
      </div>
      <div className='mt-10'>
        <TechnologyLegend {...moonProject} iconClassName='rounded-xl' />
      </div>
      <div className='mt-10 max-w-xl md:max-w-4xl flex flex-col gap-y-14 mx-auto text-xl'>
        {moonProject.story.map((story, index) => (
          <div key={index}>
            <p>{story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Moon;
