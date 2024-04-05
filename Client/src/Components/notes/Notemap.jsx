import { IconButton, circularProgressClasses } from '@mui/material'
import { useEffect, useState } from 'react'
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
    const [currentPage, setCurrentPage] = useState(1);


    const notesPerPage = 6;
    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = todoList.slice(indexOfFirstNote, indexOfLastNote);

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
    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('notes')))
    }, [deletedTodo, todoList])

    return (
        <div className="wrapper flex flex-col">
            <div className="container">
                {currentNotes.map(note => (
                    <>
                        <input
                            type="radio"
                            name="slide"
                            id={note.id}
                            checked={expandedNote === note.id}
                            onChange={() => handleNoteClick(note.id)}
                        />

                        <label htmlFor={note.id} className="card" style={{ backgroundImage: `url(${note.img})` }}>
                            <div className="row">
                                {/* <div className="icon">{note.icon}</div> */}
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
            {todoList.length > notesPerPage && <div className='mt-10'>
                <button className='p-3 mr-10  rounded-lg disabled:bg-gray-700 text-gray-400' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    &#8592; Previous
                </button>
                <button className='p-3  rounded-lg disabled:bg-gray-700 text-gray-400' onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(todoList.length / notesPerPage)}>
                    Next &#8594;
                </button>
            </div>}
        </div>
    )
}

export default Notemap
