import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Table from 'pages/Transactions/TransactionsTable/Table';
import { getLockedTransactionsAction } from 'actions/transactionsActions';

const PendingTransactions = ({ dataTable, getLockedTransactions }) => {
  useEffect(() => getLockedTransactions(), [getLockedTransactions]);

  return <Table data={dataTable} />;
};

const mapStateToProps = ({ transactions, userProfile }) => {
  const dataTable = [];
  if (transactions.lockedTransactionList) {
    transactions.lockedTransactionList.map(res =>
      dataTable.push([
        res.id,
        res.date,
        res.recipientAccountNumber === userProfile.accountNumber
          ? `${res.senderName || ''},${res.senderAccountNumber || ''}`
          : `${res.recipientName || ''},${res.recipientAccountNumber || ''}`,
        res.description,
        res.operationType,
        res.recipientAccountNumber === userProfile.accountNumber ? res.amount : -1 * res.amount,
        res.accountBalance,
      ]),
    );
  }
  console.log(dataTable);
  return { dataTable };
};

const mapDispatchToProps = dispatch => {
  return {
    getLockedTransactions: () => {
      dispatch(getLockedTransactionsAction('lockedTransactionList'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PendingTransactions);
