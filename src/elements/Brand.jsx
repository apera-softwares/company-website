import React, { Component } from "react";

class Brand extends Component{
    render(){
        const {branstyle } = this.props;
        return(
            <React.Fragment>
                <ul className={`brand-list ${branstyle}`}>
                    <li>
                        <img src="/assets/images/brand/nodejs.png" alt="Node Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/nestjs.svg" alt="Nest Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/express.png" alt="Express Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/nextjs.svg" alt="Next Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/reactjs.png" alt="React Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/vuejs.png" alt="Vue Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/jest.png" alt="Jest Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/typescript.svg" alt="Typescript Logo Images"/>
                    </li>
                    <li>
                        <img src="/assets/images/brand/postgress.png" alt="Postgress Logo Images"/>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}
export default Brand;