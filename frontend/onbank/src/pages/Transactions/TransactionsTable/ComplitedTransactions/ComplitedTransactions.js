import React from 'react';
import Table from 'shared/Table';
import { Grid, Typography } from '@material-ui/core';
import currencyFormat from 'core/CurrencyFormat';
import AccountNumberFormat from 'core/AccountNumberFormat';

const datatableData = [
  [
    '01.01.2019',
    'Jan Kowalski 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    50.0,
    999950.0,
  ],
  [
    '01.01.2019',
    'Jan Nowak 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    -50.0,
    999950.0,
  ],
  [
    '01.01.2019',
    'Jan Adamiak 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    50.0,
    999950.0,
  ],
  [
    '01.01.2019',
    'Jan Testowski 00000000000000000000000000',
    'Hajs z YT',
    'Przelew z rachunku',
    -50.0,
    999950.0,
  ],
  [
    '01.01.2019',
    `Jan Brostojewski 00000000000000000000000000`,
    'Hajs z YT',
    'Przelew z rachunku',
    50.0,
    999950.0,
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
              <Typography variant="subtitle1" noWrap>
                {AccountNumberFormat(array[1])}
              </Typography>
            </Grid>
          </Grid>
        );
      },
    },
  },
  {
    name: 'description',
    label: 'Opis operacji',
    options: {
      customBodyRender: value => (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subtitle1" noWrap>
              {value}
            </Typography>
          </Grid>
        </Grid>
      ),
    },
  },
  { name: 'type', label: 'Rodzaj operacji' },
  {
    name: 'cost',
    label: 'Kwota operacji',
    options: {
      customBodyRender: value => {
        if (value < 0) {
          return <span style={{ color: '#C0392B' }}>{currencyFormat(value)}</span>;
        }
        if (value > 0) {
          return <span style={{ color: '#3FD07C' }}>{currencyFormat(value)}</span>;
        }
        return currencyFormat(value);
      },
    },
  },
  {
    name: 'saldo',
    label: 'Saldo',
    options: {
      customBodyRender: value => {
        return <span>{currencyFormat(value)}</span>;
      },
    },
  },
];

const options = {
  selectableRows: false,
  filterType: 'checkbox',
  print: false,
};

const ComplitedTransactions = () => (
  <>
    <Table data={datatableData} columns={columns} options={options} />
  </>
);

export default ComplitedTransactions;
