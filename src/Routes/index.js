import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useUser } from "../Context/UserProvider";
// import fireDb from "../services/ConfigFirebase"

//Pages
import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Stack from "../pages/Stack";
import Portfolio from "../pages/Portfolio";
import Admin from "../pages/Admin";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useUser();

  console.log("isAuth:", isAuthenticated())

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
            // eslint-disable-next-line react/prop-types
            <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
          )
      }
    />
  )
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sobre" component={Sobre} />
          <Route path="/stack" component={Stack} />
          <Route path="/portfolio" component={Portfolio} />
          <PrivateRoute path="/admin" component={Admin} />
          <Route path="*" component={<h1>not found</h1>} />
        </Switch>
      </Layout>
      <GlobalStyles />
    </BrowserRouter>
  )
};

