import Image from "next/image";
import BackToProjectsButton from "@/components/ui/BackToProjectsButton";
import TechnologyLegend from "@/components/ui/TechnologyLegend";
import { projects } from "@/lib/projects";
import ProjectStore from "@/components/ui/ProjectStore";

const myDisciplineProject = projects.find(
  (project) => project.name.toLowerCase() === "mydiscipline",
);

const MyDiscipline = () => {
  return (
    <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0 my-20'>
      <BackToProjectsButton />
      <div className='relative mt-10'>
        <Image
          src='/mydisciplinescreen.png'
          width={1000}
          height={1000}
          alt='MyDiscipline'
          className='rounded-xl w-full object-cover border-border border'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-black/20'></div>
      </div>
      <div className='mt-10'>
        <TechnologyLegend {...myDisciplineProject} />
      </div>
      <ProjectStore story={myDisciplineProject.story} />
    </div>
  );
};

export default MyDiscipline;
