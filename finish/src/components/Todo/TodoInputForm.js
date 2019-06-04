import React, { useState } from "react";
import PropTypes from "prop-types";

const TodoInputForm = ({ addTodo }) => {
  const [todo, updateTodo] = useState("");
  const onSubmit = e => {
    if (e) {
      e.preventDefault();
    }
    addTodo({
      title: todo,
      complete: false,
      id: Math.floor(Math.random() * 1000)
    });
    updateTodo("");
  };

  const handleUpdateTodo = e => {
    updateTodo(e.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="todo-input">New Todo</label>
      <input
        className="todo-input"
        type="text"
        id="todo-input"
        value={todo}
        onChange={handleUpdateTodo}
      />
      <input className="todo-button" type="submit" value="Add" />
    </form>
  );
};

export default TodoInputForm;
