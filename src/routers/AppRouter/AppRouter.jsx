import React from "react";
// react-dom (what we'll use here)
import { BrowserRouter, Route, Link } from "react-router-dom";

import { Home, Header } from "Components";

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <BrowserRouter>
          <Route path="/" component={Home} />
        </BrowserRouter>
      </div>
    );
  }
}

export default AppRouter;
