export const state = {
  tasks: [],
};

export const addTasks = function (task) {
  state.tasks.push(task);

  persistTasks();
};

export const deleteTasks = function (id) {
  state.tasks.splice(id, 1);

  persistTasks();
};

const persistTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(state.tasks));
};

const init = function () {
  const storage = localStorage.getItem("tasks");
  if (storage) state.tasks = JSON.parse(storage);
};

init();

export const clearTasks = function () {
  localStorage.clear("tasks");
};
