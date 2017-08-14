(function(exports) {
  function testNoteText() {
    var note = new Note("JavaScript");
    assert.isTrue(note.getText() === "JavaScript");
  };
  exports.testNoteText = testNoteText();
})(this);
