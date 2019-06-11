import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTodoInput = styled.input`
  margin: 1em;
  border-radius: 4px;
`;

const StyledTodoInputButton = styled.input`
  background-color: #009bff;
  border-radius: 4px;
  width: 60px;
  height: 25px;
  color: white;
`;

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
      <label htmlFor="todo-input">New To Do</label>
      <StyledTodoInput
        // className="todo-input"
        type="text"
        id="todo-input"
        value={todo}
        onChange={handleUpdateTodo}
      />
      <StyledTodoInputButton
        // className="todo-button"
        type="submit"
        value="Add"
      />
    </form>
  );
};

export default TodoInputForm;
