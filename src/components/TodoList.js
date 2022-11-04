import React, { useState, useEffect } from "react";

const TodoList = ({
  todos,
  completedTask,
  clearCompleted,
  //   clearAllTasks,
  //   showCompletedTodo,
  //   showActiveTodos,
  //   completedToDo,
  //   pendingTodos,
}) => {
  const [showTodos, setshowTodos] = useState([]);

  useEffect(() => {
    if (todos.length > 0) {
      setshowTodos(todos);
    }
  }, [todos]);

  const onClickTodo = (e) => {
    e.preventDefault();
    completedTask(e.currentTarget.id);
  };

  const showActiveTodoList = () => {
    const activeTodos = todos.filter((task) => !task.complete);
    setshowTodos(activeTodos);
  };

  const showCompletedTodoList = () => {
    const completedTodos = todos.filter((task) => task.complete);
    console.log(completedTodos);
    setshowTodos(completedTodos);
  };

  const showAllToDoList = () => {
    setshowTodos(todos);
  };

  return (
    <div className="todoList">
      {showTodos &&
        showTodos.length > 0 &&
        showTodos.map((todo) => {
          return (
            <div
              id={todo.id}
              key={todo.id}
              onClick={onClickTodo}
              className={todo.complete ? "todoItem completed" : "todoItem"}
            >
              {todo.title}
            </div>
          );
        })}
      {showTodos && showTodos.length > 0 && (
        <div className="todoList__operations">
          <span>{showTodos.length} items</span>
          <div className="todoList__status">
            <button
              className="todoList__showallItems"
              onClick={showAllToDoList}
            >
              All
            </button>
            <button
              id=""
              className="todoList__showactiveItems"
              onClick={showActiveTodoList}
            >
              Active
            </button>
            <button
              id="complete"
              className="todoList__showCompletedItems"
              onClick={showCompletedTodoList}
            >
              Completed
            </button>
          </div>
          <button onClick={clearCompleted}>Clear Completed</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
