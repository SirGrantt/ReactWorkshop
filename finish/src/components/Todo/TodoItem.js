import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ title, complete, id, setComplete, removeTodo }) => {
  function handleSetComplete() {
    setComplete(id);
  }

  function handleRemoveTodo() {
    removeTodo(id);
  }
  return (
    <li className="todo-item">
      <div className={complete ? "completed-todo" : "incomplete-todo"}>
        {title}
        <span onClick={handleRemoveTodo}>x</span>
        <input
          type="button"
          className="todo-button"
          value={complete ? "mark incomplete" : "mark complete"}
          onClick={handleSetComplete}
        />
      </div>
    </li>
  );
};

export default TodoItem;
