import React, { useState,useEffect } from 'react'
import "./Note.css"
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { IconButton } from '@mui/material';
import { todos } from '../../store/selectors/Todos';
import { useRecoilValue } from 'recoil';

// const todoList = [
//     { id: 'c1', icon: '1', title: 'Winter', description: 'Winter has so much to offer - creative activities' },
//     { id: 'c2', icon: '2', title: 'Digital Technology', description: 'Gets better every day - stay tuned' },
//     // add more todoList as needed
// ];

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
            (<div className="wrapper">
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
                                    <div className="description">
                                        <h4>{note.title}</h4>
                                        <p>{note.description}</p>
                                    </div>
                                </div>
                            </label>
                        </>
                    ))}
                </div>
            </div>)

    )
}

export default Note