interface Task {
    dueDate: Date;

    alert(): void;
}

export class TaskNote extends Note implements Task {
    dueDate: Date;

    constructor(id: number, creationDate: Date, title: string, text: string, imageUrl: string, dueDate: Date) {
        super(id, creationDate, title, text, imageUrl);
        this.dueDate = dueDate;
    }

    // התראה על מתי הפתק נוצר ומה התאריך האחרון
    alert(): void {
        console.log(`Task created at ${this.creationDate} with a due date of ${this.dueDate}.`);
    }
}
