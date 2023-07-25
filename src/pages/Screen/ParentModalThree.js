import React, { useState } from 'react';
import { Button, Modal, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Close } from '@mui/icons-material';
import Link from 'next/link';
import { size, weight } from "../assets/theme";
import styles from '../../styles/Home.module.css'

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 350,
    bgcolor: 'background.paper',
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
};

const ParentModal = ({ open, setOpen }) => {
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
            // style={{ zIndex: "3000" }}
            >
                <Box sx={style} className={styles.Mainbox}>
                    {/* Back arrow button */}
                    <IconButton
                        sx={{ position: 'absolute', top: '8px', left: '8px' }}
                        onClick={handleClose}
                    >
                        <ArrowBackIosIcon />
                    </IconButton>

                    <Typography sx={{ fontSize: size.font1,
                    fontWeight: weight.medium,}} >
                        What task status do you want ?
                    </Typography>
                    {/* Learn More link */}
                    <Link href="#" color="primary" variant="body1" >
                        Learn More
                    </Link>


                    {/* Close button */}
                    <IconButton
                        sx={{ position: 'absolute', top: '8px', right: '8px' }}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>


                    {/* Some more content at the bottom */}
                    <Box sx={{ width: '100%', mt: 4, display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                width: '45%',
                                height: '40px',
                                borderRadius: '5px',
                                backgroundColor: 'primary.main',
                                display: 'inline-block',
                                marginRight: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white'
                            }}
                        >
                            Use Space statuses
                        </Box>
                        <Box
                            sx={{
                                width: '45%',
                                height: '40px',
                                borderRadius: '5px',
                                display: 'inline-block',
                                fontSize: '15px',
                                fontWeight: 600,
                                border: '1px solid grey',
                                color: 'grey',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}
                        >
                            TO DO
                        </Box>
                    </Box>


                    <Box sx={{ width: '100%', mt: 1, display: 'flex', justifyContent: 'center' }}>
                        <Box
                            sx={{
                                width: '45%',
                                height: '40px',
                                borderRadius: '5px',
                                // backgroundColor: 'primary.main',
                                display: 'inline-block',
                                marginRight: '20px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // color: 'white'
                            }}
                        >
                            Custom
                        </Box>
                        <Box
                            sx={{
                                width: '45%',
                                height: '40px',
                                borderRadius: '5px',
                                display: 'inline-block',
                                fontSize: '15px',
                                fontWeight: 600,
                                border: '1px solid grey',
                                color: 'grey',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'

                            }}
                        >
                            Complete
                        </Box>
                    </Box>






                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={handleClose}
                        sx={{ mt: 4, textTransform: 'none', fontWeight: 500, fontSize: '16px' }}
                    >
                        Save
                    </Button>

                </Box>
            </Modal>

        </div>
    );
};


export default ParentModal;