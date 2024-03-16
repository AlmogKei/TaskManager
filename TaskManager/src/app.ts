import { deleteNoteById } from './utils/helperFunctions';

function openAddNoteModal(): void {
    var modal = document.getElementById("add-note-modal");
    modal.style.display = "block";
}

var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        var modal = this.parentElement.parentElement;
        modal.style.display = "none";
    });
}

function clearForm() {
    var formElements = document.getElementsByTagName("input")
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].value = ""
    }
  }

  function closeAddNoteModal() {
    document.getElementById('add-note-modal').style.display = 'none';
  }


// פונקציה ששומרת את המודעה
function saveNote() {
    const title = document.getElementById('title');
    const text = document.getElementById('text');
    const imageUrl = document.getElementById('image');

    const note = {
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
    const notesSection = document.getElementById('notes');
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.text}</p>
        <img src="${note.imageUrl}" alt="Note Image">
        <p>Creation Date: ${note.creationDate}</p>
    `;
    notesSection.appendChild(noteElement);
}

// מוחק את המודעה לפי איידי
deleteNoteById(1); 



function generateUniqueId() {
    throw new Error('Function not implemented.');
}
