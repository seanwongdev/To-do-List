class ClearView {
  _parentElement = document.querySelector(".day-button");

  addHandlerClear(handler) {
    this._parentElement.addEventListener("click", function (e) {
      handler();
      location.reload();
    });
  }
}

export default new ClearView();
