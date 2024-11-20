import ProjectsList from "./ui/ProjectsList";
import ProjectsTitle from "./ui/ProjectsTitle";

const features = [
  {
    name: "Bidauto",
    description: "Make your bids for cars.",
    href: "https://bidauto.online/",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "Coinmix",
    description: "A platform for investing and be rewarded.",
    href: "https://coinmix.space",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
  {
    name: "MyDiscipline",
    description: "A platform for tracking your habits.",
    href: "https://mydiscipline.app",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
  },
];

const Projects = () => {
  return (
    <div className='dot-background py-20' id='projects'>
      <div className='max-w-6xl mx-auto'>
        <ProjectsTitle />
        <ProjectsList features={features} />
      </div>
    </div>
  );
};

export default Projects;
