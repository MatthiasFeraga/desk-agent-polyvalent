import React from "react";
import ReactDOM from "react-dom";

// Router
import AppRouter from "routers/AppRouter/AppRouter";

const app = <AppRouter />;

export default ReactDOM.render(
  app,
  document.getElementById("app") || document.createElement("div")
);
