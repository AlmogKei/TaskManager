import Task from './interfaces/Task';
import Meeting from './interfaces/Meeting';
import SportAndLeisure from './interfaces/SportAndLeisure';
import { deleteNoteById } from './utils/helperFunctions';
import Note from './models/Note';

class TaskNote extends Note {
    dueDate: Date;

    constructor(id: number, creationDate: Date, title: string, text: string, imageUrl: string, dueDate: Date) {
        super(id, creationDate, title, text, imageUrl);
        this.dueDate = dueDate;
    }

    alert(): void {
        console.log(`Task note created at ${this.creationDate}.`);
    }
}

class MeetingNote extends Note {
    location: string;
    time: string;

    constructor(id: number, creationDate: Date, title: string, text: string, imageUrl: string, location: string, time: string) {
        super(id, creationDate, title, text, imageUrl);
        this.location = location;
        this.time = time;
    }

    alert(): void {
        console.log(`Meeting note created at ${this.creationDate}.`);
    }
}

class SportAndLeisureNote extends Note {
    location: string;
    date: Date;
    time: string;
    requiredEquipment: string[];

    constructor(id: number, creationDate: Date, title: string, text: string, imageUrl: string, location: string, date: Date, time: string, requiredEquipment: string[]) {
        super(id, creationDate, title, text, imageUrl);
        this.location = location;
        this.date = date;
        this.time = time;
        this.requiredEquipment = requiredEquipment;
    }

    alert(): void {
        console.log(`Sport and leisure note created at ${this.creationDate}.`);
    }
}

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






// Example usage of deleteNoteById function
deleteNoteById(1); // Assuming ID 1 is the ID of the note to be deleted

// Other logic for rendering HTML, handling user interaction, etc.
