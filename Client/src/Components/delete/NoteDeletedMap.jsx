import { IconButton, circularProgressClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { deletedNotes } from '../../store/atoms/DeletedNotes';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { todoListState } from '../../store/atoms/Todo';


function NoteDeletedMap() {
    const deletedTodo = useRecoilValue(deletedNotes)
    const setDeletedTodo = useSetRecoilState(deletedNotes)
    const setTodoList = useSetRecoilState(todoListState)
    const [expandedNote, setExpandedNote] = useState(deletedTodo[0]?.id);

    const handleNoteClick = (id) => {
        setExpandedNote(id);
    };

    const handleRestore = (note) => {
        const updatedNote = deletedTodo.filter((note) => note.id !== expandedNote)
        setDeletedTodo(updatedNote)
        setTodoList(prevArr => [note, ...prevArr])
    }

    const handlePermanentDelete = (note) => {
        const updatedNote = deletedTodo.filter((note) => note.id !== expandedNote)
        setDeletedTodo(updatedNote)
    }

    useEffect(() => {
        if (deletedTodo.length > 0) {
            setExpandedNote(deletedTodo[0].id);
        }
    }, [deletedTodo])

    return (
        !(deletedTodo.length > 0) ? (<div className='wrapper'>
            <div className='container'>
                <div className='flex flex-col'>
                    <IconButton>
                        <LightbulbIcon className='text-5xl icon-button' style={{ fontSize: '7rem', marginBottom: '20px' }} />
                    </IconButton>
                    <h3 className='text-2xl' style={{ color: '#91989d', fontFamily: '' }}>Notes you add appear here</h3>
                </div>
            </div>
        </div>) :
            (
                <div className="wrapper">
                    <div className="container">
                        {deletedTodo.map(note => (
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
                                    <IconButton onClick={() => handleRestore(note)}>
                                        <RestoreIcon fontSize='small' style={{ color: '#fff' }} />
                                    </IconButton>
                                    <IconButton onClick={() => handlePermanentDelete(note)}>
                                        <DeleteForeverIcon fontSize='small' style={{ color: '#fff' }} />
                                    </IconButton>
                                </div>
                                    </div>
                                </label>
                            </>
                        ))}
                    </div>
                </div>
            )
    )
}

export default NoteDeletedMap
