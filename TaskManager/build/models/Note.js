var Note = /** @class */ (function () {
    function Note(id, creationDate, title, text, imageUrl) {
        this.id = id;
        this.creationDate = creationDate;
        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
    }
    Note.prototype.alert = function () {
        console.log("error");
    };
    return Note;
}());
