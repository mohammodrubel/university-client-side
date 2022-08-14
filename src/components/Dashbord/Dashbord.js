import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link,Outlet } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Dashbord() {
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
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Welcome To Dashbord
          </Typography>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <li style={{listStyle:'none'}}><Link to='/'style={{textDecoration:'none',color:'#080831'}}><b style={{margin:'0 20px'}}>Home</b><i className="fa-solid mx-2 fa-house"></i></Link></li> <br />

                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-plus"></i><Link to='/dashbord/createslider'style={{textDecoration:'none',color:'#080831'}}><b>Create Slider</b></Link></li> <br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-plus"></i><Link to='/dashbord/createcourse'style={{textDecoration:'none',color:'#080831'}}><b>Create Course</b></Link></li> <br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-plus"></i><Link to='/dashbord/createevent'style={{textDecoration:'none',color:'#080831'}}><b>Create Event</b></Link></li> <br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-plus"></i><Link to='/dashbord/createblog'style={{textDecoration:'none',color:'#080831'}}><b>Create Blog</b></Link></li> <br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-plus"></i><Link to='/dashbord/createtecher'style={{textDecoration:'none',color:'#080831'}}><b>Create Teacher</b></Link></li> <br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-plus"></i><Link to='/dashbord/createAdmin'style={{textDecoration:'none',color:'#080831'}}><b>Create Admin</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-trash"></i><Link to='/dashbord/deleteslider'style={{textDecoration:'none',color:'#080831'}}><b>Delete Slider</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-trash"></i><Link to='/dashbord/deletecourse'style={{textDecoration:'none',color:'#080831'}}><b>Delete Course</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-trash"></i><Link to='/dashbord/deleteevent'style={{textDecoration:'none',color:'#080831'}}><b>Delete Event</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-trash"></i><Link to='/dashbord/deleteblog'style={{textDecoration:'none',color:'#080831'}}><b>Delete Blog</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-trash"></i><Link to='/dashbord/owner'style={{textDecoration:'none',color:'#080831'}}><b>Delete Owner</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-comment"></i><Link to='/dashbord/message'style={{textDecoration:'none',color:'#080831'}}><b>Special Message</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-circle-exclamation"></i><Link to='/dashbord/eventmanagement'style={{textDecoration:'none',color:'#080831'}}><b>Event Information</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-solid fa-circle-question"></i><Link to='/dashbord/courseinformation'style={{textDecoration:'none',color:'#080831'}}><b>Course Information</b></Link></li><br />


                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-user-gear"></i><Link to='/dashbord/createadmin'style={{textDecoration:'none',color:'#080831'}}><b>Create Admin</b></Link></li><br />
                                <li style={{listStyle:'none'}}><i className="mx-2 fa-solid fa-users"></i><Link to='/dashbord/webuser'style={{textDecoration:'none',color:'#080831'}}><b>Web User</b></Link></li><br />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Outlet />
      </main>
    </div>
  );
}
