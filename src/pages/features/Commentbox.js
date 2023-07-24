import React, { useState } from 'react';
// import '../Assets/style/style.css';
import { Popover, Box, Tooltip} from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicIcon from '@mui/icons-material/Mic';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DescriptionIcon from '@mui/icons-material/Description';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';

const MessageBox = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [comment, setComment] = useState('');

    // const togglePopup = () => {
    //     setPopupVisible(!popupVisible);
    // };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    return (
        <>
            <div className="message-box" style={{position:'relative',width:'700px',height:'80px',padding:'20px',cursor:'pointer',bottom:'0px',backgroundColor:'#f0f0f0'}}  onClick={(e) => setAnchorEl(e.currentTarget)}>
                <div className="message" style={{ color: 'grey' }}  >Comment or type / for Commands</div>
            </div>
            <Popover sx={{ zIndex: 10000, width: '100%',height:'50%' }} open={!!anchorEl} anchorEl={anchorEl} onClose={() => setAnchorEl(null)} anchorOrigin={{ vertical: 'bottom' }} transformOrigin={{ vertical: 'bottom' }}>
                <textarea
                    className="comment-textarea"
                    placeholder="Write a comment..."
                    value={comment}
                    onChange={handleCommentChange}
                    style={{ width:700,height:200,resize:"none",border:"none" }}
                />
                <Box style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <SentimentSatisfiedAltIcon style={{ marginLeft: '20px' }} />
                        <MicIcon style={{ marginLeft: '15px' }} />
                        <AttachFileIcon style={{ marginLeft: '15px' }} />
                        <DescriptionIcon style={{ marginLeft: '15px' }} />
                        
                        <Tooltip title="Add" placement="top">
                            <VideoLabelIcon style={{ marginLeft: '15px' }} />
                        </Tooltip>

                    </Box>


                    <button style={{ position:'absolute',bottom:0,right:0,marginBottom:'10px',padding:'10px',marginRight:'10px',border: 'none', backgroundColor: 'blue', color: 'white', fontWeight: '600', borderRadius: '5px' }} className="comment-button" onClick={() => setAnchorEl(null)}>
                        Comment
                    </button>
                </Box>
            </Popover>
        </>
    );
};

export default MessageBox;
