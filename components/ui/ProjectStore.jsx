import React from "react";

const ProjectStore = ({ story }) => {
  return (
    <div className='mt-10 max-w-xl md:max-w-4xl flex flex-col gap-y-14 mx-auto text-xl'>
      {story.map((story, index) => (
        <div key={index}>
          <p>{story}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStore;
