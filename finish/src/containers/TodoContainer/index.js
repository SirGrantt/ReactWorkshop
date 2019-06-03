import React, { useState, useEffect } from "react";
import { api } from "../../utilities/api";
import TodoList from "../../components/Todo/TodoList";

const TodoContainer = ({}) => {
  const [todos, updateTodos] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState(undefined);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        updateLoading(true);
        const result = await api.fetchTodos();
        updateTodos(result);
        updateLoading(false);
      } catch (err) {
        updateError(err);
        updateLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const addTodo = todo => {
    updateTodos([...todos, todo]);
  };

  const setComplete = id => {
    const updated = todos.map(t => {
      t.complete = t.id === id ? !t.complete : t.complete;
      return t;
    });

    updateTodos(updated);
  };

  const removeTodo = todoId => {
    const updatedTodos = todos.filter(t => t.id !== todoId);
    updateTodos(updatedTodos);
  };

  return loading ? (
    <p>Loading....</p>
  ) : (
    <div className="todo-container">
      <TodoList
        title="World's Best Todo List"
        todos={todos}
        setComplete={setComplete}
        removeTodo={removeTodo}
      />
      {/* <TodoInput addTodo={addTodo} /> */}
    </div>
  );
};

export default TodoContainer;
