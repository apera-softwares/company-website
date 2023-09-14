import React, { Component } from "react";
import { FiMonitor, FiTablet, FiBarChart } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Web Development",
    description:
      "We specialize in creating captivating websites and dynamic web applications that combine stunning design with seamless functionality. Our team of developers ensures your online presence is not only visually appealing but also user-friendly and responsive.",
    url: "/web-devlopment",
  },
  {
    icon: <FiTablet />,
    title: "Mobile App Development",
    description:
      "Stay ahead in the mobile-first world with our expertly crafted iOS and Android apps. We design and develop mobile solutions that provide exceptional user experiences and meet the highest industry standards.",
    url: "/mobile-app-devlopment",
  },
  {
    icon: <FiBarChart />,
    title: "Digital Marketing",
    description:
      "Boost your brand's online visibility and drive growth with our digital marketing strategies. From SEO and social media management to PPC campaigns, we tailor our services to maximize your online success.",
    url: "/digital-marketing",
  },
];

class ServiceThree extends Component {
  render() {
    // const { column } = this.props;
    // const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="service-area creative-service-wrapper pt--90 pb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--30">
                  <h2>Our Service</h2>
                  <p>
                    At Aperra Solutions, we offer a comprehensive range of
                    services designed to meet all your digital needs. Our
                    expertise spans across core areas.
                  </p>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              {ServiceList.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a href={val.url}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServiceThree;
