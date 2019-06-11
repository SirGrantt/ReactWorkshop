import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const StyledTodoList = styled.ul`
  padding-left: 0;
  margin-bottom: 20px;
`;

const TodoList = ({ title, todos, setComplete, removeTodo }) => {
  return (
    <>
      <h1>{title}</h1>
      <StyledTodoList>
        {todos.map(t => (
          <TodoItem
            key={t.id}
            id={t.id}
            setComplete={setComplete}
            removeTodo={removeTodo}
            title={t.title}
            complete={t.complete}
          />
        ))}
      </StyledTodoList>
    </>
  );
};

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      complete: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ),
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;
