import ProjectsPageTitle from "@/components/ProjectsPageTitle";
import ProjectsList from "@/components/ui/ProjectsList";
import { default as defaultProjects } from "@/lib/projects";

const Projects = () => {
  return (
    <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0 my-20'>
      <ProjectsPageTitle />
      <ProjectsList features={defaultProjects} />
    </div>
  );
};

export default Projects;
