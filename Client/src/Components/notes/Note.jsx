import React, { useState, useEffect } from 'react'
import "./Note.css"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { IconButton } from '@mui/material';
import { todos } from '../../store/selectors/Todos';
import { useRecoilValue } from 'recoil';
import Notemap from './Notemap';


function Note() {

    const todoList = useRecoilValue(todos);
    const [expandedNote, setExpandedNote] = useState(todoList[0]?.id);

    const handleNoteClick = (id) => {
        setExpandedNote(id);
    };
    useEffect(() => {
        if (todoList.length > 0) {
            setExpandedNote(todoList[0].id);
        }
    }, [todoList]);

    return (
        !(todoList.length > 0) ? (<div className='wrapper'>
            <div className='container'>
                <div className='flex flex-col'>
                    <IconButton>
                        <LightbulbIcon className='text-5xl icon-button' style={{ fontSize: '7rem', marginBottom: '20px' }} />
                    </IconButton>
                    <h3 className='text-2xl' style={{ color: '#91989d', fontFamily: '' }}>Notes you add appear here</h3>
                </div>
            </div>
        </div>)
            :
            <Notemap todoList={todoList} expandedNote={expandedNote} handleNoteClick={handleNoteClick} />

    )
}

export default Note