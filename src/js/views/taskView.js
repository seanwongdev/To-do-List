class TaskView {
  _parentElement = document.querySelector(".list-container");
  _data;

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return;

    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    console.log(markup);

    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return this._data
      .map(
        (
          result
        ) => `<div class="d-flex justify-content-between align-items-center">
    <label class="d-flex align-items-center mt-1">
      <input type="checkbox" class="tasks-checkbox" />
      <span class="ms-2">${result}</span>
    </label>
    <button class="delete-button">+</button>
  </div>`
      )
      .join("");
  }
}

export default new TaskView();
