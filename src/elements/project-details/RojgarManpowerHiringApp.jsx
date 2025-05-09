/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class RojgarManpowerHiringApp extends Component {
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
        <PageHelmet pageTitle="Simply Rojgar Manpower Hiring App" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--39"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Rojgar Manpower Hiring App
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
                    <h3 style={{ fontSize: "40px" }}>Rojgar Manpower Hiring App ( Android & IOS )</h3>
                    <p className="subtitle">
                      Mobile Application (Android) made by Aperra solutions for Simply Rojgar
                   
                    </p>
                    <p>
                      The Simply Rojgar Manpower Hiring App is India’s first
                      leading facility hiring platform, built to streamline the
                      recruitment process for businesses, enterprises, and
                      individuals across various industries. Designed with a
                      focus on speed, reliability, and ease of use, the app
                      allows employers to hire skilled, semi-skilled, and
                      unskilled manpower with just a few clicks. This robust
                      application instantly connects employers with verified job
                      seekers, catering to diverse roles in housekeeping,
                      property management, security, technical services,
                      delivery, hospitality, gardening, and more. With a
                      user-friendly interface, it supports quick job postings,
                      efficient applicant filtering, and seamless
                      communication—making it ideal for dynamic hiring needs in
                      the facility management sector. Built to simplify and
                      digitize the entire recruitment journey, the app empowers
                      businesses to fill workforce gaps faster and more reliably
                      through a verified and trusted ecosystem.
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Project Types</span>
                        <h4>Mobile Application (Android)</h4>
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
                              href="https://apps.apple.com/in/app/simply-rojgar-manpower-hiring/id6739197805"
                              target="_blank"
                              style={{ color: "red" }}
                            >
                              Android
                            </a>
                          </h4>
                          <h4 className="">
                            <a
                              href="https://apps.apple.com/in/app/e-auctionshub/id6742784366"
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
                        src="/assets/images/portfolio/rojgar-manpower-hiring-app/rojgar-manpower-hiring-app-1.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-hiring-app/rojgar-manpower-hiring-app-2.png"
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
                        src="/assets/images/portfolio/rojgar-manpower-hiring-app/rojgar-manpower-hiring-app-3.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                      <img
                        src="/assets/images/portfolio/rojgar-manpower-hiring-app/rojgar-manpower-hiring-app-4.png"
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
                        src="/assets/images/portfolio/rojgar-manpower-hiring-app/rojgar-manpower-hiring-app-5.png"
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
export default RojgarManpowerHiringApp;
