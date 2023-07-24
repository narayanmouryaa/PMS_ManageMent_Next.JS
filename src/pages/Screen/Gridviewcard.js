import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import FlagIcon from "@mui/icons-material/Flag";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete"; // Import Autocomplete
import { DatePicker } from "@mui/x-date-pickers/DatePicker"; // Import DatePicker
import { size, weight } from "../assets/theme/theme";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: "1px solid currentColor",
      content: '""',
    },
  },
}));

const GridviewCard = () => {
  const [cards, setCards] = useState([]);
  const [cardTitle, setCardTitle] = useState("");
  const [flagColor, setFlagColor] = useState("#f50057");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [assignees, setAssignees] = useState([]);
  const [editCardIndex, setEditCardIndex] = useState(-1);
  const [openModal, setOpenModal] = useState(false);

  // Sample list of users for Autocomplete
  const users = [
    { name: "User 1" },
    { name: "User 2" },
    { name: "User 3" },
    // Add more users as needed
  ];

  const handleAssignMe = () => {
    setAssignees([...assignees, { name: "Your Name" }]);
  };

  const handleCardSave = () => {
    if (cardTitle && assignees.length > 0) {
      const newCard = {
        title: cardTitle,
        flagColor: flagColor,
        startDate: startDate,
        endDate: endDate,
        assignees: assignees,
      };
      setCards([...cards, newCard]);
      setCardTitle("");
      setFlagColor("#f50057");
      setStartDate(null);
      setEndDate(null);
      setAssignees([]);
      setOpenModal(false);
    }
  };

  const handleUpdateCard = () => {
    if (editCardIndex !== -1) {
      const updatedCard = {
        title: cardTitle,
        flagColor: flagColor,
        startDate: startDate,
        endDate: endDate,
        assignees: assignees,
      };
      const updatedCards = [...cards];
      updatedCards[editCardIndex] = updatedCard;
      setCards(updatedCards);
      setCardTitle("");
      setFlagColor("#f50057");
      setStartDate(null);
      setEndDate(null);
      setAssignees([]);
      setEditCardIndex(-1);
      setOpenModal(false);
    }
  };

  const handleDeleteCard = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleEditCard = (index) => {
    setCardTitle(cards[index].title);
    setFlagColor(cards[index].flagColor);
    setStartDate(cards[index].startDate);
    setEndDate(cards[index].endDate);
    setAssignees(cards[index].assignees);
    setEditCardIndex(index);
    setOpenModal(true);
  };

  return (
    <div>
      <Button variant="contained" onClick={() => setOpenModal(true)}>
        Create New Task
      </Button>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Card sx={{ borderRadius: 2, mt: 2, maxWidth: 400, mx: "auto" }}>
          <CardContent>
            <Typography
              sx={{
                fontWeight: weight.low,
                fontSize: size.font2,
                textAlign: "start",
                marginBottom: 2,
              }}
              gutterBottom
            >
              {editCardIndex !== -1 ? "Edit Task" : "Create a New Task"}
            </Typography>
            <TextField
              type="text"
              label="Card Title"
              value={cardTitle}
              onChange={(e) => setCardTitle(e.target.value)}
              fullWidth
              margin="normal"
              style={{ marginBottom: 10 }}
            />
            <Box
              sx={{ display: "flex", alignItems: "center", marginBottom: 10 }}
            >
              <IconButton
                onClick={() => setFlagColor("#f50057")}
                style={{
                  color: "#f50057",
                  marginRight: 10,
                  padding: 4,
                  backgroundColor:
                    flagColor === "#f50057" ? "#f50057" : "transparent",
                  borderRadius: "50%",
                }}
              >
                <FlagIcon />
              </IconButton>
              <IconButton
                onClick={() => setFlagColor("#3f51b5")}
                style={{
                  color: "#3f51b5",
                  marginRight: 10,
                  padding: 4,
                  backgroundColor:
                    flagColor === "#3f51b5" ? "#3f51b5" : "transparent",
                  borderRadius: "50%",
                }}
              >
                <FlagIcon />
              </IconButton>
              <IconButton
                onClick={() => setFlagColor("#4caf50")}
                style={{
                  color: "#4caf50",
                  marginRight: 10,
                  padding: 4,
                  backgroundColor:
                    flagColor === "#4caf50" ? "#4caf50" : "transparent",
                  borderRadius: "50%",
                }}
              >
                <FlagIcon />
              </IconButton>
            </Box>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
              style={{ marginBottom: 10 }}
              disablePast
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              renderInput={(params) => (
                <TextField {...params} fullWidth margin="normal" />
              )}
              style={{ marginBottom: 10 }}
              disablePast
            />
            <Autocomplete
              multiple
              options={users}
              getOptionLabel={(option) => option.name}
              value={assignees}
              onChange={(event, newValue) => setAssignees(newValue)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Assignees"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            {editCardIndex !== -1 ? (
              <Button
                onClick={handleUpdateCard}
                variant="contained"
                color="primary"
              >
                Update Card
              </Button>
            ) : (
              <Button
                onClick={handleCardSave}
                variant="contained"
                color="primary"
              >
                Save Card
              </Button>
            )}
          </CardContent>
        </Card>
      </Modal>

      <div className="cards-container">
        {cards.map((card, index) => (
          <Card key={index} sx={{ borderRadius: 2, mt: 2 }}>
            <CardContent>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "start",
                  marginBottom: 2,
                }}
                gutterBottom
              >
                {card.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 10,
                }}
              >
                <IconButton style={{ color: card.flagColor }}>
                  <FlagIcon />
                </IconButton>
                <Stack direction="row" spacing={1} alignItems="center">
                  {card.startDate && (
                    <Typography>
                      {card.startDate.toLocaleDateString()}
                    </Typography>
                  )}
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  {card.endDate && (
                    <Typography>{card.endDate.toLocaleDateString()}</Typography>
                  )}
                </Stack>
                {card.assignees && card.assignees.length > 0 && (
                  <Stack direction="row" spacing={1} alignItems="center">
                    {card.assignees.map((assignee, index) => (
                      <Avatar key={index} sx={{ width: 24, height: 24 }}>
                        {assignee.name[0]}
                      </Avatar>
                    ))}
                  </Stack>
                )}
                <IconButton onClick={() => handleEditCard(index)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteCard(index)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GridviewCard;
