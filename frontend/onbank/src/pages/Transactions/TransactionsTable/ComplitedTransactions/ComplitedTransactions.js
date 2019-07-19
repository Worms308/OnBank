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
    const { dataTableData } = this.props;
    return (
      <>
        <Table data={dataTableData} />
      </>
    );
  }
}

const mapStateToProps = ({ transactions }) => {
  const dataTableData = [];
  if (transactions.mockTransactionList) {
    transactions.mockTransactionList.map(res =>
      dataTableData.push([
        res.id,
        res.date,
        `${res.recipientName || ''},${res.recipientAccountNumber || ''}`,
        res.description,
        res.operationType,
        res.amount,
        res.accountBalance,
      ]),
    );
  }
  return { dataTableData };
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
