(function(exports) {
  function NoteController() {
    // this._noteList = view;
  };

  NoteController.prototype.renderNote = function () {
    // var noteList = new NoteList();
    // var noteListView = new NoteListView(noteList);
    // var createNote = noteList.createNote("My head hurts and I am very, very tired");
    // var note = noteListView.convertToHTMLView();
    document.getElementById("app").innerHTML = note;
  };
  exports.NoteController = NoteController;
})(this);
