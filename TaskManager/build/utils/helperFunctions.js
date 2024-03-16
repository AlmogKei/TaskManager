"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNoteById = void 0;
var deleteNoteById = function (id) {
    var notes = [];
    var index = notes.findIndex(function (note) { return note.id === id; });
    if (index !== -1) {
        notes.splice(index, 1);
        console.log("Note with ID ".concat(id, " has been deleted."));
    }
    else {
        console.log("Note with ID ".concat(id, " does not exist."));
    }
};
exports.deleteNoteById = deleteNoteById;
