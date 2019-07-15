import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
import { useStyles } from '../themes/appBarTheme';
import Popover from '@material-ui/core/Popover';
import { Paper} from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const bookmarkArray = [
  { name: 'Strona główna', path: paths.home, icon: <Home /> },
  { name: 'Transakcje', path: paths.transactions, icon: <ViewList /> },
  { name: 'Przelew', path: paths.newTransfer, icon: <SwapHoriz /> },
];

const NavigationBar = ({ location }) => {
  const [state, setState] = React.useState({
    left: false,
  });
  const classes = useStyles();

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown') {
      return;
    }
    setState({ ...state, [side]: open });
  };


   const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
          <ListItem key={bookmark.name} component={Link} to={bookmark.path} button>
            <ListItemIcon>{bookmark.icon}</ListItemIcon>
            <ListItemText primary={bookmark.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const pathname = location.pathname.match(/((\/([\w\-\\.]+[^#?\\/]+))|\/)/g);

  return (
    <Fragment>
      <AppBar position="relative" color="inherit" className={classes.root}>
        <Toolbar>
          <Hidden mdUp>
            <Button onClick={toggleDrawer('left', true)}>
              <ViewHeadline />
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
              value={pathname[0]}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              {bookmarkArray.map(bookmark => (
                <Tab
                  key={bookmark.name}
                  label={bookmark.name}
                  value={bookmark.path}
                  component={Link}
                  to={bookmark.path}
                  className={classes.bookmark}
                />
              ))}
            </Tabs>
          </Hidden>
          <Button className={classes.icon} onClick={handleClick}><AccountCircle className={classes.icon2}/></Button>
          <div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              <Paper className={classes.personPaper}>
               <div className={classes.insideDivPerson}>
                  <Typography >Jan Kowalski</Typography>
                  <ButtonGroup
                    variant="contained"
                    color="default"
                    size="large"
                  >
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                  </ButtonGroup>
                </div>
              </Paper>
            </Popover>
          </div>


        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default withRouter(NavigationBar);
