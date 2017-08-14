(function(exports) {
  function testNoteList() {
    var note = new Note("This is a test");
    var noteList = new NoteList();
    noteList.addNote(note);
    assert.isTrue(noteList.getNotes === [note]);
  };
  exports.testNoteList = testNoteList();
})(this);
