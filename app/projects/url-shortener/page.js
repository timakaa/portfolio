import BackToProjectsButton from "@/components/ui/BackToProjectsButton";
import Image from "next/image";
import { projects } from "@/lib/projects";
import TechnologyLegend from "@/components/ui/TechnologyLegend";
import ProjectStory from "@/components/ui/ProjectStory";

const urlShortenerProject = projects.find(
  (project) => project.name.toLowerCase() === "url shortener",
);

const UrlShortener = () => {
  return (
    <div className='max-w-2xl md:max-w-5xl mx-auto px-6 md:px-0 my-20'>
      <BackToProjectsButton />
      <div className='relative flex mt-10'>
        <Image
          src='/url_shortener_iphone.png'
          width={200}
          height={200}
          alt='Url Shortener'
          className='h-full w-full object-cover rounded-r-none rounded-xl border-border border'
        />
        <Image
          src='/url_shortener_singup.png'
          width={200}
          height={200}
          alt='Url Shortener'
          className='h-full w-full object-cover border-l-0 border-border border'
        />
        <Image
          src='/url_shortener_verification.png'
          width={200}
          height={200}
          alt='Url Shortener'
          className='rounded-xl h-full w-full object-cover border-l-0 rounded-l-none border-border border'
        />
      </div>
      <div className='mt-10'>
        <TechnologyLegend {...urlShortenerProject} />
      </div>
      <ProjectStory project={urlShortenerProject} />
    </div>
  );
};

export default UrlShortener;
