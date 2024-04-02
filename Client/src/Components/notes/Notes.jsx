import { Box, ThemeProvider, createTheme } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'
import styled from '@emotion/styled';
import Form from './Form';

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

function Notes() {

    return (
        <ThemeProvider theme={createTheme()}>
            <div>
                <Box component="main" sx={{ flexGrow: 1, p: 3, width: '98vw', textAlign: 'center', marginTop: '20px' }}>
                    <DrawerHeader />
                    {/* add this in every route */}
                    <Form />

                </Box>
            </div>
        </ThemeProvider>
    )
}

export default Notes