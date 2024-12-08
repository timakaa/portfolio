const ProjectTechnology = ({ name, icon }) => {
  return (
    <div className='flex shrink-0 items-center bg-background gap-2 text-sm border-border border rounded-md px-2 py-2'>
      {icon}
      <span>{name}</span>
    </div>
  );
};

export default ProjectTechnology;
