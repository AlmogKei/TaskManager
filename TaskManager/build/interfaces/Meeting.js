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
exports.MeetingNote = void 0;
var MeetingNote = /** @class */ (function (_super) {
    __extends(MeetingNote, _super);
    function MeetingNote(id, creationDate, title, text, imageUrl, location, time) {
        var _this = _super.call(this, id, creationDate, title, text, imageUrl) || this;
        _this.date = creationDate;
        _this.time = time;
        _this.text = text;
        _this.location = location;
        return _this;
    }
    // התראה של התאריך זמן מיקום וטקסט
    MeetingNote.prototype.alert = function () {
        console.log("Meeting note created at ".concat(this.date, " with location: ").concat(this.location, " and time: ").concat(this.time, " text: ").concat(this.text));
    };
    return MeetingNote;
}(Note));
exports.MeetingNote = MeetingNote;
