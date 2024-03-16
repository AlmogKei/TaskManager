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
exports.TaskNote = void 0;
var TaskNote = /** @class */ (function (_super) {
    __extends(TaskNote, _super);
    function TaskNote(id, creationDate, title, text, imageUrl, dueDate) {
        var _this = _super.call(this, id, creationDate, title, text, imageUrl) || this;
        _this.dueDate = dueDate;
        return _this;
    }
    // התראה על מתי הפתק נוצר ומה התאריך האחרון
    TaskNote.prototype.alert = function () {
        console.log("Task created at ".concat(this.creationDate, " with a due date of ").concat(this.dueDate, "."));
    };
    return TaskNote;
}(Note));
exports.TaskNote = TaskNote;
