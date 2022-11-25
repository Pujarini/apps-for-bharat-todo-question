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

  const deleteItem = (id) => {
    const filteredTodos = allTodos.filter((task) => task.id !== id);
    setallTodos(filteredTodos);
  };

  // const editItem = (id) => {
  //   const filteredTodos = allTodos.find((task) => task.id === id);
  //   const filteredAllTodos = allTodos.filter((task) => task.id !== id);
  //   setTodo(filteredTodos.title);
  //   setallTodos(filteredAllTodos);
  // };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <div className="todo-input">
          <input
            type="text"
            placeholder="Enter the todo"
            onChange={inputChange}
            value={todo}
          />
          <button type="submit" onClick={addTodo}>
            Add
          </button>
        </div>
        <TodoList
          todos={allTodos}
          completedTask={addCompletedStatus}
          clearCompleted={clearCompletedTodo}
          deleteItem={deleteItem}
          // editItem={editItem}
        />
      </div>
    </div>
  );
};

export default Todo;
