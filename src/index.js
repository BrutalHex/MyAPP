import React from "react";
import ReactDOM from "react-dom";

const renderApp = async () => {
  const { default: App } = await import("./App");
  ReactDOM.render(<App />, document.getElementById("root"));
};

renderApp();
