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
        {tabs.map((tab) => (
          <button
            className={` tab-btn me-2  ${
              activeTab === tab ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div class="row ">
        {filteredProjects &&
          filteredProjects.length > 0 &&
          filteredProjects.map((project) => (
       
            <div class=" col-md-6 mb-4">
              <div class="project-card">
                <div class="project-image-container">
                  <img src={project?.image} alt="Web Project"  />
                  <div className="project-image-overlay"></div>
                </div>
                <p class="project-category">{project?.categoryLabel || ""}</p>
                <h2 class="project-title">{project?.title || ""}</h2>
                <Link to={project?.url} class="view-link">
                  View Details <BsArrowRight className=" view-link-icon  "/>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PortfolioAperraProjectsUpdated;
