(function(exports) {
  function NoteController(notelist) {
    this.notelist = notelist;
    this.notelist.createNote("Seltzer");
    this.noteListView = new NoteListView(this.notelist);
  };

  NoteController.prototype.HTML = function () {
    document.getElementById("app").innerHTML = this.noteListView.convertToHTMLView()
  };
  exports.NoteController = NoteController;
})(this);
