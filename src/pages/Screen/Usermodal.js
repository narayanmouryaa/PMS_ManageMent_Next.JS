import React, { useState, useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Typography

} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';



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



function UserModal({ open, setOpen }) {
  // const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tableVisible, setTableVisible] = useState(false);

  const handleNext = () => {
    setTableVisible(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName('');
    setEmail('');
    setPassword('');
    setTableVisible(false);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <div>
      {/* <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button> */}

{/* <BootstrapDialog
                onClose={handleClose}

                aria-labelledby="customized-dialog-title"
                open={open}
            > */}



      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle style={{ display: 'flex', justifyContent: 'center' }} onClose={handleClose}>User Details</DialogTitle>
        <DialogContent>
          {!tableVisible ? (
            <>
              <TextField
                autoFocus
                margin="dense"
                label="Name"
                type="text"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="dense"
                label="Password"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          ) : (
            <TableContainer>

              <Typography style={{ fontSize: '25px', fontWeight: '600' }}>Permission</Typography>
              <Table style={{ border: '1px solid black' }}>
                <TableHead>
                  <TableRow style={{ border: '1px solid black' }}>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', fontSize: '20px' }}>Permission Type</TableCell>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', textAlign: 'center', fontSize: '20px' }}>View</TableCell>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', textAlign: 'center', fontSize: '20px' }}>Add</TableCell>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', textAlign: 'center', fontSize: '20px' }}>Edit</TableCell>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', textAlign: 'center', fontSize: '20px' }}>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow style={{ border: '1px solid black' }}>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', fontSize: '20px' }}>Space</TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                  </TableRow>
                  <TableRow style={{ border: '1px solid black' }}>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', fontSize: '20px' }}>Folder</TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                  </TableRow>
                  <TableRow style={{ border: '1px solid black' }}>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', fontSize: '20px' }}>Task</TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                  </TableRow>

                  <TableRow style={{ border: '1px solid black' }}>
                    <TableCell style={{ border: '1px solid black', fontWeight: '600', fontSize: '20px' }}>Sub_task</TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                    <TableCell style={{ border: '1px solid black' }}><Checkbox style={{ display: 'flex' }} /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
        <DialogActions>
          {!tableVisible ? (
            <Button onClick={handleNext} style={{ backgroundColor: 'blue', color: 'white' }} fullWidth color="primary">
              Next
            </Button>
          ) : (
            <Button onClick={handleClose} style={{ backgroundColor: 'blue', color: 'white' }} fullWidth color="primary">
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
      {/* </BootstrapDialog> */}
    </div>
  );
}

export default UserModal;