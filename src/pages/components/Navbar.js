import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { Typography } from "@mui/material";
// import  UseMediaQuery from "@mui/material";



const ColorButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("light");

  const handleClick = () => {
    setBackgroundColor("white");
  };
  return (
    <>
      <Link href="../features/Listview" >
        <Button
          onClick={handleClick}
          sx={{color: "black",ml:20 }}
        >
          <ListIcon />
          <Typography sx={{fontSize:'13px',ml:1,fontWeight:'600'}}>List View</Typography>
          
        </Button>
      </Link>

      <Link href="../Screen/Gridview">
        <Button
          onClick={handleClick}
          sx={{ backgroundColor, color: "black" }}
        >
          <ViewQuiltIcon />  
          <Typography  sx={{fontSize:'13px',ml:1,fontWeight:'600'}}>Grid View</Typography>
        </Button>
      </Link>
    </>
  );
};

export default function NavbarFixed() {
  return (
    <>
      <Navbar
        bg="light"
        expand="lg"
        style={{ position: "fixed", width:'100%', "zIndex": "503" }}
      >
        <Container fluid style={{ padding: "0px 36px 0px 8px" }}>
          <AppsIcon sx={{ml:2}}/>
          <Navbar.Brand href="#" style={{fontWeight:600,marginLeft:'10px'}}     >
            P M S
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Button style={{ border: '1px solid black' }} >
                            <Nav.Link href="/" style={{ marginLeft: '40px' }}><ListIcon />List view </Nav.Link>
                        </Button> */}

              <ColorButton />

              {/* <Button >
                            <Nav.Link href="Gridview" ><ViewQuiltIcon /> Grid view </Nav.Link>
                        </Button> */}
            </Nav>
            <Form className="d-flex">
              <Form.Control
                style={{ padding: "5px", height: "40px" }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

              <Link href="#" style={{ margin:'5px',color:'black' }}>
                <NotificationsIcon />
              </Link>
              <Link href="../Screen/settings" style={{ marginTop:"5px", color: 'black' }}>
                <SettingsIcon />
              </Link>
              <Avatar style={{ marginTop: "3px",marginLeft:'10px' }} src=""></Avatar>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  );
}




