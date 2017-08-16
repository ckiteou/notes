(function(exports) {
  function NoteController() {
    // this._noteList = view;
  };

  NoteController.prototype.renderNote = function () {
    // var noteList = new NoteList();
    // var noteListView = new NoteListView(noteList);
    // var createNote = noteList.createNote("My head hurts and I am very, very tired");
    // var note = noteListView.convertToHTMLView();
    var noteListView = new NoteListView();
    document.getElementById("app").innerHTML = noteListView.convertToHTMLView();
  };
  exports.NoteController = NoteController;
})(this);
