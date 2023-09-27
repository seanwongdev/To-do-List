import "bootstrap/dist/css/bootstrap.css";
import "core-js/stable";
import "regenerator-runtime";

import * as model from "./model.js";
import taskView from "./views/taskView.js";
import inputView from "./views/inputView.js";
import clearView from "./views/clearView.js";
import deleteView from "./views/deleteView.js";

const controlTaskLists = function () {
  const input = inputView.getInput();

  //add input task into state repo
  model.addTasks(input);

  //render views of task
  console.log(model.state.tasks);
  taskView.render(model.state.tasks);
};

const controlInitialList = function () {
  taskView.render(model.state.tasks);
};

const controlClearTasks = function () {
  model.clearTasks();
};

const controlDeleteTask = function (id) {
  model.deleteTasks(id);
  console.log(model.state.tasks);
  taskView.render(model.state.tasks);
};

const init = function () {
  controlInitialList();
  inputView.addHandlerRender(controlTaskLists);
  clearView.addHandlerClear(controlClearTasks);
  deleteView.addHandlerDelete(controlDeleteTask);
};

init();
