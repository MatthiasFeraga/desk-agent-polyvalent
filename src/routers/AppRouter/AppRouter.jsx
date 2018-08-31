import React from "react";
// react-dom (what we'll use here)
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Splash, Header, HeaderLogin, Footer, Home } from "Components";

class AppRouter extends React.Component {
  render() {
    let currentLocation = window.location.pathname;

    console.log(currentLocation);
    return (
      <React.Fragment>
        {currentLocation ? (
          currentLocation === "/" ? (
            <HeaderLogin />
          ) : (
            <Header />
          )
        ) : null}
        <div id="content">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Splash} />
              <Route exact path="/home" component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default AppRouter;
