import React, { useState } from 'react'
import "./Note.css"

const notes = [
    { id: 'c1', icon: '1', title: 'Winter', description: 'Winter has so much to offer - creative activities' },
    { id: 'c2', icon: '2', title: 'Digital Technology', description: 'Gets better every day - stay tuned' },
    // add more notes as needed
];

function Note() {
    const [expandedNote, setExpandedNote] = useState(notes[0]?.id);

    const handleNoteClick = (id) => {
        setExpandedNote(id);
    };

    return (
        <div className="wrapper">
            <div className="container">
                {notes.map(note => (
                    <>
                        <input 
                            type="radio" 
                            name="slide" 
                            id={note.id} 
                            checked={expandedNote === note.id}
                            onChange={() => handleNoteClick(note.id)}
                        />
                        <label htmlFor={note.id} className="card">
                            <div className="row">
                                <div className="icon">{note.icon}</div>
                                <div className="description">
                                    <h4>{note.title}</h4>
                                    <p>{note.description}</p>
                                </div>
                            </div>
                        </label>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Note