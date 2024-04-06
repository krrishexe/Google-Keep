import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from "../assets/icons8-diary-100.png"
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ReplayIcon from '@mui/icons-material/Replay';
import Tooltip from '@mui/material/Tooltip';
import ViewStreamIcon from '@mui/icons-material/ViewStream';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListComponent from './ListComponent';
import AppBar from '@mui/material/AppBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Notes from './notes/Notes';
import DeleteNote from './delete/DeleteNote';
import ArchivedNotes from './archived/ArchivedNotes';
import {useEffect} from 'react';


const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const App = styled(AppBar)`
    z-index: 1201;
    height: 70px;
    background: #202124;
`;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: ' #525355',
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2, 60, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];





export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const handleDrawer = () => {
        setOpen(prevState => !prevState);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };


    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Router>
            <Box sx={{ display: 'flex ' }}>
                <App open={open} style={{ background: '#202124' }} className='border-b border-gray-500'>
                    <Toolbar className='flex justify-between'>
                        <div className='flex justify-center items-center '>
                            <IconButton
                                color="inherit"
                                onClick={handleDrawer}
                                edge="start"
                                sx={{
                                    marginRight: 3,
                                    // marginLeft: 2,
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <img src={logo} alt="" height={'48px'} width={'48px'} style={{ marginRight: '20px' }} />
                            <Typography variant="h5" noWrap component="div" style={{
                                fontFamily: "Montserrat Alternates", fontWeight: 700,
                                fontStyle: 'normal'
                            }}>
                                Journal
                            </Typography>
                        </div>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                        <div>
                            <Tooltip title="Refresh">
                                <IconButton className='icon-button'>
                                    <ReplayIcon className='icon-button' style={{ marginRight: '10px' }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="List View">
                                <IconButton className='icon-button'>
                                    <ViewStreamIcon className='icon-button' style={{ marginRight: '10px' }} />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Settings">
                                <IconButton className='icon-button'>
                                    <SettingsIcon className='icon-button' style={{ marginRight: '10px' }} />
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div className='flex'>
                            <Tooltip title="Google Apps" >
                                <IconButton >
                                    <AppsIcon style={{ color: '#fff' }} className='mr-4' />
                                </IconButton>
                            </Tooltip>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Krish Yadav" src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </div>
                    </Toolbar>
                </App>
                <Drawer variant="permanent" open={open} sx={{ background: "#202124" }}>
                    <DrawerHeader style={{ background: '#202124' }}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon className='text-white' />}
                        </IconButton>
                    </DrawerHeader>
                    {/* <Divider /> */}
                    <ListComponent />
                </Drawer>
                <Routes>
                    <Route path="/" element={<Notes />} />
                    <Route path="/bin" element={<DeleteNote />} />
                    <Route path="/archived" element={<ArchivedNotes />} />

                </Routes>
            </Box>
        </Router>
    );
}