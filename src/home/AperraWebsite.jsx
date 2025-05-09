import React, { Component, Fragment } from "react";
import Slider from "react-slick";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { slideSlick } from "../page-demo/script";
import ServiceList from "../elements/service/ServiceList";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import PortfolioAperraProjects from "../elements/portfolio/PortfolioAperraProjects";
import Brand from "../elements/Brand";
import CallAction from "../elements/callaction/CallAction";
import TabOne from "../elements/tab/TabOne";
import Helmet from "../component/common/Helmet";
import TeamTwo from "../../src/blocks/team/TeamTwo";
import PortfolioAperraProjectsUpdated from "../elements/portfolio/PortfolioAperraProjectsUpdated";

const SlideList = [
  {
    textPosition: "text-center",
    bgImage: "bg_image--21",
    category: "",
    title: "Web Devlopment",
    description:
      "Experience the art of web development with Aperra Solutions. Our dedicated team of designers and developers crafts visually appealing, user-friendly websites and powerful web applications that cater to your unique needs.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--23",
    category: "",
    title: "Mobile App.",
    description:
      "Empower your mobile presence with Appera Solutions. We excel in creating cutting-edge mobile apps for iOS and Android, delivering user-friendly experiences and top-notch functionality. Join us in shaping the mobile future today!",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-center",
    bgImage: "bg_image--22",
    category: "",
    title: "Digital Marketing.",
    description:
      "Elevate your online visibility with Appera Solutions. We are experts in digital marketing, specializing in SEO, social media, and PPC strategies to boost your brand's online presence and drive growth. Join us in shaping your digital success story today!",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
];

class AperraWebsite extends Component {
  render() {
    let title = "About Us",
      description =
        "At Appera Solutions, we are more than just a business; we're a team of passionate individuals dedicated to making a difference in the digital world. With a shared commitment to excellence, innovation, and customer satisfaction,Our journey began with a simple yet powerful vision: to empower businesses and individuals to thrive in the digital age.";
    return (
      <Fragment>
        <Helmet pageTitle="" />

        {/* Start Header Area  */}
        <Header logo="light" color="color-white" />
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className="slider-wrapper color-white">
          <div className="slider-activation slider-digital-agency">
            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 fullscreen d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                  data-black-overlay="2"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ""}
                          {value.title ? (
                            <h1 className="title">{value.title}</h1>
                          ) : (
                            ""
                          )}
                          {value.description ? (
                            <p className="description">{value.description}</p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <a
                                className="rn-button-style--2 btn-primary-color"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area  */}
        <div className="service-area pt--120 pb--50 bg_color--1" id="service">
          <ServiceList
            item="3"
            column="col-lg-4 col-md-6 col-sm-6 col-12 text-center"
          />
        </div>
        {/* End Service Area  */}

        {/* Start Portfolio Area */}
        <div
          className="portfolio-area ptb--120 bg_image bg_image--3"
          id="portfolio"
        >
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--15">
                    <h2 className="title">Our Projects</h2>
                    <p>
                      Revolutionize your digital landscape with Appera
                      Solutions. We specialize in crafting innovative solutions
                      for web and mobile, delivering exceptional user
                      experiences and unmatched functionality. Be part of the
                      digital evolution with us!
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="row">
                <PortfolioAperraProjects
                  styevariation="text-center"
                  column="col-lg-4"
                  item="6"
                />
              </div> */}
              <PortfolioAperraProjectsUpdated />
      
            </div>
          </div>
        </div>
        {/* End Portfolio Area */}

        {/* Start About Area */}
        <div className="about-area ptb--120  bg_color--1" id="about">
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--35">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src="/assets/images/about/about.png"
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                      <TabOne tabStyle="tab-style--1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Team Area  */}
        <div className="rn-team-wrapper ptb--120 bg_color--5" id="team">
          <div className="rn-team-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center mb--30">
                    <h2>Our Skilled Team</h2>
                    <p className="">
                      Our dynamic team at Aperra Solutions is a blend of diverse
                      talents, each passionate about driving digital innovation.
                      With experts in various domains, we collaborate seamlessly
                      to craft exceptional solutions. Join hands with us to turn
                      your ideas into reality."
                    </p>
                  </div>
                </div>
              </div>
              <TeamTwo column="col-lg-3" teamStyle="" item="7" />
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Brand Area */}
        <div className="rn-brand-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30">
                  <h2 className="title">Our Technology Stack</h2>
                  <p>
                    Cutting-edge tools and frameworks power our solutions, from
                    front-end to back-end. With expertise in JavaScript, we
                    ensure innovation, reliability, and scalability in every
                    project. Join us to harness this tech prowess for your
                    digital success.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 mt--40">
                <Brand branstyle="branstyle--2" />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start call To Action  */}
        <CallAction />
        {/* End call To Action  */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}

export default AperraWebsite;
