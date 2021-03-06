import React from "react";
import { ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./universal/navbar/navbar_container";
import HomePage from "./home/home_page";
import SalesPageContainer from "./sale/sales_container";
import FeaturedPageContainer from "./featured/featured_container";
import UserProfileContainer from "./user_profile/user_profile_container";
import Redirect from "./universal/redirect/redirect";
import Modal from "./modal/modal";
import IndexPageContainer from "./index/index_container"
import './app.css';
import AboutPage from './about/about_page'

const App = () => (
  <div className="app-container">
    <Modal />
    <NavBarContainer />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/index" component={IndexPageContainer} />
      <Route path="/redirect" component={Redirect} />
      <Route exact path="/deals" component={SalesPageContainer} />
      <Route exact path="/surpriseme" component={FeaturedPageContainer} />
      
      <Route exact path="/about" component={AboutPage} />

      <ProtectedRoute exact path="/user/:user_id" component={UserProfileContainer} />
    </Switch>
  </div>
);

export default App;