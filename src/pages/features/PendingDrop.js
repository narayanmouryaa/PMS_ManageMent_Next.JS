import React, { useState } from 'react';
//  import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
// import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// import { Divider } from '@mui/material';
// import '../Assets/style/style.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography, Box,Divider, Menu, MenuItem } from '@mui/material';


const IconDropdown = () => {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFlagSelect = (flag) => {
    setSelectedFlag(flag);
    setAnchorEl(false);
  };

  return (
    <div className="flag-icon-drpdown" style={{position:'relative',display:'inline-block'}}>
      <button style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'transparent',border:'none',cursor:'pointer',height:'30px'}} className="flag-icon-buton" onClick={(el) => setAnchorEl(el.currentTarget)}>
        {selectedFlag ? (
          <span className="selectd-flag">{selectedFlag}</span>
        ) : (
          // <OutlinedFlagIcon style={{color:'grey',border:'2px dashed grey',borderRadius:'50%',fontSize:'40px',padding:'5px'}}/>
          <>
            <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '70px', marginLeft: '30px', width: '150px', height: '30px', border: '1px solid black', backgroundColor: 'White', borderRadius: '5px' }}>
              <Typography >Status</Typography>
              <KeyboardArrowDownIcon style={{ backgroundColor: 'white' }} />
            </Box>
          </>
        )}
      </button>
        <Menu open={!!anchorEl} anchorEl={anchorEl} sx={{zIndex: 10000}}  onClose={() => setAnchorEl(null)}>
            <MenuItem onClick={() => handleFlagSelect(<Box style={{ color: 'white', marginLeft: '30px', marginTop: '70px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px', height: '30px', backgroundColor: 'green', borderRadius: '5px' }}>
              <Typography >Complete</Typography>
              <KeyboardArrowDownIcon style={{color:'black', backgroundColor: 'white' }} />
            </Box>)}>
              <Box className='Box1' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px', height: '30px', backgroundColor: 'green', color: 'white', borderRadius: '5px' }}>
                <Typography >Complete</Typography>
              </Box>
            </MenuItem>
            {/* <MenuItem onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'orange',border:'2px solid orange',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'orange',marginRight:'10px'}} />
             Pending
            </MenuItem> */}
            <MenuItem onClick={() => handleFlagSelect(<Box style={{ marginLeft: '30px', marginTop: '70px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px', height: '30px', backgroundColor: '#ff9100', borderRadius: '5px' }}>
              <Typography >Pending</Typography>
              <KeyboardArrowDownIcon style={{ backgroundColor: 'white' }} />
            </Box>)}>
              <Box className='Box1' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px', height: '30px', backgroundColor: '#ff9100', borderRadius: '5px' }}>
                <Typography >Pending</Typography>
              </Box>
            </MenuItem>
            {/* <MenuItem onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'blue',border:'2px solid blue',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'blue',marginRight:'10px'}} />
              In Progress 
            </MenuItem> */}

            <MenuItem onClick={() => handleFlagSelect(<Box style={{ marginLeft: '30px', marginTop: '70px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px', height: '30px',backgroundColor: 'grey', borderRadius: '5px' }}>
              <Typography >In Progress</Typography>
              <KeyboardArrowDownIcon style={{ backgroundColor: 'white' }} />
            </Box>)}>
              <Box className='Box1' style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '150px',height:'30px', backgroundColor: 'grey', borderRadius: '5px' }}>
                <Typography >In Progress</Typography>
              </Box>
            </MenuItem>
            {/* <MenuItem onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{ color: 'grey', border: '2px solid grey', borderRadius: '50%', fontSize: '40px', padding: '5px' }} />)}>
              <AssistantPhotoIcon style={{ color: 'grey', marginRight: '10px' }} />
              Removed
            </MenuItem> */}
            <Divider />
        </Menu>
    </div>
  );
};

export default IconDropdown;