import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./components/projects/projects.component";
import About from "./components/about/about.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./App.style";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Main>
          <Route exact path="/portfolio-blog-styled/projects" component={Projects} />
          <Route exact path="/portfolio-blog-styled/" component={About} />
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
