(function(exports) {
  function NoteList(note) {
    this.notes = [];
  };

  NoteList.prototype.addNote = function (note) {
    this.notes.push(note);
  };
  NoteList.prototype.getNotes = function () {
    // return this.notes;
  };
})(this);

(function(exports) {
  function Note(message) {
    this.text = message;
  };
  Note.prototype.getText = function() {
    return this.text
  };
  exports.Note = Note;
})(this);
