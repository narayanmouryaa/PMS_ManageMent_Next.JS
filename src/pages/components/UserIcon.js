import React, { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import { Menu, MenuItem } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const personData = [
  { id: 1, name: 'John Doe', icon: "../assets/images/Person1.jpg" },
  { id: 2, name: 'Jane Smith', icon: './Images/Person2.jpg' },
  { id: 3, name: 'David Johnson', icon: './Images/Person3.jpg' },
  { id: 4, name: 'Jass', icon: './Images/Person4.jpg' }
];

const PersonIcon = () => {
  const [modelAnchor, setModalAnchor] = useState(null);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(personData);

  const handlePersonSelect = (person) => {
    setSelectedPersons([...selectedPersons, person]);
    setModalAnchor(null);
  };
 
  const handleUnselectClick = (event, person) => {
    setSelectedPersons(prevState => prevState.filter(user => user.id !== person.id))
  }

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  useEffect(() => {
    setFilteredPersons(
      personData.filter((person) => !selectedPersons.map(({id}) => id).includes(person.id) && person.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  }, [selectedPersons, searchQuery, setFilteredPersons])

  const renderPersonIcons = () => {
    const personsToRender = filteredPersons;
    return personsToRender.map((person) => (
      <MenuItem
        key={person.id}
        className="person-item"
        onClick={() => handlePersonSelect(person)}
      >
        {/* <img style={{ width: '45px', height: '45px', borderRadius: '50%', margin: '5px' }} src={person.icon} alt={person.name} /> */}
        <span style={{ cursor: 'pointer' }}>{person.name}</span>
      </MenuItem>
    ));
  };

  return (
    <div className="person-icon-container" style={{cursor:'pointer'}}>
      <div className="person-icon" onClick={(el) => setModalAnchor(el.currentTarget)}>
        {selectedPersons.length > 0 ? 
        <>
          {selectedPersons.map((selectedPerson) => 
          <>
          <span style={{position: 'relative', marginRight: 8}}>
          {/* <img style={{width:'40px',height:'40px',borderRadius:'50%'}} src={selectedPerson.icon} alt="SP" /> */}
          <span style={{top: -15, position: 'absolute', right: -10}} onClick={(event) => handleUnselectClick(event, selectedPerson)}>
            <CancelIcon color='action' />
          </span>
          </span>
          </>
        )}
          <AddIcon />
        </>
         : (
          <AccountCircleIcon style={{fontSize:'45px'}}/>
        )}
      </div>
      <Menu
        open={!!modelAnchor}
        anchorEl={modelAnchor}
        sx={{ zIndex: 100000 }}
        onClose={() => setModalAnchor(null)}
      >
        <div className="search-bar" style={{ margin: '5px' }}>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
        {renderPersonIcons()}
      </Menu>
    </div>
  );
};

export default PersonIcon;