import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  AppBar,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Popover,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AccountCircle, SwapHoriz, ViewHeadline, ViewList } from '@material-ui/icons';
// import { Home} from '@material-ui/icons';
import { paths } from 'routes/paths';
import { useStyles } from 'themes/appBarTheme';
import { getUserProfileAction } from 'actions/userProfileActions';

const bookmarkArray = [
  //{ name: 'Strona główna', path: paths.home, icon: <Home /> },
  { name: 'Transakcje', path: paths.transactions, icon: <ViewList /> },
  { name: 'Przelew', path: paths.newTransfer, icon: <SwapHoriz /> },
];

const NavigationBar = ({ location, userProfile, getUserProfile }) => {
  const [state, setState] = React.useState({
    left: false,
  });
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [disabledValue, setDisabledValue] = React.useState(true);
  const [disabledValue2, setDisabledValue2] = React.useState(false);

  useEffect(() => getUserProfile(userProfile.userID), [getUserProfile, userProfile.userID]);

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown') {
      return;
    }
    setState({ ...state, [side]: open });
  };

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClickUserID(id) {
    getUserProfile(id);
    setDisabledValue(!disabledValue);
    setDisabledValue2(!disabledValue2);
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
          <Button className={classes.icon} onClick={handleClick}>
            <AccountCircle className={classes.icon2} />
          </Button>
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
                  <Typography>Imie: {userProfile.name}</Typography>
                  <Typography>Nazwisko: {userProfile.surname}</Typography>
                  <ButtonGroup variant="contained" color="default" size="large">
                    <Button onClick={() => handleClickUserID(1)} disabled={disabledValue}>
                      User 1
                    </Button>
                    <Button onClick={() => handleClickUserID(2)} disabled={disabledValue2}>
                      User 2
                    </Button>
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

const mapStateToProps = ({ userProfile }) => {
  return { userProfile };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: userID => {
      dispatch(getUserProfileAction(userID));
    },
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(NavigationBar),
);
