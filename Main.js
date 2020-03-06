import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Duties from "./Duties";
import UserReviews from "./UserReviews";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>SOX Controls Internal Audit Automation	</h1>
          <ul className="header">
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/duties">Segregation Of Duties		</NavLink></li>
            <li><NavLink to="/userReviews">User Reviews </NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home} /> 
            <Route path="/duties" component={Duties} />            
            <Route path="/userReviews" component={UserReviews} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;