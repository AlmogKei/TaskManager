const deleteNoteById = (id: number): void => {
    let notes: { id: number, title: string, text: string }[] = [
    ];

    const index = notes.findIndex(note => note.id === id);
    if (index !== -1) {
        notes.splice(index, 1);
        console.log(`Note with ID ${id} has been deleted.`);
    } else {
        console.log(`Note with ID ${id} does not exist.`);
    }
};

export { deleteNoteById };
