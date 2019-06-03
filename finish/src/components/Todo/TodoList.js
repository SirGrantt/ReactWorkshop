import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./TodoItem";

const TodoList = ({ title, todos, setComplete, removeTodo }) => {
  return (
    <>
      <h1>{title}</h1>
      <ul className="todo-list">
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
      </ul>
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
