import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
    marginBottom: 20
  },
  menuButton: {
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  bookmark:{
    marginLeft: theme.spacing(10),
    spacing: 2,
    fontSize: 16,  
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <AppBar position="relative" color="default">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OnBank
            <Button color="inherit" className={classes.bookmark} >Transakcje</Button>
            <Button color="inherit" className={classes.bookmark} > Więcej Transakcji</Button>
            <Button color="inherit" className={classes.bookmark} > Jeszcze Więcej Transakcji</Button>
          </Typography>
        <AccountCircle style={{ fontSize: 40 }}></AccountCircle>
        </Toolbar>
      </AppBar>
    </Container>
  );
}