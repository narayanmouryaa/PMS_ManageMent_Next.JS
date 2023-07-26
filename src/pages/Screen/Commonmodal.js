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
import Autocomplete from "@mui/material/Autocomplete";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import Avatar from "../../store/Avatar";
import axios from "axios";
import { toast } from "react-toastify";
// import MultipleSelectCheckmarks from "@/store/multipleselectuser";

// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
// import FormControl from '@mui/material/FormControl';
// import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import { size, weight } from "../../styles/theme";
// import Checkbox from '@mui/material/Checkbox';
import styles from '../../styles/Home.module.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p:4,
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

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setUserNameSelect(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [formData, setFormData] = useState({
    name: "",
    color: "",
    icon: null,
    sharedWith: [],
    status: {
      ActiveStatuscolor: "",
      ActiveStatusname: "",
      comapleteStatuscolor: "",
      comapleteStatusname: "",
      closedStatuscolor: "",
      closedStatusname: "",
    },
  });
  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      status: {
        ...prevFormData.status,
        [name]: value,
      },
    }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: URL.createObjectURL(file), // Store the selected image path in state
      }));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace 'API_ENDPOINT' with your actual API URL
    const apiEndpoint = "https://pmsapi.qrstaff.in/api/space/add";
    // Replace 'YOUR_ACCESS_TOKEN' with the actual token value
    const accessToken = localStorage.getItem("Userlogintoken");
    // Set the token in the request headers
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    axios
      .post(apiEndpoint, formData, { headers })
      .then((response) => {
        // console.log("POST request successful:", response.data);
        const { _id } = response.data;
        // console.log("Newly inserted document _id:", _id);
        toast.success(response.data.message);

        // Perform any other actions upon success, e.g., show a success message
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          // Handle 403 error here
          // console.log("403 Error: Access Denied");
          toast.success(response.data.message);
          toast.success("403 Error: Access Denied");

          // Perform any specific actions for a 403 error, e.g., show an error message
        } else {
          // Handle other errors
          // console.log("Error:", error.message);
          toast.success(error.message);
          // Perform any other actions for other errors, e.g., show a generic error message
        }
      });
  };
  const users = ["Saurabh", "Ayush", "Aryan", "Sanjeev"];
  const handleUserSelect = (event) => {
    const selectedUsers = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      sharedWith: selectedUsers,
    }));
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
          <Box className={styles.Mainbox} >
            {viewData === 1 && (
              <Box sx={style} className={styles.Mainbox}>
                <BootstrapDialogTitle
                  sx={{
                    fontSize: size.font1,
                    fontWeight: weight.bold,
                    marginLeft: "-22px",
                    display:'flex',
                    justifyContent:'center'
                  }}
                  id="customized-dialog-title"
                  onClose={handleClose}
                >
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
                  <Box className={styles.Mainbox} >
                    <Box mt={4} className={styles.Mainbox}>
                      <FormControl variant="standard" 
                      style={{width:'150%'}} >
                        
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
                        //  style={{ width: "250%" }}
                          name="name"
                          value={formData.name}
                          onChange={handleInputChanges}
                          
                          sx={{
                           
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
                      <FormControl variant="standard" style={{width:'100%'}}>
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
                          style={{ width: "150%" }}
                          // sx={{ width: 500 }}
                          name="color"
                          value={formData.color}
                          onChange={handleInputChanges}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box mt={3}>
                      <FormControl variant="standard" style={{width:'150%'}}>
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
                          accept="image/*"
                          onChange={handleImageChange}
                          style={{ paddingBottom: "10px" }}
                          // sx={{ width: 500 }}
                          startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box>
                      

                      <FormControl variant="outlined" margin="normal" style={{width:'150%'}}>
                        <InputLabel>Shared With</InputLabel>
                        <Select
                          name="sharedWith"
                          multiple
                          value={formData.sharedWith}
                          onChange={handleUserSelect}
                          label="Shared With"
                          style={{ paddingBottom: "10px" }}
                          // sx={{ width: 500 }}
                        >
                          {users.map((user, index) => (
                            <MenuItem key={index} value={user}>
                              {user}
                            </MenuItem>
                          ))}
                          {/* Add more users as needed */}
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box style={{ display: "flex" }} className={styles.Mainbox}>
                    <Avatar
                      name={formData.name}
                      SpaceColoCode={formData.color}
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
                    style={{ marginTop: "30px"}}
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
                        name="ActiveStatusname"
                        value={formData.status.ActiveStatusname}
                        onChange={handleStatusChange}
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
                        name="ActiveStatuscolor"
                        value={formData.status.ActiveStatuscolor}
                        onChange={handleStatusChange}
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
                        name="comapleteStatusname"
                        value={formData.status.comapleteStatusname}
                        onChange={handleStatusChange}
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
                        name="comapleteStatuscolor"
                        value={formData.status.comapleteStatuscolor}
                        onChange={handleStatusChange}
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
                        name="closedStatusname"
                        value={formData.status.closedStatusname}
                        onChange={handleStatusChange}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <label style={{ marginBottom: "5px" }}>
                        Status Color
                      </label>
                      <TextField
                        fullWidth
                        type="color"
                        name="closedStatuscolor"
                        value={formData.status.closedStatuscolor}
                        onChange={handleStatusChange}
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
                        fontWeight: weight.medium,
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
                        fontWeight: weight.medium,
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
                        <Typography>{formData.name}</Typography>
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
                          name={formData.name}
                          SpaceColoCode={formData.color}
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
                          name={formData.name}
                          SpaceColoCode={formData.color}
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
                            style={{
                              color: `${formData.status.ActiveStatuscolor}`,
                            }}
                          />
                          <SquareIcon
                            style={{
                              color: `${formData.status.comapleteStatuscolor}`,
                            }}
                          />
                          <SquareIcon
                            style={{
                              color: `${formData.status.closedStatuscolor}`,
                            }}
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
                      style={{ width: "650px" }}
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