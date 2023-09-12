import React, { Component } from "react";
import PageHelmet from "../../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

class DigitalMarketingDetails extends Component {
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
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Digital Marketing" />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--22"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Digital Marketing</h2>
                  <p>
                    Boost your brand's online visibility and drive growth with
                    our digital marketing strategies. From SEO and social media
                    management to PPC campaigns, we tailor our services to
                    maximize your online success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src="/assets/images/service/digital-marketing.png"
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            In today's digitally connected world, the success of
                            any business hinges on its online presence and
                            marketing strategies. At Appera Solutions, we are
                            your trusted partner in the dynamic realm of digital
                            marketing, where we employ cutting-edge techniques
                            to enhance your brand's visibility and drive
                            tangible results.
                          </p>
                          <h4 className="title">
                            Our Digital Marketing Services :
                          </h4>
                          <ul className="liststyle">
                            <li>
                              <b>Search Engine Optimization (SEO) :</b> We help
                              your website rank higher in search engine results,
                              ensuring that your target audience finds you
                              easily. Our SEO experts employ both on-page and
                              off-page optimization techniques to increase
                              organic traffic and visibility.
                            </li>
                            <li>
                              <b>Social Media Management :</b> Leveraging the
                              power of social networks, we craft and execute
                              comprehensive social media strategies tailored to
                              your brand. We engage your audience, foster
                              relationships, and drive traffic, ultimately
                              increasing brand loyalty and conversions.
                            </li>
                            <li>
                              <b>Content Marketing :</b> Content is king, and we
                              create high-quality, relevant content that
                              resonates with your audience. From blog posts to
                              videos and infographics, our content marketing
                              strategy drives engagement and positions you as an
                              authority in your industry.
                            </li>
                            <li>
                              <b>Email Marketing :</b> We craft personalized and
                              engaging email campaigns to nurture leads, retain
                              customers, and drive conversions. Our email
                              marketing strategies ensure your messages reach
                              the right audience at the right time.
                            </li>
                            <li>
                              <b>Analytics and Data Insights :</b> We provide
                              in-depth analytics and data-driven insights to
                              measure the success of your digital marketing
                              efforts. This helps in refining strategies,
                              optimizing campaigns, and making informed
                              decisions for ongoing growth.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    {/* <div className="row sercice-details-content align-items-center">
                                            <div className="col-lg-6 col-12 order-2 order-lg-1">
                                                <div className="details mt_md--30 mt_sm--30">
                                                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing</p>
                                                    <p>hidden in the middle of text. All the Lorem Ipsum generators tend toitrrepeat predefined chunks. Necessary, making this the first true generator on the Internet.</p>
                                                    <h4 className="title">Our Working Process</h4>
                                                    <ul className="liststyle">
                                                        <li>Yet this above sewed flirted opened ouch</li>
                                                        <li>Goldfinch realistic sporadic ingenuous</li>
                                                        <li>Abominable this abidin far successfully then like piquan</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12 order-1 order-lg-2">
                                                <div className="thumb position-relative">
                                                    <img className="w-100" src="/assets/images/service/service-02.png" alt="Service Images"/>
                                                    <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='ZOoVOfieAF8' onClose={() => this.setState({isOpen: false})} />
                                                    <button className="video-popup" onClick={this.openModal}><span className="play-icon"></span></button>
                                                </div>
                                            </div>
                                        </div> */}
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
export default DigitalMarketingDetails;
