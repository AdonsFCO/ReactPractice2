import React, { Component } from "react";
import Timer from "./components/Timer/Timer";

class App extends Component {
  render() {
    return (
      <>
        <h1>Current Time</h1>
        <Timer />
      </>
    );
  }
}

export default App;
