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
        <label htmlFor={title} className="todo-toggle-label">
          <input
            id={title}
            type="checkbox"
            className="todo-toggle"
            checked={complete}
            onChange={handleSetComplete}
          />
          <span className="todo-toggle-span" />
        </label>
        <span className="todo-text">{title}</span>
        <span className="todo-delete" onClick={handleRemoveTodo}>
          x
        </span>
      </div>
    </li>
  );
};

export default TodoItem;
