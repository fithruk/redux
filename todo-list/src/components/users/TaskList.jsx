import React, { useEffect } from "react";
import { connect } from "react-redux";

import TaskItem from "./TaskItem";
import CreateTask from "./CreateTask";

import { tasksSelector } from "./tasksSelektors";
import * as actions from "./tasksActions";

const TaskList = ({
  loadDataFromServer,
  changeTaskStatus,
  deleteTask,
  tasks,
  addNewTask,
}) => {
  useEffect(() => {
    loadDataFromServer();
  }, []);

  const sortedTasks = tasks.slice().sort((a, b) => a.status - b.status);
  return (
    <>
      <CreateTask addNewTask={addNewTask} />
      <ul className="list">
        {sortedTasks.map((task) => (
          <TaskItem
            {...task}
            key={task.id}
            changeTaskStatus={changeTaskStatus}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </>
  );
};

const mapState = (state) => {
  return {
    tasks: tasksSelector(state),
  };
};

const mapDispatch = {
  loadDataFromServer: actions.loadDataFromServer,
  changeTaskStatus: actions.changeTaskStatus,
  deleteTask: actions.deleteTask,
  addNewTask: actions.addNewTask,
};

export default connect(mapState, mapDispatch)(TaskList);
