/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class RojgarManpowerApp extends Component {
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
        <PageHelmet pageTitle="Simply Rojgar Manpower App" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--38"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Simply Rojgar Manpower App
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
                    <h3 style={{ fontSize: "40px" }}>Simply Rojgar Manpower App ( Android & IOS )</h3>
                    <p className="subtitle">
                      Mobile Application ( Android & IOS) made by Aperra
                      solutions for Simply Rojgar
                
                    </p>
                    <p>
                      The Simply Rojgar Manpower App is a reliable and
                      user-friendly job search platform built specifically for
                      daily wage earners, skilled laborers, and facility-based
                      workers across India. Designed to connect job seekers with
                      100% verified employers, the app helps users find nearby
                      job opportunities in categories such as housekeeping,
                      delivery, construction, security, and more. The app is
                      completely free and supports job searches in local Indian
                      languages, making it highly accessible. Job seekers can
                      apply with just one click, without the need for resumes or
                      lengthy forms. Additional features include personalized
                      job alerts, real-time application tracking, and faster
                      hiring—all while ensuring safe and genuine job listings.
                      Built to simplify the employment process for blue-collar
                      and semi-skilled workers, Rojgar Manpower ensures a
                      seamless job-hunting experience across mobile devices.
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Project Types</span>
                        <h4>Mobile Application ( Android & IOS)</h4>
                      </div>
                      <div className="port-view">
                        <span>Get App</span>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                          }}
                        >
                          <h4>
                            <a
                              href="https://play.google.com/store/apps/details?id=com.aperasoftgmail.rojgaremployee&hl=en"
                              target="_blank"
                              style={{ color: "red" }}
                            >
                              Android
                            </a>
                          </h4>
                          <h4 className="">
                            <a
                              href="https://apps.apple.com/in/app/simply-rojgar-manpower-app/id6739622694"
                              target="_blank"
                              style={{ color: "red" }}
                            >
                              IOS
                            </a>
                          </h4>
                        </div>
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
                                  src="/assets/images/brand/react-native.svg"
                                  alt="React Native Logo Images"
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
                                  src="/assets/images/brand/graphql.svg"
                                  alt="GraphQL Logo Images"
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
                    <div
                      className="mb--30"
                      style={{
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-app/rojgar-manpower-app-1.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-app/rojgar-manpower-app-2.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                    </div>
                    <div
                      className="mb--30"
                      style={{
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-app/rojgar-manpower-app-3.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-app/rojgar-manpower-app-4.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                    </div>
                    <div
                      className="mb--30"
                      style={{
                        height: "100%",
                        width: "100%",
                        justifyContent: "space-between",
                        display: "flex",
                      }}
                    >
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-app/rojgar-manpower-app-5.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
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
export default RojgarManpowerApp;
