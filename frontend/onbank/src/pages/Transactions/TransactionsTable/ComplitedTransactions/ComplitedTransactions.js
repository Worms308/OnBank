import React from 'react';
import { connect } from 'react-redux';
import Table from 'shared/Table';
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
  transactions.data.map(res =>
    dataTableData.push([
      res.date,
      `${res.name} ${res.surname}, ${res.accountNumber}`,
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplitedTransactions);
