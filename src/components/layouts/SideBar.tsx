import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

// Import icons material UI
import AccountCircle from "@material-ui/icons/AccountCircle";
import BuildIcon from "@material-ui/icons/Build";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CasinoIcon from "@material-ui/icons/Casino";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SchoolIcon from "@material-ui/icons/School";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    avatar: {
      margin: theme.spacing(1),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    sideBarIcon: {
      color: "white",
    },
    linkSignIn: {
      color: "white",
    },
    sectionDesktop: {
      justifyContent: "flex-end",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sideBarButton: {
      paddingLeft: 30,
      justifyContent: "center",
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        fontWeight: "fontWeightBold",
        color: "#03DAC5",
        "& $sideBarIcon": {
          color: "#03DAC5",
        },
      },
    },
    selected: {
      backgroundColor: theme.palette.primary.light,
        color: "#03DAC5",
        "& $sideBarIcon": {
          color: "#03DAC5",
        },
    },
    sideBarLogout: {
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
        fontWeight: theme.typography.fontWeightBold,
      },
    },
  })
);

type Props = {
  children: React.ReactChild;
};
const SideBar: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuId = "primary-search-account-menu";

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(
              classes.menuButton,
              classes.sideBarIcon,
              open && classes.hide
            )}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ flexGrow: 1 }} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography style={{ margin: "auto" }}>ULYSSE</Typography>
          <IconButton
            onClick={handleDrawerClose}
            className={classes.sideBarIcon}
          >
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider style={{ backgroundColor: "white" }} />
        <List style={{ flexGrow: 1 }}>
          <div style={{ paddingTop: 30 }}>
            <NavLink
              to="/"
              activeClassName="selected"
              // activeStyle={{color: ''}}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button className={classes.sideBarButton}>
                <ListItemIcon className={classes.sideBarIcon}>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
            </NavLink>
            <NavLink
              to="/" // Replace the good root
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button className={classes.sideBarButton}>
                <ListItemIcon className={classes.sideBarIcon}>
                  <CalendarTodayIcon />
                </ListItemIcon>
                <ListItemText primary={"Planning"} />
              </ListItem>
            </NavLink>
            <NavLink
              to="/" // Replace the good root
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button className={classes.sideBarButton}>
                <ListItemIcon className={classes.sideBarIcon}>
                  <CollectionsBookmarkIcon />
                </ListItemIcon>
                <ListItemText primary={"Cours"} />
              </ListItem>
            </NavLink>
            <NavLink
              to="/" // Replace the good root
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button className={classes.sideBarButton}>
                <ListItemIcon className={classes.sideBarIcon}>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary={"Ma promotion"} />
              </ListItem>
            </NavLink>
            <NavLink
              to="/" // Replace the good root
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button className={classes.sideBarButton}>
                <ListItemIcon className={classes.sideBarIcon}>
                  <CasinoIcon />
                </ListItemIcon>
                <ListItemText primary={"Exercices et corrections"} />
              </ListItem>
            </NavLink>
            <NavLink
              to="/" // Replace the good root
              // isActive={'tools'=== history.location.pathname}
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button className={classes.sideBarButton}>
                <ListItemIcon className={classes.sideBarIcon}>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary={"Outils"} />
              </ListItem>
            </NavLink>
          </div>
        </List>
        <Divider />
        <Divider style={{ backgroundColor: "white" }} />
        <NavLink
          to="/sign-in"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItem button className={classes.sideBarLogout}>
            <ListItemText
              primary={"Se déconnecter"}
              style={{ textAlign: "center" }}
            />
          </ListItem>
        </NavLink>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {children}
      </main>
    </div>
  );
};
export default SideBar;
