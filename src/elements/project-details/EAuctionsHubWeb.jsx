/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
const projectScreenShots = [
  {
    label: "EAuctionsHub Home Page",
    imgSrc: "/assets/images/portfolio/eauctionshub-web/eauctionshub-home-1.png",
  },
  {
    label: "EAuctionsHub Home Page",
    imgSrc: "/assets/images/portfolio/eauctionshub-web/eauctionshub-home-2.png",
  },
  {
    label: "EAuctionsHub Search Page",
    imgSrc: "/assets/images/portfolio/eauctionshub-web/eauctionshub-search.png",
  },
  {
    label: "EAuctionsHub Auction Details Page",
    imgSrc:
      "/assets/images/portfolio/eauctionshub-web/eauctionshub-auction-detail-1.png",
  },
  {
    label: "EAuctionsHub Auction Details Page",
    imgSrc:
      "/assets/images/portfolio/eauctionshub-web/eauctionshub-auction-detail-2.png",
  },
];
class EAuctionsHubWeb extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        <PageHelmet pageTitle="EAuctionsHub Web Application" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--37"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    EAuctionsHub Web Application
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Portfolio Details */}
        <div className="rn-portfolio-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-details">
                  <div className="inner">
                    <h3 style={{ fontSize: "40px" }}>EAuctionsHub Web Application</h3>
                    <p className="subtitle">
                      Web Application made by Aperra solutions
                    </p>
                    <p>
                      EAuctionsHub is a web application designed to help users
                      discover and explore verified bank auctions for a wide
                      range of assets including flats, houses, machinery,
                      offices, shops, and bungalows. The platform provides
                      advanced search functionality with filters such as city,
                      asset type, bank, and budget range to help users find
                      relevant auction listings quickly and easily. A key
                      feature of the platform is its premium access model, which
                      allows subscribed users to unlock full auction details ,
                      while basic users see limited (blurred) content. This
                      encourages engagement while maintaining exclusivity for
                      premium members. The project focuses on usability,
                      performance, and scalability, ensuring a seamless user
                      experience across devices.
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Project Types</span>
                        <h4>Web Application</h4>
                      </div>

                      <div className="port-view">
                        <span>View</span>
                        <h4>
                          <a
                            href="https://eauctionshub.com/"
                            target="_blank"
                            style={{ color: "red" }}
                          >
                            Visit Website
                          </a>
                        </h4>
                      </div>
                    </div>

                    <div className="rn-brand-area ptb--120 bg_color--1">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="section-title text-center service-style--3 mb--30">
                              <h2 className="title">Technology Stack</h2>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12 mt--40">
                            <ul className={`brand-list branstyle--3`}>
                              <li>
                                <img
                                  src="/assets/images/brand/nextjs.svg"
                                  alt="Next Logo Images"
                                />
                              </li>
                              <li>
                                <img
                                  src="/assets/images/brand/nodejs.png"
                                  alt="Node Logo Images"
                                />
                              </li>
                              <li>
                                <img
                                  src="/assets/images/brand/nestjs.svg"
                                  alt="Node Logo Images"
                                />
                              </li>

                              <li>
                                <img
                                  src="/assets/images/brand/postgresql-type.svg"
                                  alt="Postgress Logo Images"
                                />
                              </li>
                              <li>
                                <img
                                  src="/assets/images/brand/typescript.svg"
                                  alt="Postgress Logo Images"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-share-link mt--20 pb--70 pb_sm--40"></div>
                  </div>
                  <div className="portfolio-thumb-inner">
                    {projectScreenShots.map((item, index) => (
                      <div key={index} className="thumb mb--30">
                        <img src={item?.imgSrc} alt={item?.label} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Details */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}
export default EAuctionsHubWeb;
