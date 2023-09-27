class InputView {
  _parentElement = document.querySelector(".add-form");

  addHandlerRender(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }

  _clearInput() {
    this._parentElement.querySelector(".input-field").value = "";
  }

  getInput() {
    const input = this._parentElement.querySelector(".input-field").value;
    console.log(input);
    this._clearInput();
    return input;
  }
}

export default new InputView();
