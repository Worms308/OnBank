import React from 'react';
import { connect } from 'react-redux';
import Table from 'pages/Transactions/TransactionsTable/Table';
import { getTransactionsAction } from 'actions/transactionsActions';

class ComplitedTransactions extends React.Component {
  componentDidMount() {
    const { getTransactions, userProfile } = this.props;
    getTransactions(userProfile.userID);
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

const mapStateToProps = ({ transactions, userProfile }) => {
  const dataTableData = [];
  if (transactions.transactionList) {
    transactions.transactionList.map(res =>
      dataTableData.push([
        res.date,
        `${res.recipientName || ''},${res.recipientAccountNumber || ''}`,
        res.description,
        res.operationType,
        res.amount,
        res.accountBalance,
      ]),
    );
  }
  return { dataTableData, userProfile };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: userID => {
      dispatch(getTransactionsAction('transactionList', userID));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplitedTransactions);
