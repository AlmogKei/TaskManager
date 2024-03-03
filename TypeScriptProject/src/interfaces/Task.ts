import Note from '../models/Note';

interface Task extends Note {
    dueDate: Date;
    alert(): void; // Implement the alert function
}

export default Task;
