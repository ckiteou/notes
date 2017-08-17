(function(exports) {

  function testNoteControllerCanTakeAParameter() {
    var noteListDouble = { createNote: function() {} }
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController.notelist);
  }

  function testNoteControllerPassesCreateNoteToNoteList() {
    function NoteListDouble() {
      this.count = 0;
    };

    NoteListDouble.prototype.createNote = function () {
      this.count++;
    };
    var noteListDouble = new NoteListDouble();
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteListDouble.count === 1)
  }

  function testNoteControllerCanAddNoteWithText() {
    var noteListDouble = { createNote: function() {} };
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController.noteListView._noteList === noteListDouble)
  }

  function testNoteControllerInnerHTMLExists() {
    var noteListDouble = { createNote: function() {} };
    var noteController = new NoteController(noteListDouble);
    assert.isTrue(noteController.HTML);
  }

  function testNoteControllerElementAppContainsCorrectHTML() {
    var noteDouble = { getText: function() {return "Test Text"} }
    var noteListDouble = { createNote: function() {}, getNotes: function() { return [noteDouble] } };
    var noteController = new NoteController(noteListDouble);
    noteController.HTML();
    assert.isTrue(document.getElementById("app").innerHTML === "<ul><li><div>Test Text</div></li></ul>")
  };

  testNoteControllerCanTakeAParameter();
  testNoteControllerPassesCreateNoteToNoteList();
  testNoteControllerCanAddNoteWithText();
  testNoteControllerInnerHTMLExists();
  testNoteControllerElementAppContainsCorrectHTML();
})(this);
