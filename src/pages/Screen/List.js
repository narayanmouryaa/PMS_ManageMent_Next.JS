import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:750,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
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

export default function CustomizedDialogs({ open, setOpen }) {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };
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
                            <CardContent>
                                <BootstrapDialogTitle sx={{ fontSize: 40, fontWeight: 600 }} id="customized-dialog-title" onClose={handleClose}>
                                    Create List
                                </BootstrapDialogTitle>


                                <Box mt={2}>

                                    <FormControl variant="standard" >
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            List Name
                                        </InputLabel>
                                        <Input
                                            style={{ width: '420px' }}
                                            sx={{width:600}}
                                            id="input-with-icon-adornment"
                                            placeholder="Enter List Name"
                                            type='text'
                                            startAdornment={
                                                <InputAdornment position="start" >

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>


                                <Box mt={5}>

                                    <FormControl variant="standard" >
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            List description
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Write something about your list..."
                                            type='text'
                                            style={{ width: '420px' }}
                                            startAdornment={
                                                <InputAdornment position="start" >

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>

                                <Box mt={3}>

                                    <FormControl variant="standard" >
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            Attachments
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Upload your attachment"
                                            type='file'
                                            style={{ width: '420px', paddingBottom: '10px' }}
                                            startAdornment={
                                                <InputAdornment position="start" >

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>

                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style={{ marginTop: '25px' }}
                                    >
                                        <Typography style={{ paddingTop: '7px', paddingRight: '25px' }}>Share List With</Typography>
                                        <FormControlLabel value="Workspace" control={<Radio />} label="AKM Workspace" />
                                        <FormControlLabel value="private" control={<Radio />} label="Private" />

                                    </RadioGroup>
                                </FormControl>
                                <Box mt={3}>

                                    <FormControl variant="standard" >
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            Space Color
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Enter Space Color Code"
                                            type='text'
                                            style={{ width: '640px' }}

                                            startAdornment={
                                                <InputAdornment position="start" >

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </CardContent>
                            <Button variant='contained' style={{ width: '650px', textAlign: "center" }}>Create List</Button>
                        </Card>
                    </Container>
                </Modal>
            </BootstrapDialog>
        </div>
    );
}