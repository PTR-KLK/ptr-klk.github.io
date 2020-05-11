import React from "react";
import Navbar from "./components/navbar/navbar.component";
import Projects from "./pages/projects.page";
import About from "./pages/about.page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, GlobalStyle } from "./App.style";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Main>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/" component={About} />
        </Main>
      </Switch>
    </Router>
  );
}

export default App;
