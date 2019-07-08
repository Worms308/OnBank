import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ViewHeadline from '@material-ui/icons/ViewHeadline'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
//import HomeIcon from '@material-ui/core/HomeIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  burgerTitleOn:{
      fontWeight: 'bold',
      color: '#27AE60',
      
      marginLeft:70,
      display: 'inline'
  },
  burgerTitleBank:{
   
    display: 'inline'
  }

}));

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    left: false,
  });
  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown') {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItemText>
        <Typography variant="h6" className={classes.burgerTitleOn}>  ON  </Typography>
        <Typography variant="h6" className={classes.burgerTitleBank}>  BANK </Typography>
      </ListItemText>
      <Divider/>
      </List>
      <List>
        <ListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Przelewy" />
        </ListItem>

        <ListItem button>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary="Przelewy" />
        </ListItem>
       
        <ListItem button>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary="Płatności" />
        </ListItem>

      </List>
      
    </div>
  );

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <Fragment>
    <AppBar position="relative" color="inherit" className={classes.root}>
      <Toolbar>
        <Hidden smUp>
         <Button onClick={toggleDrawer('left', true)}><ViewHeadline></ViewHeadline></Button>
         <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
         {sideList('left')}
      </Drawer>
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
