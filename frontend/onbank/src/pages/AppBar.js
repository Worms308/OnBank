import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Home from '@material-ui/icons/Home';
import ViewList from '@material-ui/icons/ViewList';
import SwapHoriz from '@material-ui/icons/SwapHoriz';
import ViewHeadline from '@material-ui/icons/ViewHeadline';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { paths } from 'routes/paths';

const bookmarkArray = [
  { name: 'Strona główna', path: paths.home, icon: <Home /> },
  { name: 'Transakcje', path: paths.transactions, icon: <ViewList /> },
  { name: 'Przelew', path: paths.newTransfer, icon: <SwapHoriz /> },
];

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
    fontSize: 16,
    textAlign: 'center',
    //display: 'inline-block',
    whiteSpace: 'nowrap',
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
  burgerTitleOn: {
    fontWeight: 'bold',
    color: '#27AE60',

    marginLeft: 70,
    display: 'inline',
  },
  burgerTitleBank: {
    display: 'inline',
  },
}));

export default function ButtonAppBar() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [value, setValue] = React.useState(bookmarkArray[0].name);
  const [redirect, setRedirect] = React.useState('');
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown') {
      return;
    }
    setState({ ...state, [side]: open });
  };

  const handleChangeTabs = (event, newValue) => {
    setValue(newValue);
    bookmarkArray.map(bookmark => {
      if (newValue === bookmark.name) {
        setRedirect(bookmark.path);
      }
      return newValue;
    });
  };

  const handleChangeList = newValue => {
    setValue(newValue);
    bookmarkArray.map(bookmark => {
      if (newValue === bookmark.name) {
        setRedirect(bookmark.path);
      }
      return newValue;
    });
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
          <Typography variant="h6" className={classes.burgerTitleOn}>
            ON
          </Typography>
          <Typography variant="h6" className={classes.burgerTitleBank}>
            BANK
          </Typography>
        </ListItemText>
        <Divider />
      </List>
      <List>
        {bookmarkArray.map(bookmark => (
          <ListItem key={bookmark.name} button onClick={() => handleChangeList(bookmark.name)}>
            <ListItemIcon>{bookmark.icon}</ListItemIcon>
            <ListItemText primary={bookmark.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Fragment>
      <AppBar position="relative" color="inherit" className={classes.root}>
        <Toolbar>
          <Hidden mdUp>
            <Button onClick={toggleDrawer('left', true)}>
              <ViewHeadline></ViewHeadline>
            </Button>
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
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={handleChangeTabs}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              {bookmarkArray.map(bookmark => (
                <Tab
                  key={bookmark.name}
                  label={bookmark.name}
                  value={bookmark.name}
                  className={classes.bookmark}
                />
              ))}
            </Tabs>
          </Hidden>
          <AccountCircle className={classes.icon}></AccountCircle>
          {redirect && <Redirect to={redirect} />}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
