import React from "react";
import clsx from "clsx";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import HomeIcon from '@material-ui/icons/Home';
import { Avatar } from '@material-ui/core';

import { Link } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
    },
      avatar: {
      margin: theme.spacing(1),
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
      // backgroundColor: "blue",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    sideBarIcon: {
      color: 'white',
    },
    linkSignIn: {
      color: 'white',
    },
  })
);
type Props = {
  children: React.ReactChild;
};
const SideBar: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, classes.sideBarIcon, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            <Link to ='/'>
              <Avatar className={classes.avatar}>
              </Avatar>
            </Link>
            <Link to='/sign-in' className={classes.linkSignIn}>Deconnexion</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} className={classes.sideBarIcon}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button>
              <ListItemIcon className={classes.sideBarIcon}>
                 <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.sideBarIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Planning"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.sideBarIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Cours"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.sideBarIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Ma promotion"} />
            </ListItem>
            <ListItem button>
              <ListItemIcon className={classes.sideBarIcon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Exercices et corrections"} />
            </ListItem>
        </List>
        <Divider/>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
          {children}
      </main>
    </div>
  );
};
export default SideBar;
