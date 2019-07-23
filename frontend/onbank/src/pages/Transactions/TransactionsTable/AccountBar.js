import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import currencyFormat from 'utils/CurrencyFormat';
import AccountNumberFormat from 'utils/AccountNumberFormat';
import { useStyles } from 'themes/accountBarTheme';

const AccountBar = ({ accountData, accountNumber }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.divNameAccount}>
        <Typography variant="h5" className={classes.nameAccount}>
          {accountData.name}
        </Typography>
        <Typography variant="h5" className={classes.numberAccount}>
          {AccountNumberFormat(accountNumber) || 'Brak numeru konta'}
        </Typography>
      </div>

      <div className={classes.divAvalaibleFunds}>
        <Typography variant="subtitle1" className={classes.avalaibleFundsLabel}>
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
    </div>
  );
};

const mapStateToProps = ({ transactions, userProfile }) => {
  const accountData = transactions.mockAccountBar;
  const {accountNumber} = userProfile;
  return { accountData, accountNumber };
};

export default connect(
  mapStateToProps
)(AccountBar);
