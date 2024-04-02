import React from 'react'
import { useState, useRef, useContext } from 'react';

import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';
import { todoListState } from '../../store/atoms/Todo';
import { useRecoilState } from 'recoil'
import { v4 as uuid } from 'uuid'

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    border-color: #e0e0e0;
    width: 600px;
    border-radius: 8px;
    min-height: 50px;
    padding: 10px 15px;
    color: #e0e0e0;
`

const note = {
    id: '',
    icon:'',
    name: '',
    description: ''
}

function Form() {

    const [todoList, setTodoList] = useRecoilState(todoListState)
    const [icon,setIcon] = useState(1)
    const [addNote, setAddNote] = useState({ ...note, id: uuid(),icon: icon})

    const [showTextfield, setShowTextfield] = useState(false)

    const containerRef = useRef(null)

    const onTextAreaClick = () => {
        setShowTextfield(true)
        containerRef.current.style.height = '90px'
    }
    const handleClickAway = () => {
        setShowTextfield(false)
        containerRef.current.style.height = '50px'
        setAddNote({ ...note,id: uuid()})
        if (addNote.text || addNote.description) {
            setIcon(icon+1)
            setTodoList((todoList) => [addNote, ...todoList])
            console.log(todoList)
        }
        // console.log(addNote)
    }
    const onTextChange = () => {
        setAddNote({
            ...addNote,icon:icon,
            [event.target.name]: event.target.value
        })
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef} className='border text-white'>
                {showTextfield && <TextField
                    placeholder="Title"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { color: '#fff' } }}
                    style={{ marginBottom: 10 }}
                    onChange={(e) => onTextChange(e)}
                    name='name'
                    value={addNote.name}
                />}
                <TextField
                    placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    inputProps={{ style: { color: '#fff' } }}
                    onClick={onTextAreaClick}
                    onChange={(e) => onTextChange(e)}
                    name='description'
                    value={addNote.description}
                />

            </Container>
        </ClickAwayListener>
    )
}

export default Form
