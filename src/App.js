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
  deleteTodo = (id) => {
    const newList = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({
      todos: newList,
    });
  };
  //add a component did mount to fetch to the database
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
