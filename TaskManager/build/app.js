"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helperFunctions_1 = require("./utils/helperFunctions");
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
function clearForm() {
    var formElements = document.getElementsByTagName("input");
    for (var i = 0; i < formElements.length; i++) {
        formElements[i].value = "";
    }
}
function closeAddNoteModal() {
    document.getElementById('add-note-modal').style.display = 'none';
}
// פונקציה ששומרת את המודעה
function saveNote() {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    var imageUrl = document.getElementById('image');
    var note = {
        id: generateUniqueId(),
        title: title,
        text: text,
        imageUrl: imageUrl,
        creationDate: new Date()
    };
    displayNote(note);
}
// פונקציה מציגה את המודעה שנוספה
function displayNote(note) {
    var notesSection = document.getElementById('notes');
    var noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = "\n        <h2>".concat(note.title, "</h2>\n        <p>").concat(note.text, "</p>\n        <img src=\"").concat(note.imageUrl, "\" alt=\"Note Image\">\n        <p>Creation Date: ").concat(note.creationDate, "</p>\n    ");
    notesSection.appendChild(noteElement);
}
// מוחק את המודעה לפי איידי
(0, helperFunctions_1.deleteNoteById)(1);
function generateUniqueId() {
    throw new Error('Function not implemented.');
}
