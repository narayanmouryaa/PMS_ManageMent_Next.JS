import React, { useState } from 'react';
 import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
 import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
 import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
 import HighlightOffIcon from '@mui/icons-material/HighlightOff';
 import { Divider, Menu, MenuItem } from '@mui/material';
// import '../Assets/style/style.css';

const FlagIconDropdown = (props) => {
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  

  const handleFlagSelect = (flag) => {
    setSelectedFlag(flag);
    setAnchorEl(null);
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    handleFlagSelect(null);
  }

  return (
    <div className="flag-icon-dropdown" style={{position:'relative',display:'inline-block'}}>
      <button className="flag-icon-button" style={{display:'flex',alignItems:'center',justifyContent:'center',height:'30px',backgroundColor:'transparent',border:'none',cursor:'pointer'}} onClick={(el) => setAnchorEl(el.currentTarget)}>
        {selectedFlag ? (
          <>
          <span className="selected-flag">{selectedFlag}</span>
          <span style={{position: 'absolute', right: 8, top: -15, border: 'none'}} onClick={handleCloseClick} >
            <HighlightOffTwoToneIcon fontSize='small'   />
           
          </span>
          </>
        ) : (
          <OutlinedFlagIcon style={{color:'grey',border:'1px dashed grey',borderRadius:'50%',fontSize:'40px',padding:'5px'}}/>
        )}
      </button>
        <Menu open={!!anchorEl} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} sx={{zIndex: 10000}}>
            <MenuItem sx={{width: 180}} onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'red',border:'2px solid red',borderRadius:'50%',fontSize:'40px',padding:'5px'}}/>
              )}>
                <AssistantPhotoIcon style={{color:'red',marginRight:'10px'}}/>
              Urgent
            </MenuItem>
            <MenuItem onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'orange',border:'2px solid orange',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'orange',marginRight:'10px'}} />
              High
            </MenuItem>
            <MenuItem onClick={() => handleFlagSelect(<AssistantPhotoIcon style={{color:'blue',border:'2px solid blue',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'blue',marginRight:'10px'}} />
              Normal
            </MenuItem>
            <MenuItem onClick={() => handleFlagSelect( <AssistantPhotoIcon style={{color:'grey',border:'2px solid grey',borderRadius:'50%',fontSize:'40px',padding:'5px'}} />)}>
              <AssistantPhotoIcon style={{color:'grey',marginRight:'10px'}} />
              Low
            </MenuItem>
            <Divider/>
            <MenuItem onClick={() => handleFlagSelect('')}>
              <HighlightOffIcon style={{color:'grey',marginRight:'10px'}} />
              Clear
            </MenuItem>
        </Menu>
    </div>
  );
};

export default FlagIconDropdown;