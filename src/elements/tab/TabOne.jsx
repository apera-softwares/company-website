import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FiCheck } from "react-icons/fi";

// tab2 = "Our mission",
// tab3 = "Friendly Support"
class TabsOne extends Component {
  render() {
    let tab1 = "Our Vision";
    const { tabStyle } = this.props;
    var namesItemOne = [
      "Web Development",
      "Mobile App Development",
      "Digital Marketing",
    ];

    return (
      <div>
        {/* Start Tabs Area */}
        <div className="tabs-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    {/* <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab> */}
                  </TabList>

                  <TabPanel>
                    <div className="single-tab-content">
                      <p>
                        To empower businesses and individuals to thrive in the
                        digital age. Over the years, we have honed our expertise
                        and evolved with the ever-changing landscape of Software
                        industry. Today, we stand as a trusted partner, offering
                        a range of cutting-edge services and solutions that
                        enable our clients to reach new heights.
                      </p>

                      <div className="mt--30">
                        <h4>Our Services</h4>
                        <ul className="list-style--1">
                          {namesItemOne.map((name, index) => {
                            return (
                              <li key={index}>
                                <FiCheck /> {name}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </TabPanel>

                  {/* <TabPanel>
                                       <div className="single-tab-content">
                                           <p>Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <p>Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <p>Nipa ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <p>Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <p>Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                           <p>Popy ipsum dolor sit amet consectetur adipisicing elit. Neque ab aliquid, atque enim, vero nobis quam beatae nesciunt aliquam molestias, optio hic laborum esse. Deserunt architecto officiis laudantium corporis voluptatem.</p>
                                       </div>
                                    </TabPanel> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsOne;
