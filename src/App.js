import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout, { Wrapper } from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Portifolio from "./components/Portifolio";

function App() {
  return (
    <Router>
      <Layout>
        <NavBar />
        <Wrapper>
          <Home />
          <Sobre />
          <Portifolio />
        </Wrapper>
      </Layout>
      <GlobalStyles />
    </Router>
  );
}

export default App;
