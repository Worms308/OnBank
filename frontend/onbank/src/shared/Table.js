import React from 'react';
import { createMuiTheme, MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import currencyFormat from 'core/CurrencyFormat';
import AccountNumberFormat from 'core/AccountNumberFormat';
import DateFormat from 'core/DateFormat';

const columns = [
  {
    name: 'date',
    label: 'Data',
    options: {
      customBodyRender: value => {
        return <span>{DateFormat(new Date(value), true)}</span>;
      },
    },
  },
  {
    name: 'account',
    label: 'Odbiorca / Nadawca',
    options: {
      customBodyRender: value => {
        const array = value.split(',');
        return (
          <div>
            <div>{array[0]}</div>
            <div style={{ color: '#999', fontSize: '12px' }}>{AccountNumberFormat(array[1])}</div>
          </div>
        );
      },
    },
  },
  {
    name: 'description',
    label: 'Opis operacji',
    options: {
      customBodyRender: value => {
        if (value.length > 32) {
          return <div style={{ width: '120px' }}>{value.substring(0, 32)}...</div>;
        }
        return <div>{value}</div>;
      },
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
  selectableRows: 'none',
  filterType: 'checkbox',
  print: false,
};

const Table = ({ data }) => {
  const theme = useTheme();
  const custom = () =>
    createMuiTheme({
      palette: {
        primary: { 500: '#27AE60' },
        background: {
          default: '#ECF0F1',
        },
      },
      overrides: {
        MUIDataTable: {
          paper: {
            borderRadius: 0,
            boxShadow:
              '-5px 0 5px -5px rgba(0,0,0,0.2), 5px 0 5px -5px rgba(0,0,0,0.2), 0 5px 5px -5px rgba(0,0,0,0.2)',
          },
        },
        MUIDataTableBodyRow: {
          responsiveStacked: {
            [theme.breakpoints.down('sm')]: {
              display: 'grid',
              gridTemplateColumns: '50% 50%',
            },
          },
        },
        MUIDataTableBodyCell: {
          cellStacked: {
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: '100%',
              whiteSpace: 'normal',
            },
          },
          responsiveStacked: {
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: '100%',
              whiteSpace: 'normal',
            },
          },
        },
      },
    });
  return (
    <MuiThemeProvider theme={custom}>
      <MUIDataTable data={data} columns={columns} options={options} />
    </MuiThemeProvider>
  );
};

export default Table;
