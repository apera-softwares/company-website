/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class PitchlaneWeb extends Component {
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
        <PageHelmet pageTitle="Pitchlane Web" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--13"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Pitchlane Web Application</h2>
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
                    <h3 style={{ fontSize: "40px" }}>Pitchlane Web Application</h3>
                    <p className="subtitle">
                      Web Application made by Aperra solutions for{" "}
                      <a
                        href="https://pitchlane.com/"
                        style={{ color: "red" }}
                        target="_blank"
                      >
                        Pitchlane.com
                      </a>
                    </p>
                    <p>
                      Introducing innovative online video pitch-making website,
                      designed to transform your ideas into compelling visual
                      narratives. Create engaging video pitches effortlessly,
                      with user-friendly tools and templates. Elevate your
                      presentations, sales pitches, and storytelling with our
                      platform, driven by cutting-edge video technology.
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
                            href="https://pitchlane.com/"
                            style={{ color: "red" }}
                            target="_blank"
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
                                  src="/assets/images/brand/nodejs.png"
                                  alt="Node Logo Images"
                                />
                              </li>
                              <li>
                                <img
                                  src="/assets/images/brand/vuejs.svg"
                                  alt="Vuejs Logo Images"
                                />
                              </li>
                              <li>
                                <img
                                  src="/assets/images/brand/express.png"
                                  alt="Express Logo Images"
                                />
                              </li>
                              <li>
                                <img
                                  src="/assets/images/brand/typescript.svg"
                                  alt="Typescript Logo Images"
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
                    <div className="thumb mb--30">
                      <img
                        src="/assets/images/portfolio/pitchlane-web/image4.png"
                        alt="Portfolio Images"
                      />
                    </div>

                    <div className="thumb mb--30">
                      <img
                        src="/assets/images/portfolio/pitchlane-web/image2.png"
                        alt="Portfolio Images"
                      />
                    </div>

                    <div className="thumb mb--30">
                      <img
                        src="/assets/images/portfolio/pitchlane-web/image3.png"
                        alt="Portfolio Images"
                      />
                    </div>
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
export default PitchlaneWeb;
