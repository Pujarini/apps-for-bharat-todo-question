import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [allTodos, setallTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const inputChange = (e) => {
    const value = e.target.value;
    if (value) {
      setTodo(e.target.value);
    }
  };

  const addTodo = () => {
    let toDoList = [...allTodos];
    toDoList = [
      ...toDoList,
      { id: toDoList.length + 1, title: todo, complete: false },
    ];
    setallTodos(toDoList);
    setTodo("");
  };

  const addCompletedStatus = (id) => {
    let completedToDo = allTodos.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setallTodos(completedToDo);
  };

  const clearCompletedTodo = () => {
    const clearCompleted = allTodos.filter((task) => !task.complete);
    setallTodos(clearCompleted);
  };

  return (
    <div className="todo-container">
      <div className="todo-input">
        <input
          type="text"
          placeholder="Enter the todo"
          onChange={inputChange}
          value={todo}
        />
        <button type="submit" onClick={addTodo}>
          Add to do
        </button>
      </div>
      <TodoList
        todos={allTodos}
        completedTask={addCompletedStatus}
        clearCompleted={clearCompletedTodo}
      />
    </div>
  );
};

export default Todo;
