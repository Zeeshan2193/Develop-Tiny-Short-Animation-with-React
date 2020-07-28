import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
     boxShadow:"2px 2px #888888",
  },
   
  title: {
  paddingTop: "5px",
  cursor :'pointer',
  color :"white",
  },
}));

export function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent"   className="NavBar">
        <Toolbar    >
            
        <Grid container>
        <Grid item xs={1}>
          
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          </Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={12} sm={1} >
          <Typography variant="h6" className={classes.title}>
            Home
          </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
          <Typography variant="h6" className={classes.title}>
            About us
          </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
          <Typography variant="h6" className={classes.title}>
            Services
          </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
          <Typography variant="h6" className={classes.title}>
            Career
          </Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
  }