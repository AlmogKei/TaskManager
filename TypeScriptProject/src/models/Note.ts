abstract class Note {
    id: number;
    creationDate: Date;
    title: string;
    text: string;
    imageUrl: string;

    constructor(id: number, creationDate: Date, title: string, text: string, imageUrl: string) {
        this.id = id;
        this.creationDate = creationDate;
        this.title = title;
        this.text = text;
        this.imageUrl = imageUrl;
    }

    abstract alert(): void;
}

export default Note;
