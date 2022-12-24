import {
  getAllTasks,
  createNewTask,
  updateStatusOfExistingTask,
  deleteDeprecatedTask,
} from "./serverRequests";

import { tasksSelector } from "./tasksSelektors";

const setTasksData = (tasksArr) => {
  return {
    type: "SET_TASKS_DATA",
    payload: tasksArr,
  };
};

const loadDataFromServer = () => {
  return async function (dispatch) {
    try {
      const tasks = await getAllTasks();
      dispatch(setTasksData(tasks));
    } catch (error) {
      throw new Error(error);
    }
  };
};

const changeTaskStatus = (id) => {
  return async function (dispatch, getState) {
    try {
      const tasks = tasksSelector(getState());
      let task = tasks.find((task) => task.id === id);
      await updateStatusOfExistingTask(id, {
        ...task,
        status: !task.status,
      });
      const apdatedTasks = await getAllTasks();
      dispatch(setTasksData(apdatedTasks));
    } catch (error) {
      throw new Error(error);
    }
  };
};

const deleteTask = (id) => {
  return async function (dispatch) {
    try {
      await deleteDeprecatedTask(id);
      const apdatedTasks = await getAllTasks();
      dispatch(setTasksData(apdatedTasks));
    } catch (error) {
      throw new Error(error);
    }
  };
};

const addNewTask = (value) => {
  return async function (dispatch) {
    try {
      const newTask = {
        task: value,
        status: false,
      };
      await createNewTask(newTask);
      const apdatedTasks = await getAllTasks();
      dispatch(setTasksData(apdatedTasks));
    } catch (error) {
      throw new Error(error);
    }
  };
};

export {
  setTasksData,
  loadDataFromServer,
  changeTaskStatus,
  deleteTask,
  addNewTask,
};
