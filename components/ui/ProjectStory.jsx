import React from "react";
import { StickyScroll } from "./sticky-scroll";

const ProjectStory = ({ project }) => {
  return (
    <div className='mt-10 max-w-xl md:max-w-5xl flex flex-col gap-y-14 mx-auto text-xl'>
      {project.story.map((story, index) => (
        <div key={index}>
          <p>{story}</p>
        </div>
      ))}
      {project.scrollStory && <StickyScroll content={project.scrollStory} />}
    </div>
  );
};

export default ProjectStory;
