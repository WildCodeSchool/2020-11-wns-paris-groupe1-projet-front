import React, { useState } from "react";
import {
  Drawer,
  List,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";

//import { ChevronLeftIcon, InboxIcon, MailIcon } from "@material-ui/icons";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
//import classes from "*.module.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideBarStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleSideBarStatus}
          edge="start"
          //className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          ULYSSE
        </Typography>
      </Toolbar>
      <Drawer
        className={"drawer"}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <div className={"classes.drawerHeader"}>
          <IconButton onClick={handleSideBarStatus}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["Planning", "Cours", "Netflix", "SleepRoom"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Melec", "Charlotte", "Christophe", "Louis"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
export default SideBar;
