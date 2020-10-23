import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Layout, { Wrapper } from "./components/Layout";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Portifolio from "./components/Portifolio";

function App() {
  return (
    <>
      <Layout>
        <NavBar />
        <Wrapper>
          <Home />
          <Sobre />
          <Portifolio />
        </Wrapper>
      </Layout>
      <GlobalStyles />
    </>
  );
}

export default App;
