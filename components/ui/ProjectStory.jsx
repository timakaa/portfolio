"use client";
import { StickyScroll } from "./sticky-scroll";
import ReactMarkdown from "react-markdown";

const ProjectStory = ({ project }) => {
  return (
    <div className='mt-10 max-w-xl md:max-w-5xl flex flex-col gap-y-14 mx-auto text-xl'>
      {project?.story?.map((story, index) => (
        <div key={index} className='space-y-4'>
          <ReactMarkdown
            components={{
              ul: ({ children }) => <ul className='space-y-2'>{children}</ul>,
              li: ({ children }) => <li className='text-base'>• {children}</li>,
            }}
            key={index}
          >
            {story}
          </ReactMarkdown>
        </div>
      ))}
      {project?.scrollStory && <StickyScroll content={project.scrollStory} />}
    </div>
  );
};

export default ProjectStory;
