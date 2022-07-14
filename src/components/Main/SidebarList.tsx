import React, {useState} from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CardMedia from '@mui/material/CardMedia';

export default function SidebarList() {
    const [open, setOpen] = useState(false);

    const handleClick = ():void => {
      setOpen(!open);
    };

    return (
        <List
            sx={{ width: 250, maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                Simple Example with..
                </ListSubheader>
            }
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
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://img2.reactor.cc/pics/comment/%D0%94%D0%B6%D0%BE%D0%BD%D0%BD%D0%B8-%D0%94%D0%B5%D0%BF%D0%BF-%D0%90%D0%BA%D1%82%D0%B5%D1%80%D1%8B-%D0%B8-%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D1%8B-%D0%97%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D0%BE%D1%81%D1%82%D0%B8-%D0%AD%D0%BC%D0%B1%D0%B5%D1%80-%D0%A5%D1%91%D1%80%D0%B4-3970490.jpeg"
                            alt="dangerous pic"
                        />
                </ListItemButton>
            </List>
        </Collapse>
        </List>
    )
    
}