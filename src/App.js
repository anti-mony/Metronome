import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Metronome from "./Metronome";
import About from "./About";

import "./App.css";
import github from "./static/images/github.png";

function App() {
  return (
    <Router>
      <div className="row">
        <Link to="/" title="Go to Metronome">
          <h1 className="title">Metronome</h1>
        </Link>
        <Link to="/about" title="Go to About Page">
          <button className="button">About</button>
        </Link>
        <a
          href="https://github.com/anti-mony/metronome"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to the Github Repository"
        >
          <img
            src={github}
            className="button"
            alt="Github Logo (Octocat Shape)"
          />
        </a>
      </div>
      <div className="content">
        <Switch>
          <Route exact path="/" component={Metronome} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
      <div className="row footer"> ALWAYS BE ON TIME </div>
    </Router>
  );
}

export default App;
