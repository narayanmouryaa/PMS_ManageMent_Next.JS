import React from 'react';
import { Button, Box, Typography } from '@mui/material';
// import FixedSidenav from '../components/Fixedsidenav';
// import Navbar from "../components/Navbar";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Settingdrawer from './Settingdrawer';
// import Divider from '@mui/material/Divider';




const SettingPage = () => {
    const handleCancel = () => {
        // Handle cancel logic here
    };

    const handleSave = () => {
        // Handle save logic here
    };

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <Settingdrawer />
                <Container >
                    <Box >
                        <Box mt={4} sx={{ display: 'flex', justifyContent: 'space-around' ,width:'100%'}}>
                            <Box >
                                <Typography variant="h4" style={{ fontWeight: '600', marginBottom: '40px' }}>My Settings</Typography>
                                <Avatar style={{ width: '150px', height: "150px" }} alt="Remy Sharp" src="/Images/man1.jpg" />
                            </Box>
                            <Box >
                                <Box mt={12} sx={{ width:700}} >
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            Full Name
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Vishal Kashyap"
                                            startAdornment={
                                                <InputAdornment position="start">

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>

                                <Box mt={3}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            Email
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Email"
                                            type='email'
                                            startAdornment={
                                                <InputAdornment position="start">

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>

                                </Box>

                                <Box mt={3}>
                                    <FormControl variant="standard" fullWidth>
                                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                                            Password
                                        </InputLabel>
                                        <Input
                                            id="input-with-icon-adornment"
                                            placeholder="Enter Password"
                                            type='password'
                                            startAdornment={
                                                <InputAdornment position="start">

                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>

                        <Box mt={4} boxShadow={6} style={{ display: 'flex', justifyContent: "space-between", alignItems: 'flex-end', backgroundColor: 'whitesmoke', padding: '15px', marginTop: '255px' }}>
                            <Button style={{ color: 'black' }} onClick={handleCancel} >Cancel</Button>
                            <Button variant="contained" color="primary" onClick={handleSave} sx={{ marginLeft: 2 }}>Save Changes</Button>
                        </Box>
                    </Box>
                </Container >
            </Box>



        </>
    );
};

export default SettingPage;