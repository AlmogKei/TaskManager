import Note from '../models/Note';

interface SportAndLeisure extends Note {
    location: string;
    date: Date;
    time: string;
    requiredEquipment: string[];
    alert(): void; // Implement the alert function
}

export default SportAndLeisure;
