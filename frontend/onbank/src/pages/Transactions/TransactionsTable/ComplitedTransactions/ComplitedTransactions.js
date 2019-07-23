import React from 'react';
import { connect } from 'react-redux';
import Table from 'pages/Transactions/TransactionsTable/Table';
import { getTransactionsAction } from 'actions/transactionsActions';

class ComplitedTransactions extends React.Component {
  componentDidMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  render() {
    const { dataTable } = this.props;
    return <Table data={dataTable} />;
  }
}

const mapStateToProps = ({ transactions, userProfile }) => {
  const dataTable = [];
  if (transactions.transactionList) {
    transactions.transactionList.map(res =>
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
  return { dataTable };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => {
      dispatch(getTransactionsAction('transactionList'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplitedTransactions);
