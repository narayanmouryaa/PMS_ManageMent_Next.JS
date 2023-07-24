import * as React from "react";
// import PropTypes from 'prop-types';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import Container from '@mui/material/Container';
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid, IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import SquareIcon from "@mui/icons-material/Square";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import ParentModal from "./ParentModal";
import ParentModalTwo from "./ParentModalTwo";
import ParentModalThree from "./ParentModalThree";
import { Close } from "@mui/icons-material";
import { useState } from "react";
// import Typography from '@mui/material';
import { size, weight } from "../assets/theme/theme";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



export default function Folder({ open, setOpen }) {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  // const [open2, setOpen2] = useState(false)

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <Modal open={open} onClose={handleClose} style={{ zIndex: "4000" }}>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Card sx={style}>
              <CardContent>
                <IconButton
                  sx={{ position: "absolute", top: "8px", right: "8px" }}
                  onClick={handleClose}
                >
                  <Close />
                </IconButton>


                <Typography sx={{
                  fontSize: size.font1,
                  fontWeight: weight.medium,
                  display: 'flex',
                  justifyContent: 'center'
                }}
                >
                  Create Folder
                </Typography>



                <Box mt={4}>
                  <FormControl variant="standard">
                    <InputLabel
                      htmlFor="input-with-icon-adornment"
                      style={{
                        fontWeight: "600",
                        fontSize: "18px",
                        textAlign: "left",
                      }}
                    >
                      Folder Name
                    </InputLabel>
                    < Input
                      sx={{ width: "650px" }}
                      id="input-with-icon-adornment"
                      placeholder="Enter Folder Name"
                      type="text"
                      startAdornment={
                        <InputAdornment position="start"></InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                  }}
                >
                  <Grid item xs={10}>
                    <Box
                      onClick={() => {
                        setOpen1(true);
                        setOpen(false);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid grey",
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        height: "50px",
                        padding: "15px",
                        cursor: "pointer",
                        
                      }}
                    >
                      {/* <Avatar sx={{ bgcolor: red[800] }} variant="rounded">  A   </Avatar> */}
                      <Typography>
                        Lists
                      </Typography>

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
                    {/* <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black', borderBottomWidth: 1, borderTopWidth: 0, height: '60px', padding: '15px' }}>
                                            <Typography style={{ color: "grey" }}>
                                                Shared with
                                            </Typography>
                                            <Avatar sx={{ bgcolor: red[800] }} >
                                                A
                                            </Avatar>
                                        </Box> */}

                    <Box
                      onClick={() => {
                        setOpen2(true);
                        setOpen(false);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid grey",
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        height: "50px",
                        padding: "15px",
                        cursor: "pointer",
                      }}
                    >
                      Share Folder with
                    </Box>
                  </Grid>
                </Grid>

                <Grid
                  container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "50px",
                  }}
                >
                  <Grid item xs={10}>
                    {/* <Box  
                                         style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black', borderBottomWidth: 1, borderTopWidth: 0, height: '60px', padding: '15px' }}>
                                            {/* <Typography style={{ color: "grey" }}>
                                                Task statuses
                                            </Typography>

                                             <Stack flexDirection="row">
                                                <SquareIcon style={{ color: 'black' }} />
                                                <SquareIcon style={{ color: 'green' }} />
                                                <SquareIcon style={{ color: 'blue' }} />
                                                <SquareIcon style={{ color: 'pink' }} />
                                                <SquareIcon style={{ color: 'red' }} />
                                            </Stack> 
                                        </Box> */}
                    <Box
                      onClick={() => {
                        setOpen3(true);
                        setOpen(false);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        border: "1px solid grey",
                        borderBottomWidth: 1,
                        borderTopWidth: 1,
                        height: "50px",
                        padding: "15px",
                        cursor: "pointer",
                      }}
                    >
                      Task statuses
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
              <Button
                variant="contained"
                style={{ width: "680px", textAlign: "center" }}
              >
                Create Folder
              </Button>
            </Card>
          </Box>
        </Modal>
        {/* </BootstrapDialog> */}
      </div>

      <ParentModal
        open={open1}
        setOpen={(val) => {
          setOpen1(val);
          setOpen(true);
        }}
      />
      <ParentModalTwo
        open={open2}
        setOpen={(val) => {
          setOpen2(val);
          setOpen(true);
        }}
      />
      <ParentModalThree
        open={open3}
        setOpen={(val) => {
          setOpen3(val);
          setOpen(true);
        }}
      />
    </>
  );
}
