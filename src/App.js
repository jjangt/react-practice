import React, { Component } from "react";
import Test from './Test';
import Title from './test/Title';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Test />
        <Title />
      </div>
    );
  }
}

export default App;
