import { Box, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled';
import { deletedNotes } from '../../store/atoms/DeletedNotes';
import { useSetRecoilState } from 'recoil';
import NoteDeletedMap from './NoteDeletedMap';
import Note from '../notes/Note';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

function DeleteNote() {

    const setDeletedNotes = useSetRecoilState(deletedNotes)

    return (
        <ThemeProvider theme={createTheme()}>
            <div>
                <Box component="main" sx={{ flexGrow: 1, p: 3, width: '98vw', textAlign: 'center' }}>
                    <DrawerHeader />
                    {/* add this in every route */}
                    <Note />

                </Box>
            </div>
        </ThemeProvider>
    )
}

export default DeleteNote
