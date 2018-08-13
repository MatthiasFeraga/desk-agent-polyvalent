import React from "react";
// react-dom (what we'll use here)
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Splash, Header, Footer, Home } from "Components";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default AppRouter;
