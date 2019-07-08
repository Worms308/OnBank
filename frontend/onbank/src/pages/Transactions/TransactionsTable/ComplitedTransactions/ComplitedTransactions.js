import React from 'react';
import { connect } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import Table from 'shared/Table';
import { getTransactionsAction } from 'actions/transactionsActions';

const datatableData = [
  [
    '02.01.2019',
    'Jan Kowalski 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Nowak 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    '-50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Adamiak 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Testowski 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    '-50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    `Jan Brostojewski 00000000000000000000000000`,
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
];

const columns = [
  { name: 'date', label: 'Data' },
  {
    name: 'account',
    label: 'Odbiorca/Nadawca',
    options: {
      customBodyRender: value => {
        const array = value.split(/([0-9]+)/);
        return (
          <Grid container>
            <Grid item xs={12}>
              {array[0]}
            </Grid>
            <Grid item xs={12}>
              <Typography noWrap>
                {array[1].match(/[A-Z]{2}|(?:(?:\d{2}|\d{4})(?=(\d{4})*$))/g).join(' ')}
              </Typography>
            </Grid>
          </Grid>
        );
      },
    },
  },
  { name: 'description', label: 'Opis operacji' },
  { name: 'type', label: 'Rodzaj operacji' },
  {
    name: 'cost',
    label: 'Kwota operacji',
    options: {
      customBodyRender: value => {
        if (value < '0') {
          return <span style={{ color: '#C0392B' }}>{value}</span>;
        }
        if (value > '0') {
          return <span style={{ color: '#3FD07C' }}>{value}</span>;
        }
        return value;
      },
    },
  },
  { name: 'saldo', label: 'Saldo' },
];

const options = {
  selectableRows: false,
  filterType: 'checkbox',
  print: false,
};

class ComplitedTransactions extends React.Component {
  componentDidMount() {
    const { getTransactions } = this.props;
    getTransactions();
  }

  render() {
    return <Table data={datatableData} columns={columns} options={options} />;
  }
}

const mapStateToProps = ({ transactions }) => {
  return { transactions };
};

const mapDispatchToProps = dispatch => {
  return {
    getTransactions: () => {
      dispatch(getTransactionsAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComplitedTransactions);
