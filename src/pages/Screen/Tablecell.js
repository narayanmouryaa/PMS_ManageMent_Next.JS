import React, { useState } from 'react';
import { Button, Modal, TextField, Box, Typography } from '@mui/material';

const Tablecell = () => {
  const [showModal, setShowModal] = useState(false);
  const [cardTitle, setCardTitle] = useState('');
  const [cardContent, setCardContent] = useState('');
  const [cards, setCards] = useState([]);

  const handleCardSave = () => {
    const newCard = {
      title: cardTitle,
      content: cardContent,
    };

    setCards([...cards, newCard]);
    setCardTitle('');
    setCardContent('');
    setShowModal(false);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" align="center" gutterBottom>
        Card Creator
      </Typography>
      <Button variant="contained" onClick={() => setShowModal(true)} color="primary">
        Create New Card
      </Button>

      <Modal open={showModal} onClose={() => setShowModal(false)}>

        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            minWidth: '300px',
            maxWidth: '80%',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Create a New Card
          </Typography>

          <TextField
            type="text"
            label="Card Title"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            variant="outlined"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Card Content"
            value={cardContent}
            onChange={(e) => setCardContent(e.target.value)}
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />

          <Button variant="contained" onClick={handleCardSave} color="primary">
            Save
          </Button>

        </Box>
      </Modal>

      <Box display="flex" flexWrap="wrap" justifyContent="space-between" mt={3}>
        {cards.map((card, index) => (
          <Box key={index} className="card" p={2} width="30%" mb={2} boxShadow={2} borderRadius={5}>
            <Typography variant="h6">{card.title}</Typography>
            <Typography>{card.content}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};




export default Tablecell;
