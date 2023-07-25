import React, { useState } from 'react';
import { Button, Modal, Typography, Box, Card, CardContent, IconButton, TextField, InputLabel, Input, InputAdornment } from '@mui/material';
// import { Container, FormControl } from 'react-bootstrap';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Close, Email, LockOutlined } from '@mui/icons-material';
import LinkIcon from '@mui/icons-material/Link';
import { size, weight } from "../assets/theme";
import styles from '../../styles/Home.module.css'

const style = {
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 400,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  // alignItems: 'center',
  justifyContent: 'space-between',
};

const ParentModalTwo = ({ open, setOpen }) => {
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
//   const handleInputChange = (event) => {
//     setName(event.target.value);
//   };

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
        <Box sx={style} className={styles.Mainbox}>
          {/* Back arrow button */}
          <IconButton
            sx={{ position: 'absolute', top: '8px', left: '8px' }}
            onClick={handleClose}
          >
            <ArrowBackIosIcon />
          </IconButton>

          <Typography sx ={{fontSize: size.font1,
                    fontWeight: weight.medium, textAlign:'center'}}
           >
           Who is this folder for ?
          </Typography>

          {/* Close button */}
          <IconButton
            sx={{ position: 'absolute', top: '8px', right: '8px' }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>

          {/* Content */}
          <form style={{ width: '100%' }}>
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              placeholder="Enter your email"
            //   value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mt: 4, width: '100%' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                    //   onClick={handleInvite}
                    >
                      Invite
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </form>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              mt: 2,
            }}
          >
            <Button sx={{textTransform:'none',color:'black',mr:1}}> <LinkIcon/>Private Link</Button>
            <Button sx={{textTransform:'none',color:'black'}} variant="outlined">Copy Link</Button>
          </Box>
          
          <Button
            variant="outlined"
            fullWidth
            sx={{ mt: 4 ,textTransform:'none',color:'black'}}
          >
            <LockOutlined sx={{ mr: 1,color:'black'}} />
             Make Private
          </Button>


          

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


export default ParentModalTwo;