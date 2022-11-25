import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../utils/reorder";

const TodoList = ({
  todos,
  completedTask,
  clearCompleted,
  deleteItem,
  // editItem,
}) => {
  const [showTodos, setshowTodos] = useState([]);

  useEffect(() => {
    if (todos.length > 0) {
      setshowTodos(todos);
    }
  }, [todos]);

  const onClickTodo = (e) => {
    e.preventDefault();
    if (e.target.dataset.key === "result") {
      completedTask(e.currentTarget.id);
    }
  };

  const showActiveTodoList = () => {
    const activeTodos = todos.filter((task) => !task.complete);
    setshowTodos(activeTodos);
  };

  const showCompletedTodoList = () => {
    const completedTodos = todos.filter((task) => task.complete);
    if (completedTodos) {
      setshowTodos(completedTodos);
    }
  };

  const showAllToDoList = () => {
    setshowTodos(todos);
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      showTodos,
      result.source.index,
      result.destination.index
    );

    setshowTodos(items);
  };

  const onDelete = (id) => {
    deleteItem(id);
  };

  // const onEdit = (id) => {
  //   editItem(id);
  // };

  return (
    <div className="todoList">
      <h2 className="title">To do Items</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="todoItemsList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {showTodos && showTodos.length > 0 ? (
                showTodos.map((todo, index) => {
                  return (
                    <Draggable
                      key={todo.id}
                      draggableId={`${todo.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          id={todo.id}
                          key={todo.id}
                          onClick={onClickTodo}
                          className={
                            todo.complete ? "todoItem completed" : "todoItem"
                          }
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          data-key="result"
                          ref={provided.innerRef}
                        >
                          {todo.title}{" "}
                          <button
                            onClick={() => onDelete(todo.id)}
                            className="delete-item"
                          >
                            x
                          </button>
                          {/* <button
                            onClick={() => onEdit(todo.id)}
                            className="edit-item"
                          >
                            edit
                          </button> */}
                        </div>
                      )}
                    </Draggable>
                  );
                })
              ) : (
                <div>You got no Items</div>
              )}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="todoList__operations">
        <span>{showTodos.length} items</span>
        <div className="todoList__status">
          <button className="todoList__showallItems" onClick={showAllToDoList}>
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
    </div>
  );
};

export default TodoList;
