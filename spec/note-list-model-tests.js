(function(exports) {
  function testNoteListAddNotesAndGetNotes() {
    var note = new Note("JavaScript");
    var noteList = new NoteList;
    noteList.addNote(note);
    assert.isTrue(noteList.getNotes()[0] === note);
  };
  exports.testNoteListAddNotesAndGetNotes = testNoteListAddNotesAndGetNotes();
})(this);

(function(exports) {
  function testNoteListCreateNote() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript");
    assert.isTrue(noteList.getNotes()[0].getText() === "JavaScript");
  };
  exports.testNoteListCreateNote = testNoteListCreateNote();
})(this);
