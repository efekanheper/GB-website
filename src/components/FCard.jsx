import React from "react";

const FCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2 transition-transform duration-500 hover:scale-105"
      />
      <div className=" p-4">
        <h3 className=" mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default FCard;
