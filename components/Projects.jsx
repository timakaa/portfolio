import ProjectsList from "./ui/ProjectsList";
import ProjectsTitle from "./ui/ProjectsTitle";
import projects from "@/lib/projects";

const Projects = () => {
  return (
    <div className='dot-background py-28 md:py-20' id='projects'>
      <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0'>
        <ProjectsTitle />
        <ProjectsList features={projects} />
      </div>
    </div>
  );
};

export default Projects;
