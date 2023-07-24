import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import TextEditor from './TextEditor';
import FlagIconDropdown from './Drop';
import IconDropdown from '../features/PendingDrop';
import MessageBox from '../features/Commentbox';
import CalendarIcon from '../components/Calendaricon';
import Stopwatch from './TimeTracker';
import CalendarDueIcon from '../components/Calendarduedate';
import PersonIcon from '../components/UserIcon';
import SubtaskList from './subtask';
// import { useRef } from 'react';
const style = {
    position: 'absolute',
    top:"50%",
    left:"50%",
    transform: 'translate(-50%, -50%)',
    // width: 1500,
    width:'98%',
    // height: 650,
    height:'92%',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                        // display: 'inline-block'
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};




export default function TaskModal({ open, setOpen }) {

    const handleClose = (event, reason) => {
        if (reason !== undefined) {
            if (reason !== "backdropClick") {
                setOpen(false);
            }
        }
        else {
            setOpen(false);
        }
   };
   
    return (
        <div>

            <BootstrapDialog
                onClose={handleClose}

                aria-labelledby="customized-dialog-title"
                open={open}
            >

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    style={{ zIndex: '4000' }}
                >

                    <Container style={{ display: 'flex', justifyContent: 'center' }} >

                        <Card sx={style} >
                            <Box>
                                <BootstrapDialogTitle sx={{ fontSize: 40, fontWeight: 600 }} id="customized-dialog-title" onClose={handleClose}>
                                    <Typography>Space name <ArrowForwardIosIcon style={{ fontSize: '15px' }} />  Folder Name <ArrowForwardIosIcon style={{ fontSize: '15px' }} /> Task Name</Typography>
                                </BootstrapDialogTitle>
                            </Box>

                            <Divider component="ul" clearing />
                            <Box style={{ display: 'flex' }} >

                                <Box style={{ width: '800px', height: '500px' }} >
                                    <Box style={{ display: 'flex' }}>

                                        <Box>
                                            <IconDropdown />
                                        </Box>
                                        <Box style={{ marginTop: '28px', marginLeft: '20px' }}>

                                            <PersonIcon />
                                        </Box>
                                        <Box style={{ marginTop: '35px', marginLeft: '20px' }}>
                                            <FlagIconDropdown />
                                        </Box>

                                    </Box>
                                    <Divider component='ul' clearing style={{ marginTop: '15px' }} />



                                    <Box className='box-container' 
                                    // style={{ width: '800px', height: '500px',backgroundColor:'red' }}
                                    // sx={{backgroundColor:'red'}}
                                    sx={{overflowY:'scroll',width:800,height:500}}
                                     >

                                        <Box mt={4} ml={4} >

                                            <FormControl variant="standard" >
                                                <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "500", fontSize: '22px', color: 'black'}}>
                                                    Task Name
                                                </InputLabel>
                                                <Input
                                                    sx={{ width: 700,mt:4 }}
                                                    id="input-with-icon-adornment"
                                                    placeholder="Enter Task Name"
                                                    type='text'
                                                    startAdornment={
                                                        <InputAdornment position="start" >

                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Box>


                                        <Typography 
                                         sx={{mt:4,ml:4,fontWeight:'500'}}
                                        > Task Description </Typography>
                                        <Box >
                                            <TextEditor />
                                        </Box>


                                        <Box mt={4} ml={4}>

                                            <FormControl variant="standard" >
                                                <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "500", fontSize: '20px', color: 'black' }}>
                                                    Attachments
                                                </InputLabel>
                                                <Input
                                                    style={{ width: '700px' }}
                                                    id="input-with-icon-adornment"
                                                    placeholder="Upload your attachments"
                                                    type='file'
                                                    startAdornment={
                                                        <InputAdornment position="start">

                                                        </InputAdornment>
                                                    }
                                                />
                                            </FormControl>
                                        </Box>



                                        <Box mt={4} ml={4}>
                                            <SubtaskList />
                                        </Box>

                                    </Box>

                                </Box>


                                <Box style={{ height: '585px', width: '700px' }}>
                                    <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '20px', height: '60px' }} >
                                        <Typography style={{ fontSize: '11px', color: 'grey' }}>
                                            CREATED  <br /> <span style={{ color: 'blue' }}>june 28,00:38 PM</span>
                                        </Typography>

                                        <Divider orientation="vertical" clearing flexItem style={{ marginLeft: '20px', marginRight: '20px' }} />

                                        <Box >
                                            <Stopwatch />
                                        </Box>

                                        <Divider orientation="vertical" clearing flexItem style={{ marginLeft: '20px' }} />
                                        <Box style={{ marginLeft: '15px' }}>
                                            <CalendarIcon />
                                        </Box>
                                        <Divider orientation="vertical" clearing flexItem style={{ marginLeft: '20px' }} />

                                        <Box style={{ marginLeft: '15px' }}>
                                            <CalendarDueIcon />
                                        </Box>

                                    </Box>
                                    <Divider component='ul' clearing style={{ marginTop: '22px' }} />


                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', marginTop: '70px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>

                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>

                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>

                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>

                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>

                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>
                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>

                                    <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                                        <Box style={{ fontSize: '14px' }} >
                                            <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                                            Created this task
                                        </Box>
                                        <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                                            1 hour ago
                                        </Box>
                                    </Box>
                                    <Box style={{
                                        marginTop: '180px', boxShadow: " 8px 0 0 0 2px rgba(0, 0, 0, 0.6)",
                                    }} >
                                        <MessageBox />
                                    </Box>

                                </Box>


                            </Box>

                        </Card>
                    </Container>
                </Modal>
            </BootstrapDialog>
        </div>
    );
}