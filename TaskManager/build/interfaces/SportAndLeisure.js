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
exports.SportAndLeisureNote = void 0;
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
    // התראה המציגה את האימון
    SportAndLeisureNote.prototype.alert = function () {
        console.log("Sport and leisure required equipment: ".concat(this.requiredEquipment.join(', '), "."));
    };
    return SportAndLeisureNote;
}(Note));
exports.SportAndLeisureNote = SportAndLeisureNote;
