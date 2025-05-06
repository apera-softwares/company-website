import React from "react";
import data from "./data";

const TeamTwo = (props) => {
  const itemSlice = data.slice(0, props.item);
  return (
    <div className="row">
      {itemSlice.map((value, i) => (
        <div className={`${props.column} mb-5`} key={i}>
          <div className="team-card position-relative text-center p-3 h-100">
            <div className="team-img-wrapper mx-auto mb-3">
              <img
                src={value.images}
                alt="Team Member"
                className="team-img"
              />
            </div>
            <div className="team-content">
              <h4 className="fw-bold mb-1 text-dark">{value.title}</h4>
              <p className="text-muted mb-1">{value.designation}</p>
              <p className="text-secondary small">{value.techStack}</p>
              {/* <ul className="d-flex justify-content-center list-unstyled gap-3 mt-3">
                {value.socialNetwork.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-dark fs-5 social-icon"
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamTwo;
