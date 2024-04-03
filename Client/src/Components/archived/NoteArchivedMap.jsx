import { IconButton, circularProgressClasses } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { archiveNotes } from '../../store/atoms/ArchiveNotes';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { todoListState } from '../../store/atoms/Todo';
import { deletedNotes } from '../../store/atoms/DeletedNotes';


function NoteArchivedMap() {
    const archivedTodo = useRecoilValue(archiveNotes)
    const todoList = useRecoilValue(todoListState)
    const deletedTodo = useRecoilValue(deletedNotes)
    const setTodoList = useSetRecoilState(todoListState)
    const setDeletedTodo = useSetRecoilState(deletedNotes)
    const setArchivedTodo = useSetRecoilState(archiveNotes)

    const [expandedNote, setExpandedNote] = useState(archivedTodo[0]?.id);
    const handleNoteClick = (id) => {
        setExpandedNote(id);
    };

    const handleAddUnarchive = (note) => {
        const updatedNote = archivedTodo.filter((note) => note.id !== expandedNote)
        setArchivedTodo(updatedNote)
        setTodoList(prevArr => [note, ...prevArr])
    }

    const handleAddDelete = (note) => {
        const updatedNote = archivedTodo.filter((note) => note.id !== expandedNote)
        setArchivedTodo(updatedNote)
        setDeletedTodo([note, ...deletedTodo])
    }

    useEffect(() => {
        if (archivedTodo.length > 0) {
            setExpandedNote(archivedTodo[0].id);
            console.log(archivedTodo)
        }
    }, [archivedTodo])
    return (
        !(archivedTodo.length > 0) ? (<div className='wrapper'>
            <div className='container'>
                <div className='flex flex-col'>
                    <IconButton>
                        <LightbulbIcon className='text-5xl icon-button' style={{ fontSize: '7rem', marginBottom: '20px' }} />
                    </IconButton>
                    <h3 className='text-2xl' style={{ color: '#91989d', fontFamily: '' }}>Notes you add appear here</h3>
                </div>
            </div>
        </div>) : (
            <div className="wrapper">
                <div className="container">
                    {archivedTodo.map(note => (
                        <div key={note.icon}>
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
                                        <IconButton onClick={() => handleAddUnarchive(note)}>
                                            <UnarchiveIcon fontSize='small' style={{ color: '#fff' }} />
                                        </IconButton>
                                        <IconButton onClick={() => handleAddDelete(note)}>
                                            <DeleteOutlineIcon fontSize='small' style={{ color: '#fff' }} />
                                        </IconButton>
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}

export default NoteArchivedMap
