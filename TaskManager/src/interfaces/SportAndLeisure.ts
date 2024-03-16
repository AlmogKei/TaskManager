interface SportAndLeisure {
    location: string;
    date: Date;
    time: string;
    requiredEquipment: string[];
    
    alert(): void;
}

export class SportAndLeisureNote extends Note implements SportAndLeisure {
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

    // התראה המציגה את האימון
    alert(): void {
        console.log(`Sport and leisure required equipment: ${this.requiredEquipment.join(', ')}.`);
    }
}
