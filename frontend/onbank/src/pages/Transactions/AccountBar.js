import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import currencyFormat from 'core/CurrencyFormat';
import AccountNumberFormat from 'core/AccountNumberFormat';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: 'white	',
  },
  nameAccount: {
    paddingTop: 10,
    color: '#707070',
    marginLeft: 20,
  },
  lock: {
    color: '#C0392B',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      marginRight: 50,
    },
  },
  avalaibleFunds: {
    color: '#707070',
    textAlign: 'right',
    [theme.breakpoints.down('md')]: {
      marginRight: 50,
    },
  },
  divLock: {
    paddingTop: 15,
    marginRight: 100,
    float: 'right',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      float: 'none',
      display: 'inline',
    },
  },

  divAvalaibleFunds: {
    float: 'right',
    paddingTop: 15,
    marginRight: 50,

    [theme.breakpoints.down('md')]: {
      float: 'none',
      display: 'inline',
    },
  },
  divNameAccount: {
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));

export default function AccountBar() {
  const classes = useStyles();

  return (
    <Paper>
      <div className={classes.divNameAccount}>
        <Typography variant="h5" className={classes.nameAccount}>
          Nazwa konta
        </Typography>
        <Typography variant="h5" className={classes.nameAccount}>
          {AccountNumberFormat('00000000000000000000000000')}
        </Typography>
      </div>

      <div className={classes.divAvalaibleFunds}>
        <Typography variant="subtitle1" className={classes.avalaibleFunds}>
          Dostępne środki
        </Typography>
        <Typography variant="h5" className={classes.avalaibleFunds}>
          {currencyFormat(1000.0)}
        </Typography>
      </div>

      <div className={classes.divLock}>
        <Typography variant="subtitle1" className={classes.lock}>
          Blokady
        </Typography>
        <Typography variant="h5" className={classes.lock}>
          {currencyFormat(-100.0)}
        </Typography>
      </div>
    </Paper>
  );
}
