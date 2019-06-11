import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTodoItem = styled.li`
  position: relative;
  display: block;
  padding: 10px 15px;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.42857143;
  cursor: initial;
  user-select: none;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const TodoItem = ({ title, complete, id, setComplete, removeTodo }) => {
  function handleSetComplete() {
    setComplete(id);
  }

  function handleRemoveTodo() {
    removeTodo(id);
  }
  return (
    <StyledTodoItem>
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
    </StyledTodoItem>
  );
};

export default TodoItem;
