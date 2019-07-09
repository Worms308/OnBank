import React from 'react';
import { connect } from 'react-redux';
import Table from 'shared/Table';
import { getTransactionsAction, sendTransactionsAction } from 'actions/transactionsActions';

class ComplitedTransactions extends React.Component {
  componentDidMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  render() {
    const { sendTransactions, dataTableData } = this.props;
    return (
      <>
        <button onClick={sendTransactions}>Przelew</button>
        <Table data={dataTableData} />
      </>
    );
  }
}

const mapStateToProps = ({ transactions }) => {
  const dataTableData = [];
  transactions.data.map(res =>
    dataTableData.push([
      res.date,
      `${res.name} ${res.surname} ${res.accountNumber}`,
      res.description,
      res.typeOfOperation,
      res.ammount,
      res.accountBallance,
    ]),
  );
  return { dataTableData };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => {
      dispatch(getTransactionsAction('list'));
    },
    sendTransactions: () => {
      dispatch(sendTransactionsAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplitedTransactions);
