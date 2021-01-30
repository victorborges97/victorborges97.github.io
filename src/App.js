import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Stack from "./pages/Stack";
import Portfolio from "./pages/Portfolio";
import Admin from "./pages/Admin";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/stack" component={Stack} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Layout>
      <GlobalStyles />
    </Router>
  );
}

export default App;
