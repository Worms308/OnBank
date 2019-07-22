import React from 'react';
import { withRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';
import { paths } from 'routes/paths';
import currencyFormat from 'utils/CurrencyFormat';
import AccountNumberFormat from 'utils/AccountNumberFormat';
import DateFormat from 'utils/DateFormat';
import ConvertOperationType from 'core/ConvertOperationType';

const Table = ({ data, history }) => {
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
        MUIDataTableHeadCell: {
          root: {
            whiteSpace: 'nowrap',
          },
        },
        MUIDataTableBodyRow: {
          root: {
            cursor: 'pointer',
          },
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

  const columns = [
    {
      name: 'idTransaction',
      label: 'idTransaction',
      options: {
        display: 'false',
        filter: false,
        sort: false,
        download: false,
        print: false,
        viewColumns: false,
      },
    },
    {
      name: 'date',
      label: 'Data',
      options: {
        customBodyRender: (value = '') => {
          return Date.parse(value) ? <span>{DateFormat(new Date(value), true)}</span> : '';
        },
      },
    },
    {
      name: 'account',
      label: 'Odbiorca / Nadawca',
      options: {
        customBodyRender: (value = '') => {
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
        customBodyRender: (value = '') => {
          return value.length > 32 ? (
            <div style={{ width: '120px' }}>{value.substring(0, 32)}...</div>
          ) : (
            value
          );
        },
      },
    },
    {
      name: 'type',
      label: 'Rodzaj operacji',
      options: {
        customBodyRender: (value = '') => {
          return ConvertOperationType(value);
        },
      },
    },
    {
      name: 'cost',
      label: 'Kwota operacji',
      options: {
        customBodyRender: (value = '') => {
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
        customBodyRender: (value = '') => {
          return <span>{currencyFormat(value)}</span>;
        },
      },
    },
  ];

  const options = {
    selectableRows: 'none',
    filterType: 'checkbox',
    print: false,
    onRowClick: rowData =>
      history.push(paths.detailsTransaction.replace(':idTransaction', rowData[0])),
  };

  return (
    <MuiThemeProvider theme={custom}>
      <MUIDataTable data={data} columns={columns} options={options} />
    </MuiThemeProvider>
  );
};

export default withRouter(Table);
