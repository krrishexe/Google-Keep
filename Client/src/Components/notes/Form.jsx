import React from 'react'
import { useState, useRef, useContext } from 'react';

import { Box, TextField, ClickAwayListener } from '@mui/material';
import { styled } from '@mui/material/styles';

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
`

function Form() {
    const [showTextfield, setShowTextfield] = useState(false)

    const containerRef = useRef(null)

    const onTextAreaClick = () => {
        setShowTextfield(true)
        containerRef.current.style.height = '90px'
    }
    const handleClickAway = () => {
        setShowTextfield(false)
        containerRef.current.style.height = '50px'
    }
    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Container ref={containerRef} className='border text-white'>
                {showTextfield && <TextField
                    placeholder="Title"
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    style={{ marginBottom: 10, color: '#fff' }}
                    // onChange={(e) => onTextChange(e)}
                    name='heading'
                // value={addNote.heading}
                />}
                <TextField
                    placeholder="Take a note..."
                    multiline
                    maxRows={Infinity}
                    variant="standard"
                    InputProps={{ disableUnderline: true }}
                    onClick={onTextAreaClick}
                    // onChange={(e) => onTextChange(e)}
                    name='text'
                // value={addNote.text}
                />

            </Container>
        </ClickAwayListener>
    )
}

export default Form
