import Note from '../models/Note';

interface Meeting extends Note {
    location: string;
    time: string;
    alert(): void; // Implement the alert function
}

export default Meeting;
