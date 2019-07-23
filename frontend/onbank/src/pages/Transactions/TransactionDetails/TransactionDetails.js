import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DetailsComponentTitle from 'shared/DetailsComponentTitle';
import DetailsComponent from 'shared/DetailsComponent';
import StringComponent from 'shared/StringComponent';
import { getDetailsTransactionAction } from 'actions/transactionsActions';

const useStyles = makeStyles(() => ({
  div: {
    width: '100%',
    height: '100vh',
  },
}));

const DetailsTransaction = ({ match, getDetailsTransaction, detailsTransaction }) => {
  const classes = useStyles();
  const { idTransaction } = match.params;

  useEffect(() => getDetailsTransaction(idTransaction), [getDetailsTransaction, idTransaction]);

  const {
    createDate,
    date,
    recipientName,
    recipientAccountNumber,
    description,
    operationType,
    amount,
    realizationState,
    senderName,
    senderAccountNumber,
  } = detailsTransaction;

  return (
    <div className={classes.div}>
      <DetailsComponentTitle title="Szczegóły przelewu" />
      <DetailsComponent title="Szczegóły odbiorcy">
        <StringComponent
          string1="Przelew na nr konta:"
          string2={recipientAccountNumber}
          bold
          accountNumber
        />
        <StringComponent string1="Dane odbiorcy:" string2={recipientName} />
      </DetailsComponent>
      <DetailsComponent title="Szczegóły nadawcy">
        <StringComponent
          string1="Przelew na nr konta:"
          string2={senderAccountNumber}
          bold
          accountNumber
        />
        <StringComponent string1="Dane nadawcy:" string2={senderName} />
      </DetailsComponent>
      <DetailsComponent title="Szczegóły nadawcy">
        <StringComponent string1="Data przelewu:" string2={createDate} />
        <StringComponent string1="Data zaksięgowania:" string2={date} />
        <StringComponent string1="Rodzaj przelewu:" string2={operationType} ConvertType />
        <StringComponent string1="Kwota przelewu:" string2={amount} bold amount />
        <StringComponent string1="Status przelewu:" string2={realizationState} ConvertType />
        <StringComponent string1="Opis:" string2={description} />
      </DetailsComponent>
    </div>
  );
};

const mapStateToProps = ({ transactions }) => {
  const { detailsTransaction } = transactions;
  return { detailsTransaction };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailsTransaction: idTransaction => {
      dispatch(getDetailsTransactionAction('detailsTransaction', idTransaction));
    },
  };
};

DetailsTransaction.defaultProps = {
  detailsTransaction: {},
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsTransaction);
