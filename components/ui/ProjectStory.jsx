import React from "react";
import Image from "next/image";
import { StickyScroll } from "./sticky-scroll";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className='h-full w-full bg-green-500 flex items-center justify-center text-white'>
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className='h-full w-full bg-blue-500 flex items-center justify-center text-white'>
        Real time changes
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='h-full w-full bg-pink-500 flex items-center justify-center text-white'>
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className='h-full w-full bg-red-500 flex items-center justify-center text-white'>
        Running out of content
      </div>
    ),
  },
];

const ProjectStory = ({ project }) => {
  return (
    <div className='mt-10 max-w-xl md:max-w-5xl flex flex-col gap-y-14 mx-auto text-xl'>
      {project.story.map((story, index) => (
        <div key={index}>
          <p>{story}</p>
        </div>
      ))}
      <StickyScroll content={content} />
    </div>
  );
};

export default ProjectStory;
