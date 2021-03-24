import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((elem) => {
      return (
        <div className={elem} key={elem.id}>
          <span>{elem.content}</span>
          <span
            onClick={() => {
              deleteTodo(elem.id);
            }}
          >
            X
          </span>
        </div>
      );
    })
  ) : (
    <p>You have no todos left</p>
  );
  return <div className="todos">{todoList}</div>;
};

export default Todos;
