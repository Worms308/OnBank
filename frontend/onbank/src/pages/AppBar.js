import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '90%',
    marginBottom: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  bookmark: {
    marginLeft: theme.spacing(10),
    spacing: 2,
    fontSize: 16,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="default">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          OnBank
          <Button color="inherit" className={classes.bookmark}>
            Transakcje
          </Button>
          <Button color="inherit" className={classes.bookmark}>
            Więcej Transakcji
          </Button>
          <Button color="inherit" className={classes.bookmark}>
            Jeszcze Więcej Transakcji
          </Button>
        </Typography>
        <AccountCircle style={{ fontSize: 40 }} />
      </Toolbar>
    </AppBar>
  );
}
