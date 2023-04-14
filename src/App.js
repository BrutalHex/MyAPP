import React from "react";
import config from "../config";

const App = () => {
  return (
    <div>
      <h1>Hello, Mohammad!</h1>
      <p>Version: {config.version}</p>
      <p>Environment: {config.env}</p>
    </div>
  );
};

export default App;
