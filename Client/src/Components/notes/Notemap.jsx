import { IconButton, circularProgressClasses } from '@mui/material'
import { useEffect, useState } from 'react'
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { deletedNotes } from '../../store/atoms/DeletedNotes';
import { archiveNotes } from "../../store/atoms/ArchiveNotes"
import { todoListState } from "../../store/atoms/Todo"
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Notemap({ todoList, expandedNote, handleNoteClick }) {

    const setTodoList = useSetRecoilState(todoListState)
    const [archivedTodo, setArchivedTodo] = useRecoilState(archiveNotes)
    const [deletedTodo, setDeletedTodo] = useRecoilState(deletedNotes)
    const [currentPage, setCurrentPage] = useState(1);
    const [editDialogOpen, setEditDialogOpen] = useState(false);
    const [editedNote, setEditedNote] = useState(null);


    const notesPerPage = 6;
    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = todoList.slice(indexOfFirstNote, indexOfLastNote);

    const handleAddArchive = (note) => {
        const updatedNote = todoList.filter((note) => note.id !== expandedNote)
        setTodoList(updatedNote)
        setArchivedTodo([note, ...archivedTodo])
    }
    const handleEdit = (note) => {
        setEditedNote(note);
        setEditDialogOpen(true);
    }

    const handleNoteChange = (event) => {
        setEditedNote({
            ...editedNote,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditSubmit = () => {
        const updatedNotes = todoList.map((note) =>
            note.id === editedNote.id ? editedNote : note
        );
        setTodoList(updatedNotes);
        setEditDialogOpen(false);
    };

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
                                <div className="description">
                                    <h4>{note.name}</h4>
                                    <p>{note.description}</p>
                                </div>
                                <div className='icon mr-4'>
                                    <IconButton onClick={() => handleEdit(note)}>
                                        <EditIcon fontSize='small' style={{ color: '#fff' }} />
                                    </IconButton>
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
                <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
                    <DialogTitle style={{ background: '#37383a', borderTop:'1px solid white'}} className='text-white'>Edit Note</DialogTitle>
                    <DialogContent style={{background: '#37383a',color:'white'}} >
                        <DialogContentText style={{ marginTop: '10px', color:'white'}}>
                            Please enter the new title and description for the note.
                        </DialogContentText>
                        <TextField
                            style={{ marginTop: '10px', color:'white'}}
                            autoFocus
                            variant='filled'
                            margin="normal"
                            name="name"
                            label="Title"
                            type="text"
                            fullWidth
                            value={editedNote?.name}
                            onChange={handleNoteChange}
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                        />
                        <TextField
                            margin="dense"
                            variant='filled'
                            name="description"
                            label="Description"
                            type="text"
                            fullWidth
                            value={editedNote?.description}
                            onChange={handleNoteChange}
                            InputProps={{
                                style: { color: 'white' }
                            }}
                            InputLabelProps={{
                                style: { color: 'white' }
                            }}
                        />
                    </DialogContent>
                    <DialogActions style={{background: '#37383a',borderBottom:'1px solid white'}}>
                        <Button style={{color:'#fff'}} onClick={() => setEditDialogOpen(false)}>Cancel</Button>
                        <Button style={{color:'#fff'}} onClick={handleEditSubmit}>Save</Button>
                    </DialogActions>
                </Dialog>
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
