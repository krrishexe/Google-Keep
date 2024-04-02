import { IconButton } from '@mui/material'
import React from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Notemap({ todoList, expandedNote, handleNoteClick }) {
    return (
        <div className="wrapper">
            <div className="container">
                {todoList.map(note => (
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
                                <div className="description container-top-left">
                                    <h4>{note.name}</h4>
                                    <p>{note.description}</p>
                                </div>
                                <div className='icon mr-4'>
                                    <IconButton>
                                        <ArchiveIcon fontSize='small' style={{ color: '#fff' }} />
                                    </IconButton>
                                    <IconButton>
                                        <DeleteOutlineIcon fontSize='small' style={{ color: '#fff' }} />
                                    </IconButton>
                                </div>
                            </div>
                        </label>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Notemap
