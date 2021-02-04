import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import Admin from "./pages/Admin";
import pages from "./pages";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={pages} />
          <Route path="/admin" component={Admin} />
          <Route path="*" component={notFound} />
        </Switch>
      </Layout>
      <GlobalStyles />
    </Router>
  );
}

export default App;

const notFound = () => {
  return (
    <>
      <NavBar />
      <h1 style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }}>Pagina não encontrada!</h1>
    </>
  )
}