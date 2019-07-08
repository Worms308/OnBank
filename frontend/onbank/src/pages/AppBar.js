import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ViewHeadline from '@material-ui/icons/ViewHeadline'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Hidden from '@material-ui/core/Hidden';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  color: {
    backgroundColor: '#FFF',
  },
  on: {
    fontWeight: 'bold',
    color: '#27AE60',
  },
  menuButton: {},

  bookmark: {
    marginLeft: theme.spacing(6),
    spacing: 4,
    fontSize: 15,
    textAlign: 'right',
  },
  icon: {
    marginLeft: 'auto',
    marginRight: 0,
    fontSize: 40,
    color: '#707070',
  },
  burgerItem: {
    "&:hover": {
      backgroundColor: 'rgb(7, 177, 77, 0.42)'
    }
  }

}));

export default function ButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }


  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Fragment>
    <AppBar position="relative" color="inherit" className={classes.root}>
      <Toolbar>
        <Hidden smUp>
        <ViewHeadline onClick={handleClick}>
          </ViewHeadline>
          <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose} className={classes.burgerItem}>Strona główna</MenuItem>
        <MenuItem onClick={handleClose} className={classes.burgerItem}>Transakcje</MenuItem>
        <MenuItem onClick={handleClose} className={classes.burgerItem}>Płatności</MenuItem>  
      </Menu>
        </Hidden>
        
        <Typography variant="h6" className={classes.on}>
          ON
        </Typography>
        <Typography variant="h6" className={classes.title}>
          BANK
        </Typography>
        <Hidden xsDown>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Strona główna" className={classes.bookmark} />
          <Tab label="Transakcje" className={classes.bookmark} />
          <Tab label="Płatności" className={classes.bookmark} />
        </Tabs>
        </Hidden>

        <AccountCircle className={classes.icon}></AccountCircle>
      </Toolbar>
    </AppBar>
    </Fragment>
  );
}
