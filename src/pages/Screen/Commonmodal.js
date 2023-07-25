import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Switch from "@mui/material/Switch";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SquareIcon from "@mui/icons-material/Square";
import Stack from "@mui/material/Stack";
// import Autocomplete from "@mui/material/Autocomplete";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Avatar from "./Avatar";
import axios from "axios";
// import MultipleSelectCheckmarks from "@/store/multipleselectuser";

import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
// import FormControl from '@mui/material/FormControl';
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { size, weight } from "../../store/theme";
// import { Close } from "@mui/icons-material";
// import Checkbox from '@mui/material/Checkbox';
import styles from "../../styles/Home.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
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
            position: "absolute",
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

const CommonModal = ({ open, handleClose }) => {
  const [viewData, setViewData] = useState(1);
  const [checked, setChecked] = React.useState(true);

  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  // const [UserNameSelect, setUserNameSelect] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserNameSelect(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  //    const [openModal1,handleClose1] = useState(false);

  const [formData, setFormData] = useState({
    SpaceName: "",
    UserNameSelect: "",
    ActiveStatus: "",
    ComapleteStatus: "",
    closedStatus: "",
  });
  const [spaceName, setSpaceName] = useState("");
  const [activeStatus, setActiveStatus] = useState("");
  const [comapleteStatus, setComapleteStatus] = useState("");
  const [closedStatus, setClosedStatus] = useState("");
  const [UserNameSelect, setUserNameSelect] = React.useState([]);
  // console.log(UserNameSelect, "UserNameSelect...........");
  // get Color Get
  const [color, setColor] = useState({
    SpaceColor: "",
    ActiveStatusColor: "",
    ComapleteStatusColor: "",
    ClosedStatusColor: "",
  });

  // const [colorCode, setColorCode] = useState("");
  const [SpaceColorCode, setSpaceColorCode] = useState("#ff0000");
  const [ActiveStatusColorCode, setActiveStatusColorCode] = useState("#ff0000");
  const [ComapleteStatusColorCode, setComapleteStatusColorCode] =
    useState("#ff0000");
  const [ClosedStatusColorCode, setClosedStatusColorCode] = useState("#ff0000");

  const handleInputChangeColor = (event) => {
    const colorValue = event.target.value;
    setColor(colorValue);
    setSpaceColorCode(colorValue.toUpperCase());
    setActiveStatusColorCode(colorValue.toUpperCase());
    setComapleteStatusColorCode(colorValue.toUpperCase());
    setClosedStatusColorCode(colorValue.toUpperCase());
  };

  // First Element get

  const data = [
    spaceName,
    SpaceColorCode,
    ActiveStatusColorCode,
    ComapleteStatusColorCode,
    ClosedStatusColorCode,
    activeStatus,
    comapleteStatus,
    closedStatus,
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accessToken = localStorage.getItem("Userlogintoken");
    const config = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    };
    const apiData = await axios.post(
      "https://pmsapi.qrstaff.in/api/space/",
      data,
      config
    );
    // console.log(apiData, "submitdata");
  };
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSpaceName(newValue);
    if (newValue.length > 0) {
      const firstElement = newValue[0];
      console.log(firstElement);
      setInputValue(firstElement);
      // or do something else with the value
    }
  };

  // console.log(inputValue, "inputValue.........");

  // file data store
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
    "narayan Mouray",
    "kanahaiya singh",
  ];

  // console.log(fileData,"datafile............")
  const [selectedImage, setSelectedImage] = useState(null);
  // console.log(selectedImage,'selectedFile......')

  // Function to handle file selection
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item lg={3} sm={4}></Grid>
        <Grid item xs={12} lg={6}></Grid>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        // style={{ zIndex: "3000" }}
        >
          <Box className={styles.Mainbox}>
            {viewData === 1 && (
              <Box sx={style} className={styles.Mainbox}>
                <BootstrapDialogTitle
                  sx={{
                    fontSize: size.font1,
                    fontWeight: weight.bold,
                    marginLeft: "-22px",
                    display: 'flex',
                    justifyContent: 'center'
                  }}

                  onClose={handleClose}
                >
                  {/* <IconButton
                  sx={{ position: "absolute", top: "8px", right: "8px" }}
                  onClick={handleClose}
                >
                  <Close />
                </IconButton> */}

                  Create New Space
                </BootstrapDialogTitle>
                <Typography
                  sx={{ fontSize: size.font13, fontWeight: weight.medium }}
                  component="div"
                >
                  Clarity gives you the blocks and components you need to create{" "}
                  <br /> a truly professional website.
                </Typography>

                <Box
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className={styles.Mainbox}
                >
                  <Box className={styles.Mainbox}>
                    <Box mt={4} className={styles.Mainbox} >
                      <FormControl variant="standard">
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{
                            fontSize: size.font3,
                            fontWeight: weight.medium,
                          }}
                        >
                          Space Name
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Enter Space Name"
                          type="text"
                          value={spaceName}
                          onChange={handleInputChange}
                          style={{ width: "250%" }}
                          sx={{
                            // width: 500,
                            fontSize: size.font3,
                            fontWeight: weight.medium,
                          }}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>

                    <Box mt={3} className={styles.Mainbox}>
                      <FormControl variant="standard" style={{width:'80%'}}>
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{
                            fontSize: size.font3,
                            fontWeight: weight.medium,
                          }}
                        >
                          Space Color
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Enter Space Color Code"
                          type="color"
                          style={{ width: "200%" }}
                          // sx={{ width: 500 }}
                          name="SpaceColorCode"
                          value={SpaceColorCode}
                          onChange={(e) => setSpaceColorCode(e.target.value)}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box mt={3}>
                      <FormControl variant="standard" >
                        <InputLabel
                          htmlFor="input-with-icon-adornment"
                          style={{
                            fontSize: size.font3,
                            fontWeight: weight.medium,
                          }}
                        >
                          Space Icon
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Upload Space icon"
                          type="file"
                          onChange={handleImageChange}
                          style={{ paddingBottom: "10px",width:'160%' }}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box>

                      <FormControl sx={{ m: 1 }} style={{width:'160%'}}>
                        <InputLabel
                          sx={{ mt: 2 }}
                          id="demo-multiple-checkbox-label"
                        >
                          Select{" "}
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-checkbox-label"
                          id="demo-multiple-checkbox"
                          multiple
                          value={UserNameSelect}
                          onChange={handleChange}
                          input={<OutlinedInput label="Tag" />}
                          renderValue={(selected) => selected.join(", ")}
                          MenuProps={MenuProps}
                          sx={{  mt: 2, height: '50px' }}
                          
                        >
                          {names.map((name) => (
                            <MenuItem key={name} value={name}>
                              <Checkbox
                                checked={UserNameSelect.indexOf(name) > -1}
                              />
                              <ListItemText primary={name} />
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box style={{ display: "flex" }} className={styles.Mainbox}>
                    <Avatar
                      name={inputValue}
                      SpaceColoCode={SpaceColorCode}
                      height={"90px"}
                      width={"90px"}
                    />
                  </Box>
                </Box>

                {viewData === 4 ? (
                  <Button>Create</Button>
                ) : (
                  <Button
                    variant="contained"
                    fullWidth
                    style={{ marginTop: "30px" }}
                    onClick={() => setViewData(viewData + 1)}
                  >
                    Next
                  </Button>
                )}
              </Box>
            )}
            {viewData === 2 && (
              <Box sx={style} className={styles.Mainbox}>
                <Box>
                  <Typography
                    sx={{ fontSize: size.font1, fontWeight: weight.bold }}
                  >
                    <Button onClick={() => setViewData(viewData - 1)}>
                      {" "}
                      <ArrowBackIosIcon style={{ color: "black" }} />
                    </Button>
                    What task Statuses do you want ?
                  </Typography>

                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: size.font3,
                      fontWeight: weight.medium,
                    }}
                    gutterBottom
                  >
                    Active Status
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={7} style={{ label: "text" }}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: size.font13,
                          fontWeight: weight.low,
                        }}
                      >
                        Status Name
                      </label>
                      <TextField
                        fullWidth
                        name="ActiveStatus"
                        value={activeStatus}
                        onChange={(e) => setActiveStatus(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: size.font13,
                          fontWeight: weight.low,
                        }}
                      >
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        style={{ height: '40px' }}
                        type="color"
                        name="ActiveStatusColor"
                        value={ActiveStatusColorCode}
                        onChange={(e) =>
                          setActiveStatusColorCode(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={1} style={{ fontSize: "50px" }}>
                      <AddIcon />
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: size.font4,
                      fontWeight: weight.medium,
                    }}
                    gutterBottom
                  >
                    Complete Status
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid item xs={7} style={{ label: "text" }}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: size.font13,
                          fontWeight: weight.low,
                        }}
                      >
                        Status Name
                      </label>
                      <TextField
                        fullWidth
                        style={{ height: "20px" }}
                        name="ComapleteStatus"
                        value={comapleteStatus}
                        onChange={(e) => setComapleteStatus(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: size.font13,
                          fontWeight: weight.low,
                        }}
                      >
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        type="color"
                        name="ComapleteStatusColor"
                        value={ComapleteStatusColorCode}
                        onChange={(e) =>
                          setComapleteStatusColorCode(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={1} style={{ fontSize: "50px" }}>
                      <AddIcon />
                    </Grid>
                  </Grid>

                  <Typography
                    sx={{
                      marginTop: "20px",
                      fontSize: size.font4,
                      fontWeight: weight.medium,
                    }}
                    gutterBottom
                  >
                    Closed Status
                  </Typography>

                  <Grid container spacing={2} sx={{ marginBottom: "40px" }}>
                    <Grid item xs={7} style={{ label: "text" }}>
                      <label
                        style={{
                          marginBottom: "5px",
                          fontSize: size.font13,
                          fontWeight: weight.low,
                        }}
                      >
                        Status Name
                      </label>
                      <TextField
                        fullWidth
                        name="closedStatus"
                        value={closedStatus}
                        onChange={(e) => setClosedStatus(e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label style={{ marginBottom: "5px" }}>
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        type="color"
                        name="ClosedStatusColor"
                        value={ClosedStatusColorCode}
                        onChange={(e) =>
                          setClosedStatusColorCode(e.target.value)
                        }
                      />
                    </Grid>
                    <Grid item xs={1} style={{ fontSize: "50px" }}>
                      <AddIcon />
                    </Grid>
                  </Grid>

                  {viewData === 4 ? (
                    <Button>Create</Button>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                      // style={{ width: "650px" }}
                      onClick={() => setViewData(viewData + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )}
            {viewData === 3 && (
              <Box sx={style} className={styles.Mainbox}>
                <Box>
                  <Typography
                    sx={{ display: "flex", fontSize: 35, fontWeight: 600 }}
                  >
                    <Button onClick={() => setViewData(viewData - 1)}>
                      <ArrowBackIosIcon
                        style={{
                          color: "black",
                        }}
                      />
                    </Button>
                    <span
                      style={{
                        fontSize: size.font1,
                        fontWeight: weight.bold,
                      }}
                    >
                      {" "}
                      Default Settings for Views
                    </span>
                  </Typography>

                  <Grid
                    container
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "60px",
                    }}
                  >
                    <Grid item xs={8}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          border: "2px solid black",
                          height: "60px",
                        }}
                      >
                        <Typography style={{ paddingRight: "150px" }}>
                          <FormatListBulletedIcon />
                          List View
                        </Typography>

                        <Switch
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    spacing={2}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "25px",
                      marginBottom: "60px",
                    }}
                  >
                    <Grid item xs={8}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                          border: "2px solid black",
                          height: "60px",
                        }}
                      >
                        <Typography style={{ paddingRight: "150px" }}>
                          <ViewQuiltIcon />
                          Grid View
                        </Typography>

                        <Switch
                          checked={checked}
                          onChange={handleChange}
                          inputProps={{ "aria-label": "controlled" }}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  {viewData === 4 ? (
                    <Button>Create</Button>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                      // style={{ width: "650px" }}
                      onClick={() => setViewData(viewData + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )}
            {viewData === 4 && (
              <Box sx={style} className={styles.Mainbox}>
                <Box>
                  <Typography
                    sx={{ fontSize: 35, fontWeight: 600, marginLeft: "30px" }}
                  >
                    <Button onClick={() => setViewData(viewData - 1)}>
                      <ArrowBackIosIcon style={{ color: "black" }} />
                    </Button>
                    <span
                      style={{
                        fontSize: size.font1,
                        fontWeight: weight.bold,
                      }}
                    >
                      {" "}
                      Default Settings for Views
                    </span>
                  </Typography>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "30px",
                    }}
                  >
                    <Grid item xs={10}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          borderBottomWidth: 1,
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            color: "grey",
                            fontSize: size.font13,
                            fontWeight: weight.low,
                          }}
                        >
                          Space Name
                        </Typography>
                        <Typography>{spaceName}</Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs={10}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          borderBottomWidth: 1,
                          borderTopWidth: 0,
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            color: "grey",
                            fontSize: size.font13,
                            fontWeight: weight.low,
                          }}
                        >
                          Avatar
                        </Typography>

                        <Avatar
                          name={inputValue}
                          SpaceColoCode={SpaceColorCode}
                          height={"40px"}
                          width={"40px"}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs={10}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          borderBottomWidth: 1,
                          borderTopWidth: 0,
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            color: "grey",
                            fontSize: size.font13,
                            fontWeight: weight.low,
                          }}
                        >
                          Shared with
                        </Typography>
                        <Avatar
                          name={inputValue}
                          SpaceColoCode={SpaceColorCode}
                          height={"40px"}
                          width={"40px"}
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid item xs={10}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          borderBottomWidth: 1,
                          borderTopWidth: 0,
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            color: "grey",
                            fontSize: size.font13,
                            fontWeight: weight.low,
                          }}
                        >
                          Task statuses
                        </Typography>

                        <Stack flexDirection="row">
                          <SquareIcon
                            style={{ color: `${ActiveStatusColorCode}` }}
                          />
                          <SquareIcon
                            style={{ color: `${ComapleteStatusColorCode}` }}
                          />
                          <SquareIcon
                            style={{ color: `${ClosedStatusColorCode}` }}
                          />
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <Grid item xs={10}>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          border: "1px solid black",
                          borderTopWidth: 0,
                          height: "50px",
                          padding: "15px",
                        }}
                      >
                        <Typography
                          style={{
                            color: "grey",
                            fontSize: size.font13,
                            fontWeight: weight.low,
                          }}
                        >
                          Default setting for views
                        </Typography>
                        <FormatListBulletedIcon />
                      </Box>
                    </Grid>
                  </Grid>

                  {viewData === 4 ? (
                    <Button
                      variant="contained"
                      fullWidth
                      style={{
                        // width: "560px",
                        marginTop: "30px",
                        // marginLeft: "54px",
                      }}
                      onClick={handleSubmit}
                    >
                      Create
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      fullWidth
                      // style={{ width: "650px" }}
                      onClick={() => setViewData(viewData + 1)}
                    >
                      Next
                    </Button>
                  )}
                </Box>
              </Box>
            )}
          </Box>
        </Modal>
      </Grid>
      <Grid item lg={3} sm={4}></Grid>
      {/* </Grid > */}
    </>
  );
};

export default CommonModal;
