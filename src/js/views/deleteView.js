class DeleteView {
  _parentElement = document.querySelector(".list-container");
  _data;

  addHandlerDelete(handler) {
    this._parentElement.addEventListener("click", function (e) {
      const btn = e.target.closest(".delete-button");
      if (!btn) return;
      const id = +btn.dataset.deleteAt;
      console.log(id);
      handler(id);
    });
  }
}

export default new DeleteView();
