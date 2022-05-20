import React from "react";
import "./css/ProjectsFilter.css";

const ProjectsFilter = () => {
  return (
    <div className="ProjectsFilter my-5">
      <div className="FilterContainer">
        <form className="FilterForm">
          <input
            type="text"
            className="x-input-control SearchFilterInput"
            placeholder="Search for a project"
            disabled
            title="Not yet programmed to search"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ProjectsFilter;
