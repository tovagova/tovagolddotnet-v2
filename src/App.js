import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./stylesheet.css";
import Home from "./component/home";
import CaseStudies from "./component/casestudies";
import Contact from "./component/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <section className="topbar">
          <section className="logo">
            <h1>Tova Gold</h1>
          </section>
          <section className="navbar">
            <nav>
              <ul>
                <li>
                  <p className="hover-underline-anim">
                    <a>
                      <Link to="/">HOME</Link>
                    </a>
                  </p>
                </li>
                <li>
                  <p className="hover-underline-anim">
                    <a>
                      <Link to="/casestudies">CASE STUDIES</Link>
                    </a>
                  </p>
                </li>
              </ul>
            </nav>
          </section>
        </section>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/casestudies" element={<CaseStudies />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </Router>
    );
  }
}

export default App;

/*
class App extends Component {
  render() {
    return (
      <Router>
        <section className="topbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </section>
      </Router>
    );
  }
}
*/
