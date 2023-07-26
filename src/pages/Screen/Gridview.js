import React, { useState } from 'react'; // Import useState from 'react'
// import React from "react";
import NavbarFixed from "../components/Navbar";
import FixedSidenav from "../components/Fixedsidenav";
import MiniDrawer from "../components/Minidrawer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import AddIcon from "@mui/icons-material/Add";
import { size, weight } from "../../styles/theme";
import { Button } from 'react-bootstrap';
import GridviewCard from './Gridviewcard';
import { AddAPhoto } from '@mui/icons-material';
// import  useState from "react";





// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import Form from 'react-bootstrap/Form';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import SearchIcon from '@mui/icons-material/Search';
// import MiniDrawer from '../components/Minidrawer';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Gridview = () => {
  const [age, setAge] = React.useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <Box sx={{ display: "flex", position: "fixed" }}>
        <NavbarFixed />
        <Box sx={{ width: "100vw", display: "flex", position: "fixed" }}>
          <FixedSidenav />
          <MiniDrawer />

          <Box
            className="scrollbar"
            sx={{
              ml: 7,
              width: "80%",
              height: "100vh",
              display: "flex",
              overflowX: "scroll",
            }}
          >
            <Box
              sx={{
                minWidth: 280,
                mt: 8,
                wordWrap: "nowrap",
                textWrap: "nowrap",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  height: "7%",
                  width: "90%",
                  borderRadius: 2,
                  fontSize: size.font13,
                  fontWeight: weight.bold,
                  boxShadow: "1px 0px 1px 2px #aa2769",
                }}
              >
                TO DO
                {/* <Button onClick={handleModalOpen}  > <AddIcon />    </Button> */}
                {/* <Button variant="contained"  onClick={() => setOpenModal(true)}>
               <AddIcon/>
                              </Button> */}




              </Box>

              <Box
                className="scrollbar"
                sx={{
                  minWidth: 280,
                  height: "90%",
                  overflowY: "scroll",
                  mt: 2,
                  p: 1,
                }}
              >
                <Box
                  className="item"
                  sx={{ minWidth: 280, borderRadius: 2, margin: "auto" }}
                >
                  <GridviewCard />
                </Box>

              </Box>
            </Box>

            <Box
              sx={{
                minWidth: 280,
                mt: 8,
                wordWrap: "nowrap",
                textWrap: "nowrap",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  height: "7%",
                  width: "90%",
                  borderRadius: 2,
                  fontSize: size.font13,
                  fontWeight: weight.bold,
                  boxShadow: "1px 0px 1px 2px #228c22",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'space-around',
                  pl: 4,
                }}
              >
                IN PROGRESS
                {/* <Button onClick={handleModalOpen} > <AddIcon />     </Button> */}

                {/* <GridviewCard open={openModal} handleClose={handleModalClose} /> */}
              </Box>

              <Box
                className="scrollbar"
                sx={{
                  minWidth: 280,
                  height: "90%",
                  overflowY: "scroll",
                  mt: 2,
                  p: 1,
                }}
              >
                <Box
                  className="item"
                  sx={{ minWidth: 280, borderRadius: 2, margin: "auto" }}
                >
                  <GridviewCard />
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                minWidth: 280,
                mt: 8,
                wordWrap: "nowrap",
                textWrap: "nowrap",
              }}
            >
              <Box
                sx={{
                  margin: "auto",
                  height: "7%",
                  width: "90%",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: 'space-around',
                  pl: 4,
                  fontSize: size.font13,
                  fontWeight: weight.bold,
                  boxShadow: "1px 0px 1px 2px #ffa000",
                }}
              >
                COMPLETE
                {/* <Button onClick={handleModalOpen} > <AddIcon />     </Button> */}

                {/* <GridviewCard open={openModal} handleClose={handleModalClose} /> */}
              </Box>

              <Box
                className="scrollbar"
                sx={{
                  minWidth: 280,
                  height: "90%",
                  overflowY: "scroll",
                  mt: 2,
                  p: 1,
                }}
              >
                <Box
                  className="item"
                  sx={{ minWidth: 280, borderRadius: 2, margin: "auto" }}
                >
                  <GridviewCard />
                </Box>


              </Box>
            </Box>

            {/* 

            <Box sx={{ minWidth: 200, mt: 8, textTransform: 'none', wordWrap: 'nowrap', textWrap: 'nowrap' }}>
              <Box sx={{ height: '7%', width: '90%', borderRadius: 2, margin: 'auto', display: 'flex', alignItems: 'center', pl: 4, fontWeight: '500', fontSize: '15px', boxShadow: "1px 3px 1px #9E9E9E" }}>
                ADD TASK +
              </Box>



            </Box> */}
          </Box>
        </Box>
      </Box>

    </>
  );
};

export default Gridview;
