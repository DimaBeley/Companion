import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Grid from "@mui/material/Grid";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ImageItem from "./ImageItem";
import ImageItemsData from "./ImageItemsData";

export default function SidebarList() {
  const [open, setOpen] = useState(false);

  const handleClick = ():void => {
    setOpen(!open);
  };

  const [imageCount, setimageCount] = useState(0);

  const nextImage = () => {
    if (imageCount === ImageItemsData.length - 1) {
      setimageCount(0);
    } else {
      setimageCount(imageCount + 1);
    }
  };

  const prevImage = () => {
    if (imageCount === 0) {
      setimageCount(ImageItemsData.length - 1);
    } else {
      setimageCount(imageCount - 1);
    }
  };

  return (
    <List
      sx={{ width: 250, maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={(
        <ListSubheader component="div" id="nested-list-subheader">
          Simple Example with..
        </ListSubheader>
      )}
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Dont open" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ImageItem url={ImageItemsData[imageCount].url} />
          </ListItemButton>
          <Grid container>
            <Grid xs={6} container item alignItems="center" justifyContent="center">
              <Button onClick={() => prevImage()}><ChevronLeftIcon color="action" /></Button>
            </Grid>
            <Grid xs={6} container item alignItems="center" justifyContent="center">
              <Button onClick={() => nextImage()}><ChevronRightIcon color="action" /></Button>
            </Grid>
          </Grid>
        </List>
      </Collapse>
    </List>
  );
}
