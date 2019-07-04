import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

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
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <AppBar position="relative" color="inherit" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.on}>
          ON
        </Typography>
        <Typography variant="h6" className={classes.title}>
          BANK
        </Typography>
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

        <AccountCircle className={classes.icon}></AccountCircle>
      </Toolbar>
    </AppBar>
  );
}
