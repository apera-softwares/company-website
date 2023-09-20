import React, { Component } from "react";
import { Link } from "react-router-dom";

const PortfolioListContent = [
  {
    image: "image-1",
    category: "Web-Devlopment",
    title: "ReportOne (Web)",
    url: "/details/report-one-web",
  },
  {
    image: "image-2",
    category: "Web-Devlopment",
    title: "FolderOne (Web)",
    url: "/details/folder-one-web",
  },
  {
    image: "image-3",
    category: "Mobile-App-Development",
    title: "ReportOne (IOS)",
    url: "/details/report-one-ios",
  },
  {
    image: "image-4",
    category: "Mobile-App-Development",
    title: "ReportOne (Android)",
    url: "/details/report-one-android",
  },
  {
    image: "image-5",
    category: "Web-Devlopment",
    title: "Pitchlane (Web)",
    url: "/details/pitchlane-web",
  },
];

class PortfolioAperraProjects extends Component {
  render() {
    const { column, styevariation } = this.props;
    const list = PortfolioListContent.slice(0, this.props.item);
    return (
      <React.Fragment>
        {list.map((value, index) => (
          <div className={`${column}`} key={index}>
            <div className={`portfolio ${styevariation}`}>
              <div className="thumbnail-inner">
                <div className={`thumbnail ${value.image}`}></div>
                <div className={`bg-blr-image ${value.image}`}></div>
              </div>
              <div className="content">
                <div className="inner">
                  <p>{value.category}</p>
                  <h4>
                    <a href={value.url}>{value.title}</a>
                  </h4>
                  <div className="portfolio-button">
                    <a className="rn-btn" href={value.url}>
                      View Details
                    </a>
                  </div>
                </div>
              </div>
              <Link className="link-overlay" to={value.url}></Link>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
export default PortfolioAperraProjects;
