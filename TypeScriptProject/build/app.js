"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var helperFunctions_1 = require("./utils/helperFunctions");
var Note_1 = require("./models/Note");
var TaskNote = /** @class */ (function (_super) {
    __extends(TaskNote, _super);
    function TaskNote(id, creationDate, title, text, imageUrl, dueDate) {
        var _this = _super.call(this, id, creationDate, title, text, imageUrl) || this;
        _this.dueDate = dueDate;
        return _this;
    }
    TaskNote.prototype.alert = function () {
        console.log("Task note created at ".concat(this.creationDate, "."));
    };
    return TaskNote;
}(Note_1.default));
var MeetingNote = /** @class */ (function (_super) {
    __extends(MeetingNote, _super);
    function MeetingNote(id, creationDate, title, text, imageUrl, location, time) {
        var _this = _super.call(this, id, creationDate, title, text, imageUrl) || this;
        _this.location = location;
        _this.time = time;
        return _this;
    }
    MeetingNote.prototype.alert = function () {
        console.log("Meeting note created at ".concat(this.creationDate, "."));
    };
    return MeetingNote;
}(Note_1.default));
var SportAndLeisureNote = /** @class */ (function (_super) {
    __extends(SportAndLeisureNote, _super);
    function SportAndLeisureNote(id, creationDate, title, text, imageUrl, location, date, time, requiredEquipment) {
        var _this = _super.call(this, id, creationDate, title, text, imageUrl) || this;
        _this.location = location;
        _this.date = date;
        _this.time = time;
        _this.requiredEquipment = requiredEquipment;
        return _this;
    }
    SportAndLeisureNote.prototype.alert = function () {
        console.log("Sport and leisure note created at ".concat(this.creationDate, "."));
    };
    return SportAndLeisureNote;
}(Note_1.default));
function openAddNoteModal() {
    var modal = document.getElementById("add-note-modal");
    modal.style.display = "block";
}
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
    });
}
// Example usage of deleteNoteById function
(0, helperFunctions_1.deleteNoteById)(1); // Assuming ID 1 is the ID of the note to be deleted
// Other logic for rendering HTML, handling user interaction, etc.
