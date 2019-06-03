import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ title, complete, id, setComplete, removeTodo }) => {
  function handleSetComplete() {
    setComplete(id);
  }
  return (
    <li className="todo-item">
      <div
        className={complete ? "completed-todo" : "incomplete-todo"}
        onClick={handleSetComplete}
      >
        {title}
      </div>
    </li>
  );
};

export default TodoItem;
