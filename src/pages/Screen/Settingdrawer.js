import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import Nav from 'react-bootstrap/Nav';

const drawerWidth = "260px";

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function Settingdrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);



    return (
        <>

            <Box sx={{ display: 'flex'}}>
                <CssBaseline />
                <Drawer
                    className='draw_container'
                    sx={{
                        width: drawerWidth,

                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            position: 'relative',
                            display: 'flex',
                            left: '60px',

                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <Nav.Link href="/" >
                            <IconButton onClick={() => setOpen(!open)}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                <Typography style={{ marginLeft: '15px', color: 'grey' }}>Back</Typography>
                            </IconButton>
                        </Nav.Link>
                    </DrawerHeader>


                    <Typography style={{ fontSize: '20px', marginLeft: '25px', marginTop: '30px' }}>
                        My Settings
                    </Typography>
                </Drawer>
                
            </Box>
        </>
    );
}