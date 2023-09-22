import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import PageScrollTop from "./component/PageScrollTop";
import AperraWebsite from "./home/AperraWebsite";
import About from "./elements/About";
import Contact from "./elements/Contact";
import error404 from "./elements/error404";
import WebDevlopmentDetails from "./elements/services/web-devlopment";
import MobileAppDevlopmentDetails from "./elements/services/mobile-app-devlopment";
import DigitalMarketingDetails from "./elements/services/digital-marketing";
import ReportOneWeb from "./elements/project-details/ReportOneWeb"
import ReportOneIOS from "./elements/project-details/ReportOneIOS";
import ReportOneAndroid from "./elements/project-details/ReportOneAndroid";
import FolderOneWeb from "./elements/project-details/FolderOneWeb";
import PitchlaneWeb from "./elements/project-details/PitchlaneWeb";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={""} element={{}}>
        <PageScrollTop>
          <Switch>
            {/*Apera website routes */}
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/`}
              component={AperraWebsite}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/web-devlopment`}
              component={WebDevlopmentDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/mobile-app-devlopment`}
              component={MobileAppDevlopmentDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/digital-marketing`}
              component={DigitalMarketingDetails}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/details/report-one-web`}
              component={ReportOneWeb}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/details/report-one-ios`}
              component={ReportOneIOS}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/details/report-one-android`}
              component={ReportOneAndroid}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/details/folder-one-web`}
              component={FolderOneWeb}
            />
             <Route
              exact
              path={`${process.env.PUBLIC_URL}/details/pitchlane-web`}
              component={PitchlaneWeb}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/contact`}
              component={Contact}
            />
            <Route
              exact
              path={`${process.env.PUBLIC_URL}/about`}
              component={About}
            />
            <Route
              path={`${process.env.PUBLIC_URL}/404`}
              component={error404}
            />
            <Route component={error404} />
          </Switch>
        </PageScrollTop>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
