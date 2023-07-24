import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Divider } from '@mui/material';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import Nav from 'react-bootstrap/Nav';
// import CustomizedDialogs from './List';
import Folder from './Folder';
import AddIcon from '@mui/icons-material/Add';




export default function BasicMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const [openModal, setOpenModal] = React.useState(false);
  const [openFolder, setOpenFolder] = React.useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AddIcon sx={{color:'black',fontSize:20}}/>
      </Button>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        {/* <Nav.Link href="#" onClick={() => setOpenModal(true)} >
          <MenuItem onClick={handleClose} style={{ width: '200px' }} >
            <FormatListBulletedIcon style={{ marginRight: '20px' }} />
            List
          </MenuItem>
        </Nav.Link> */}
        {/* <Divider /> */}

        <Nav.Link href="#" onClick={() => setOpenFolder(true)}>
          <MenuItem onClick={handleClose} style={{ width: '100px' }}>
            <FolderCopyIcon  />
            Folder
          </MenuItem>
        </Nav.Link>

        <Divider />
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>

      {/* <CustomizedDialogs open={openModal} setOpen={setOpenModal} /> */}
      <Folder open={openFolder} setOpen={setOpenFolder} />
    </div>
  );
}