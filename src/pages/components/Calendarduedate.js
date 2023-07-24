import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, Menu } from '@mui/material';

const CalendarIcon = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const toggleCalendar = (el) => {
    setAnchorEl(el.currentTarget)
  };

  return (
    <div className="calendar-icon-container">
      
        <div>
          
          
          <button style={{ border: 'none', backgroundColor: 'white' }} className="change-date-btn" onClick={toggleCalendar}>
           {selectedDate ? (
            <>
            <h5 style={{ marginBottom: '0px', fontSize: '11px', color: 'grey' }}>START DATE</h5>
            <span>
            <p style={{ fontSize: '15px',marginBottom:'0px' }}>{selectedDate.toLocaleDateString()}</p>
            <p style={{fontSize:'12px'}}>{selectedDate.toLocaleTimeString()}</p>
            </span>
            </>
            
           ):(
            <CalendarMonthIcon style={{ borderRadius: '50%', border: '1px solid black', fontSize: '35px', padding: '5px' }} />
           )}
            
          </button>
           </div>
       
       
      
      <Menu open={!!anchorEl} anchorEl={anchorEl} sx={{ zIndex: 10000, padding: 0 }}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateSelect}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          timeCaption="Time"
          dateFormat="MMMM d, yyyy h:mm aa"
          inline
        />
        <div>
          <Button onClick={() => setAnchorEl(null)} style={{backgroundColor:'blue',color:'white',marginLeft:'10px'}}>
            Submit
          </Button>
        </div>
      </Menu>
    </div>
  );
};

export default CalendarIcon;
