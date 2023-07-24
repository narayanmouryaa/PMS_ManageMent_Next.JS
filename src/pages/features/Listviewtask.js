import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Box, FormControlLabel } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import CalendarIcon from '../Screen/subtaskstartcal';
import PersonIcon from '../components/UserIcon';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import FlagIconDropdown from '../Screen/Drop';
// import { Nav } from 'react-bootstrap';
// import TaskModal from './Taskmodal'



const SubtaskList = () => {
    const [subtasks, setSubtasks] = useState([]);
    const [newSubtask, setNewSubtask] = useState('');
    // const [openModal, setOpenModal] = React.useState(false);


    const handleAddSubtask = () => {
        if (newSubtask.trim() !== '') {
            setSubtasks([...subtasks, newSubtask]);
            setNewSubtask('');
        }
    };

    // const handleDeleteSubtask = (index) => {
    //     const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    //     setSubtasks(updatedSubtasks);
    // };




    return (
        <>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <div>
                    <List>
                        {subtasks.map((subtask, index) => (
                            <ListItem key={index}>


                                <FormControlLabel
                                    control={<Checkbox />}
                                // onChange={() => handleDeleteSubtask(index)}

                                />
                                <Avatar sx={{ height: 30, width: 30 }}>A</Avatar>


                                <ListItemText primary={subtask} style={{ marginLeft: '10px' }} />


                            </ListItem>
                        ))}
                    </List>
                    <TextField
                        label="Add Task"
                        sx={{ width:'70vw', borderRadius: '0px' }}

                        //     inputProps={{
                        //     endAdornment :(
                        //         <>
                        //         <Nav.Link href="#" onClick={() => setOpenModal(true)}>
                        //      <Button style={{ color: 'black', display: 'inline' }} >
                        //        value={newSubtask}
                        //      </Button>
                        //    </Nav.Link> 
                        // </>

                        //     )
                        // }}



                        value={newSubtask}

                        onChange={(e) => setNewSubtask(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <>

                                    {/* <Tooltip title="Start Date" placement="top">
                                    <CalendarIcon  />
                                </Tooltip> */}

                                    <Tooltip title="Due Date" placement="top">
                                        <CalendarIcon />
                                    </Tooltip>

                                    <PersonIcon />
                                    <FlagIconDropdown />
                                    <Button variant="contained" onClick={handleAddSubtask} sx={{ padding: '10px', borderRadius: '0px' }}>
                                        Save
                                    </Button>

                                </>
                            )
                        }}
                    />
                </div>

            </Box>
            {/* <TaskModal open={openModal} setOpen={setOpenModal} /> */}


        </>
    );
};

export default SubtaskList;