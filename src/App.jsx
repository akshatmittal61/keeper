import React, { useState } from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import notes from "./notes";
import Note from "./Note";
import Footer from "./Footer";
function App() {
    const [allNotes, setAllNotes] = useState(notes);
    function addNote(note) {
        setAllNotes((prev) => {
            return [...prev, note];
        })
    }
    function deleteNote(id) {
        setAllNotes((prev) => {
            return prev.filter((note, index) => {
                return index !== id;
            })
        })
    }
    return (
        <div>
            <Header />
            <main>
                <CreateArea onAdd={addNote} />
                {allNotes.map((note, index) =>
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        onDelete={deleteNote}
                    />
                )}
            </main>
            <Footer />
        </div>
    )
}
export default App;