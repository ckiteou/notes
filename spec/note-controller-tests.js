(function(exports) {
  function testNoteControllerCanRenderString() {
    var noteController = new NoteController();
    // var list = new NoteListView();
    // list.convertToHTMLView = function() { return 'Hello' }
    var list = { convertToHTMLView: function() { return 'Hello' }};
    var notes = { getNotes: function() { return [] }};

    assert.isTrue(noteController.renderNote() === 'Hello');
  };
  exports.testNoteControllerCanRenderString = testNoteControllerCanRenderString();
})(this);



// (function(exports) {
//   function testNoteController() {
//
//     var noteController = new NoteController();
//     var string = "Hello"
//     noteController.renderNote = function() { return "Hello" }
//
//     assert.isTrue(noteController === string);
//   }
//   exports.testNoteController = testNoteController();
// })(this);

// (function(exports) {
//   function testNoteControllerCanRenderString() {
//     var newNoteController = new NoteController();
//     var noteListView = new NoteListView();
//
//    NoteListView.prototype.convertToHTMLView = function () {
//       return 'blah';
//     };
//
//    assert.isTrue(newNoteController.renderNote() === 'blah');
//   };
//   exports.testNoteControllerCanRenderString = testNoteControllerCanRenderString();
// })(this);
