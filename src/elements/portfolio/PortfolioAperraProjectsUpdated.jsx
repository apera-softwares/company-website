import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectsList, tabs } from "./data";

import { BsArrowRight } from "react-icons/bs";

const PortfolioAperraProjectsUpdated = () => {
  const [activeTab, setActiveTab] = useState("Web");

  const filteredProjects = projectsList.filter(
    (project) => project.category === activeTab
  );
  return (
    <div className="">
      <div className=" tab-btn-container">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={` tab-btn me-2  ${
              activeTab === tab ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="row ">
        {filteredProjects &&
          filteredProjects.length > 0 &&
          filteredProjects.map((project, index) => (
            <div key={index} className=" col-md-6 mb-4">
              <div className="project-card">
                <div className="project-image-container">
                  <img src={project?.image} alt="Web Project" />
                  <div className="project-image-overlay"></div>
                </div>
                <p className="project-category">{project?.categoryLabel || ""}</p>
                <h2 className="project-title">{project?.title || ""}</h2>
                <Link to={project?.url} className="view-link">
                  View Details <BsArrowRight className=" view-link-icon  " />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PortfolioAperraProjectsUpdated;
