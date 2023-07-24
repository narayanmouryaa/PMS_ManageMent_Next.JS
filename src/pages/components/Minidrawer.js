import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography, Button } from "@mui/material";
import BasicMenu from "../Screen/Selectoption";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FolderCopyOutlinedIcon from "@mui/icons-material/FolderCopyOutlined";
import { ListItemIcon, Collapse } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CommonModal from "../Screen/Commonmodal";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
// import zIndex from '@mui/material/styles/zIndex';
import { size, weight } from "../assets/theme/theme";

const drawerWidth = 280;

const Root = styled("div")(({ theme }) => ({
  display: "flex",
}));

const DrawerContainer = styled("div")(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
}));

const NestedList = ({ primary, list }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {[" Arvind Folder"].map((list, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon>
                <FolderCopyOutlinedIcon sx={{ ml: 2 }} />
              </ListItemIcon>

              <ListItemText primary={list} />
              <BasicMenu />
            </ListItem>
          ))}

          {/* {[" List 1", "List 2", "List 3", "List 4", "List 5"].map(
            (text, index) => (
              <ListItem style={{ height: "35px" }} key={index} disablePadding>
                <ListItemIcon>
                  <FormatListBulletedIcon sx={{ ml: 2 }} />
                </ListItemIcon>
                <ListItemText primary={text} />
                <BasicMenu />
              </ListItem>
            )
          )} */}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [openModal1, handleClose1] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Root>
        {!open ? (
          <button
            style={{
              position: "absolute",
              top: "68px",
              left: "30px",
              zIndex: 504,
              color: "white",
              border: "none",
              backgroundColor: "blue",
              borderRadius: "50%",
            }}
            onClick={handleDrawerOpen}
          >
            <ChevronRightIcon />{" "}
          </button>
        ) : null}

        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Drawer
            className="drawer_container"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                left: "38px",
                top: "60px",
                position: "relative",
                display: "flex",
                height: "100vh",
                position: "fixed",
                zIndex: 200,
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <Typography
                style={{
                  display: "flex",
                  marginRight: "150px",
                  color: "grey",
                  fontSize: size.font13,
                  fontWeight: weight.low,
                }}
              >
                Favorites
              </Typography>

              <IconButton onClick={() => setOpen(!open)}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      position: "absolute",
                      bottom: "12px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {["Spaces"].map((text, index) => (
                <ListItem
                  style={{
                    paddingLeft: "40px",
                    color: "grey",
                    fontSize: size.font13,
                    fontWeight: weight.low,
                  }}
                  key={text}
                  disablePadding
                >
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>

                  <Button
                    style={{ marginLeft: "155px" }}
                    onClick={() => handleClose1(true)}
                  >
                    {" "}
                    <AddIcon style={{ color: "black" }} />
                  </Button>
                  <CommonModal
                    open={openModal1}
                    handleClose={() => {
                      handleClose1(false);
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider />
            <List style={{ marginLeft: "30px" }}>
              <NestedList
                primary="Space test 1"
                style={{ fontSize:size.font13,fontWeight:weight.bold }}
                items={["list 1"]}
              />
            </List>

            <Divider />
          </Drawer>
        </Box>
      </Root>
    </>
  );
}
