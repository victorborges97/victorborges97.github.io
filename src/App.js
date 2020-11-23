import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Stack from "./pages/Stack";
import Portfolio from "./pages/Portfolio";
import Rodape from "./components/Rodape/Rodape";

function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/stack" component={Stack} />
          <Route path="/portfolio" component={Portfolio} />
        </Switch>
        <Rodape />
      </Layout>
      <GlobalStyles />
    </Router>
  );
}

export default App;
