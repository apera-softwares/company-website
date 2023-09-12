import React, { Component } from "react";
import { Helmet } from "react-helmet";

class PageHelmet extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {this.props.pageTitle.length > 0
              ? this.props.pageTitle + " || Aperra Solutions"
              : "Aperra Solutions"}
          </title>
        </Helmet>
      </React.Fragment>
    );
  }
}

export default PageHelmet;
