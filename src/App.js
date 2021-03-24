import React, { Component } from "react";
import Todos from "./Todos";

class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      todos: [
        { id: 1, content: "Buy some milk" },
        { id: 2, content: "Walk the dog" },
      ],
    };
  }
  //add a component did mount to fetch to the database
  render() {
    return (
      <div>
        <Todos />
      </div>
    );
  }
}

export default App;
