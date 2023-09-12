import React, { Component } from "react";
import { FiMonitor, FiTablet, FiBarChart } from "react-icons/fi";

const ServiceList = [
  {
    icon: <FiMonitor />,
    title: "Web Development",
    description:
      "We specialize in creating captivating websites and dynamic web applications that combine stunning design with seamless functionality. Our team of developers ensures your online presence is not only visually appealing but also user-friendly and responsive.",
  },
  {
    icon: <FiTablet />,
    title: "Mobile App Development",
    description:
      "Stay ahead in the mobile-first world with our expertly crafted iOS and Android apps. We design and develop mobile solutions that provide exceptional user experiences and meet the highest industry standards.",
  },
  {
    icon: <FiBarChart />,
    title: "Digital Marketing",
    description:
      "Boost your brand's online visibility and drive growth with our digital marketing strategies. From SEO and social media management to PPC campaigns, we tailor our services to maximize your online success.",
  },
];

class ServiceThree extends Component {
  render() {
    const { column } = this.props;
    const ServiceContent = ServiceList.slice(0, this.props.item);

    return (
      <React.Fragment>
        <div className="row">
          {ServiceContent.map((val, i) => (
            <div className={`${column}`} key={i}>
              <a href="/service-details">
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
      </React.Fragment>
    );
  }
}
export default ServiceThree;
