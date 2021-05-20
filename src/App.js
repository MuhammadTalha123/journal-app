import React from "react";
import "./App.css";
import { Router, Switch, Route } from "react-router-dom";
import PrimarySearchAppBar from "./components/navbar/Navbar";
import About from "./components/about/About";
import AuthorGuidelines from "./components/authorGuidelines/AuthorGuidelines";
import SubmitAPaper from "./components/submit A Paper/SubmitAPaper";
import AimAndScope from "./components/aim&scope/AimAndScope";
import Contact from "./components/contact/Contact";
import history from "./components/history/history";

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/aimandscope" component={AimAndScope} />
            <Route exact path="/submitapaper" component={SubmitAPaper} />
            <Route
              exact
              path="/authorguidelines"
              component={AuthorGuidelines}
            />
            <Route exact path="/" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
