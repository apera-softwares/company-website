import React, { Component } from "react";

class Brand extends Component {
  render() {
    const { branstyle } = this.props;
    return (
      <React.Fragment>
        <ul className={`brand-list ${branstyle}`}>
          <li>
            <img src="/assets/images/brand/nodejs.png" alt="Node Logo Images" />
          </li>
          <li>
            <img
              src="/assets/images/brand/react.png"
              alt="React Logo Images"
            />
          </li>
          <li>
            <img
              src="/assets/images/brand/react-native.svg"
              alt="React Native Logo Images"
            />
          </li>
          <li>
            <img src="/assets/images/brand/nextjs.svg" alt="Next Logo Images" />
          </li>
          <li>
            <img
              src="/assets/images/brand/express.png"
              alt="Express Logo Images"
            />
          </li>
          <li>
            <img src="/assets/images/brand/nestjs.svg" alt="Nest Logo Images" />
          </li>
          <li>
            <img
              src="/assets/images/brand/graphql.svg"
              alt="GraphQL Logo Images"
            />
          </li>
          <li>
            <img src="/assets/images/brand/aws-2.svg" alt="AWS Logo Images" />
          </li>
          <li>
            <img src="/assets/images/brand/postgresql-type.svg" alt="Postgress Logo Images" />
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default Brand;
