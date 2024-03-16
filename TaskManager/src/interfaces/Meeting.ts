interface Meeting {
    date: Date;
    time: string;
    text: string;
    location: string;
    
    alert(): void;
}

export class MeetingNote extends Note implements Meeting {
    date: Date;
    time: string;
    text: string;
    location: string;

    constructor(id: number, creationDate: Date, title: string, text: string, imageUrl: string, location: string, time: string) {
        super(id, creationDate, title, text, imageUrl);
        this.date = creationDate; 
        this.time = time;
        this.text = text;
        this.location = location;
    }

    // התראה של התאריך זמן מיקום וטקסט
    alert(): void {
        console.log(`Meeting note created at ${this.date} with location: ${this.location} and time: ${this.time} text: ${this.text}`);
    }
}
