import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import currencyFormat from 'core/CurrencyFormat';
import AccountNumberFormat from 'core/AccountNumberFormat';
import { getAccountDataAction } from 'actions/transactionsActions';

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

const AccountBar = ({ accountData, getAccountData }) => {
  const classes = useStyles();

  useEffect(getAccountData);
  return (
    <Paper>
      <div className={classes.divNameAccount}>
        <Typography variant="h5" className={classes.nameAccount}>
          {accountData.name}
        </Typography>
        <Typography variant="h5" className={classes.nameAccount}>
          {AccountNumberFormat(accountData.accountNumber)}
        </Typography>
      </div>

      <div className={classes.divAvalaibleFunds}>
        <Typography variant="subtitle1" className={classes.avalaibleFunds}>
          Dostępne środki
        </Typography>
        <Typography variant="h5" className={classes.avalaibleFunds}>
          {currencyFormat(accountData.availableFunds)}
        </Typography>
      </div>

      <div className={classes.divLock}>
        <Typography variant="subtitle1" className={classes.lock}>
          Blokady
        </Typography>
        <Typography variant="h5" className={classes.lock}>
          {currencyFormat(accountData.blockedFunds)}
        </Typography>
      </div>
    </Paper>
  );
};

const mapStateToProps = ({ transactions }) => {
  const accountData = transactions.mockAccountBar;
  return { accountData };
};

const mapDispatchToProps = dispatch => {
  return {
    getAccountData: () => {
      dispatch(getAccountDataAction('accountData'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountBar);
