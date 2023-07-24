import React, { useState } from 'react';
import { Button, Modal, Typography, Box, Card, CardContent, IconButton, TextField, InputLabel, Input, InputAdornment } from '@mui/material';
import { Container, FormControl } from 'react-bootstrap';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Close } from '@mui/icons-material';
import { size, weight } from "../../store/theme";


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
  // const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [displayedName, setDisplayedName] = useState('');
  const [namesList, setNamesList] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // const handleDisplayButtonClick = () => {
  //   setDisplayedName(name);
  // };

  const handleAddName = () => {
    if (name.trim() !== '') {
      setNamesList((prevNames) => [...prevNames, name]);
      setName(''); // Clear the input field after adding the name
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddName();
    }
  };

  const handleRemoveName = (nameToRemove) => {
    setNamesList((prevNames) =>
      prevNames.filter((name) => name !== nameToRemove)
    );
  };

  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
      // style={{ zIndex: "3000" }}
      >
        <Box sx={style}>
          {/* Back arrow button */}
          <IconButton
            sx={{ position: 'absolute', top: '8px', left: '8px' }}
            onClick={handleClose}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Typography  sx={{ fontSize: size.font1,
                    fontWeight: weight.medium, }} >
            Your tasks live in list
          </Typography>

          {/* Close button */}
          <IconButton
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          {/* Content */}
          {/* <TextField
            label="Enter Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            sx={{ mt: 4 }}
          /> */}
          <Box>
            <InputLabel htmlFor="input-with-icon-adornment" style={{  textAlign: 'left' }}>
              List name
            </InputLabel>
            <Input
              style={{ width: '650px' }}
              id="input-with-icon-adornment"
              placeholder="ENTER LIST NAME"
              type='text'
              value={name}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              // startAdornment={
              //   <InputAdornment position="start" >

              //   </InputAdornment>
              // }
            />
          </Box>



          {/* Displayed names */}
          {namesList.length > 0 && (
            <Box sx={{ mt: 2 }}>
              {/* <strong>Entered Names:</strong> */}
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {namesList.map((n, index) => (
                  <Box key={index} sx={{ mx: 1 }}>
                    <Button variant='contained' style={{ textTransform: 'none' }}>
                      {n}
                      <IconButton
                        size="small"
                        onClick={() => handleRemoveName(n)}
                      >
                        <Close sx={{ color: 'white', ml: 1 }} />
                      </IconButton>
                    </Button>
                  </Box>

                ))}
              </Box>
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleClose}
            sx={{ mt: 4, textTransform: 'none', fontWeight: 500, fontSize: '16px' }}
          >
            Done
          </Button>








        </Box>
      </Modal>

    </div>
  );
};


export default ParentModal;