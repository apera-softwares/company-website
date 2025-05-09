/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class EAuctionsHubApp extends Component {
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
        <PageHelmet pageTitle="EAuctionsHub App" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--36"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">EAuctionsHub App</h2>
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
                    <h3 style={{ fontSize: "40px" }}
                    >
                      EAuctionsHub App ( Android & IOS )
                    </h3>
                    <p className="subtitle">
                      Mobile Application made by Aperra solutions
                    </p>
                    <p>
                      The EAuctionsHub mobile application extends the
                      functionality of the web platform into a mobile-first
                      experience, enabling users to browse, search, and explore
                      verified bank auction listings for assets like flats,
                      houses, offices, shops, machinery, and bungalows—all from
                      their smartphones. The app supports powerful search
                      filters including city, bank, asset type, and price range
                      to help users find auctions tailored to their needs.
                      Premium users can access full auction details directly
                      within the app, while non-premium users see limited
                      (blurred) content to encourage upgrades. Built with a
                      focus on responsiveness, performance, and user experience,
                      the app provides a seamless, accessible way for users to
                      stay updated on new auction opportunities anytime,
                      anywhere.
                    </p>

                    <div className="portfolio-view-list d-flex flex-wrap">
                      <div className="port-view">
                        <span>Project Types</span>
                        <h4>Mobile Application ( Android & IOS )</h4>
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
                              href="https://play.google.com/store/apps/details?id=com.diliplovevanshi.exporouterexample&pli=1"
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
                        src="/assets/images/portfolio/eauctionshub-app/eauctionshub-app-1.png"
                        alt="Portfolio Images"
                        style={{ height: "70%", width: "45%" }}
                      />
                      <img
                        src="/assets/images/portfolio/eauctionshub-app/eauctionshub-app-2.png"
                        alt="Portfolio Images"
                        style={{ height: "70%", width: "45%" }}
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
                        src="/assets/images/portfolio/eauctionshub-app/eauctionshub-app-3.png"
                        alt="Portfolio Images"
                        style={{ height: "100%", width: "45%" }}
                      />
                      <img
                        src="/assets/images/portfolio/eauctionshub-app/eauctionshub-app-4.png"
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
                        src="/assets/images/portfolio/eauctionshub-app/eauctionshub-app-5.png"
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
export default EAuctionsHubApp;
