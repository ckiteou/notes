(function(exports) {
  function NoteListView(noteList) {
    console.log(noteList);
    this._noteList = noteList;
  };

  NoteListView.prototype.convertToHTMLView = function() {
    var htmlView = "<ul>"
    var notes = this._noteList.getNotes();
    for (var i = 0; i < notes.length; i++) {
      htmlView += "<li><div>" + notes[i].getText() + "</div></li>";
    }
    htmlView += "</ul>"
    return htmlView;
  };

  exports.NoteListView = NoteListView;
})(this);
