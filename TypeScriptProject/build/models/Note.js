"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Note = /** @class */ (function () {
    function Note(id, creationDate, title, text, imageUrl) {
        this.id = id;
        this.creationDate = creationDate;
        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
    }
    return Note;
}());
exports.default = Note;
