import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import SidebarList from "./SidebarList";

export default function Main() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = ():void => setMenuState(!menuState);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleMenu}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Main page
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        open={menuState}
        onClose={toggleMenu}
      >
        <SidebarList />
      </Drawer>
    </Box>
  );
}
