import { IconButton, circularProgressClasses } from '@mui/material'
import React from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { deletedNotes } from '../../store/atoms/DeletedNotes';
import { archiveNotes } from "../../store/atoms/ArchiveNotes"
import { todoListState } from "../../store/atoms/Todo"

function Notemap({ todoList, expandedNote, handleNoteClick }) {

    const setTodoList = useSetRecoilState(todoListState)
    const [archivedTodo, setArchivedTodo] = useRecoilState(archiveNotes)
    const [deletedTodo, setDeletedTodo] = useRecoilState(deletedNotes)

    const handleAddArchive = (note) => {
        const updatedNote = todoList.filter((note) => note.id !== expandedNote)
        setTodoList(updatedNote)
        setArchivedTodo([note, ...archivedTodo])
    }

    const handleAddDelete = (note) => {
        const updatedNote = todoList.filter((note) => note.id !== expandedNote)
        setTodoList(updatedNote)
        setDeletedTodo([note, ...deletedTodo])
        console.log(deletedTodo)
    }

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
                                    <IconButton onClick={() => handleAddArchive(note)}>
                                        <ArchiveIcon fontSize='small' style={{ color: '#fff' }} />
                                    </IconButton>
                                    <IconButton onClick={() => handleAddDelete(note)}>
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
