import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const listItems = [
    {
        text: 'Notes',
        icon: <LightbulbIcon />,
        link: '/'
    },
    {
        text: 'Reminders',
        icon: <NotificationsIcon />,
    },
    {
        text: 'Edit Labels',
        icon: <EditIcon />,
    },
    {
        text: 'Archive',
        icon: <ArchiveIcon />,
        link: '/archived'
    },
    {
        text: 'Bin',
        icon: <DeleteOutlineIcon />,
        link: '/bin'
    },

]

function ListComponent() {
    return (
        <div>
            <List style={{ background: '#202124', height: '1224px' }} >
                {listItems.map((text, index) => (
                    <ListItem key={text.text} disablePadding sx={{ display: 'block' }}>
                        <Link to={text.link}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: open ? 'white' : '#e2e2e5',
                                    }}
                                >
                                    {text.icon}
                                </ListItemIcon>
                                <ListItemText primary={text.text} sx={{ opacity: open ? 1 : 0, color: '#e2e2e5' }} className='icon-button' />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default ListComponent
