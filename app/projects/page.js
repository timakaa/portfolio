import ProjectsPageTitle from "@/components/ProjectsPageTitle";
import ProjectsList from "@/components/ui/ProjectsList";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <div className='grid-background relative'>
      <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0 my-20'>
        <ProjectsPageTitle />
        <ProjectsList features={projects} />
      </div>
    </div>
  );
};

export default Projects;
