(function(exports) {
  function testNoteListViewMultipleNotes() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript");
    noteList.createNote("Ruby");

    var noteListView = new NoteListView(noteList);
    htmlView = noteListView.convertToHTMLView();
    output = "<ul><li><div>JavaScript</div></li><li><div>Ruby</div></li></ul>";

    assert.isTrue(htmlView === output);
  };
  exports.testNoteListViewMultipleNotes = testNoteListViewMultipleNotes();
})(this);

(function(exports) {
  function testNoteListViewOneNote() {
    var noteList = new NoteList;
    noteList.createNote("JavaScript");

    var noteListView = new NoteListView(noteList);
    htmlView = noteListView.convertToHTMLView();
    output = "<ul><li><div>JavaScript</div></li></ul>";

    assert.isTrue(htmlView === output);
  };
  exports.testNoteListViewOneNote = testNoteListViewOneNote();
})(this);

(function(exports) {
  function testNoteListViewNoNote() {
    var noteList = new NoteList;

    var noteListView = new NoteListView(noteList);
    htmlView = noteListView.convertToHTMLView();
    output = "<ul></ul>";

    assert.isTrue(htmlView === output);
  };
  exports.testNoteListViewNoNote = testNoteListViewNoNote();
})(this);
