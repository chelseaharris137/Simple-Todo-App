import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { counter: 0 };
  }
  //add a component did mount to fetch to the database
  render() {
    return <div>HELLO WORLD!</div>;
  }
}

export default App;
