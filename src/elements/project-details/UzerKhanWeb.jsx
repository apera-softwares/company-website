/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
const projectScreenShots = [
  {
    label: "Uzer Khan Portfolio",
    imgSrc: "/assets/images/portfolio/uzerkhan/uzerkhan-portfolio.png",
  },
  {
    label: "Uzer Khan Portfolio",
    imgSrc: "/assets/images/portfolio/uzerkhan/uzerkhan-home.png",
  },
  {
    label: "Uzer Khan Portfolio",
    imgSrc: "/assets/images/portfolio/uzerkhan/uzerkhan-about.png",
  },
  {
    label: "Uzer Khan Portfolio",
    imgSrc: "/assets/images/portfolio/uzerkhan/uzerkhan-contact.png",
  },
];
class UzerKhanWeb extends Component {
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
        <PageHelmet pageTitle="Uzer Khan Portfolio" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--40"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Uzer Khan Portfolio Web Application
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
                    <h3 style={{ fontSize: "40px" }}>
                      Uzer Khan Portfolio Web Application
                    </h3>
                    <p className="subtitle">
                      Web Application made by Aperra solutions for Uzer Khan
                    </p>
                    <p>
                      The User Khan Portfolio Web Application is a visually
                      captivating and highly responsive platform built for
                      UserKhan, a creative filmmaker known for producing diverse
                      and compelling visual content. Designed to showcase his
                      professional portfolio in a seamless and engaging way, the
                      platform allows visitors to explore a wide range of
                      filmmaking genres including: All Auctions Beauty Lifestyle
                      Humour Sports Automobile Music Videos Social Field Behind
                      the Scenes Built with performance and aesthetics in mind,
                      the platform features category-based filtering, enabling
                      users to easily navigate and view specific types of
                      content. Whether it's a cinematic beauty ad, a powerful
                      social message, or an intense sports sequence, the
                      platform brings each creation to life with intuitive UI,
                      smooth transitions, and optimized performance across all
                      devices. This portfolio web app not only enhances
                      UserKhan’s professional presence but also serves as a
                      powerful digital showcase to attract potential
                      collaborators, clients, and audiences.
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
                            href="http://209.182.232.11:3211/"
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
export default UzerKhanWeb;
