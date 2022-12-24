import React from "react";
import TaskList from "./users/TaskList";

const TodoList = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <main className="todo-list">
        <TaskList />
      </main>
    </>
  );
};

export default TodoList;
