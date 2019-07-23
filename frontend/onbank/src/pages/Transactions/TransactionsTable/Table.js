import React from 'react';
import { withRouter } from 'react-router-dom';
import { FormGroup, FormLabel, TextField } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import { KeyboardDatePicker } from '@material-ui/pickers';
import MUIDataTable from 'mui-datatables';
import { paths } from 'routes/paths';
import currencyFormat from 'utils/CurrencyFormat';
import AccountNumberFormat from 'utils/AccountNumberFormat';
import DateFormat from 'utils/DateFormat';
import ConvertOperationType from 'utils/ConvertOperationType';
import { colorthemeButtonAndDate } from 'themes/customTheme';

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
        sortDirection: 'desc',
        filterType: 'custom',
        customFilterListRender: v => {
          if (v['from'] && v['to']) {
            return `Data od: ${v['from']}, do: ${v['to']}`;
          } else if (v['from']) {
            return `Data od: ${v['from']}`;
          } else if (v['to']) {
            return `Data do: ${v['to']}`;
          }
          return false;
        },
        filterOptions: {
          names: [],
          logic(date, filters) {
            if (filters['from'] && filters['to']) {
              return date < filters['from'] || date > filters['to'];
            } else if (filters['from']) {
              return date < filters['from'];
            } else if (filters['to']) {
              return date > filters['to'];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <div>
              <FormLabel>Data</FormLabel>
              <FormGroup row style={{ marginTop: '8px' }}>
              <MuiThemeProvider theme={colorthemeButtonAndDate}>
                <KeyboardDatePicker
                  label="od"
                  format="dd.MM.yyyy"
                  invalidDateMessage="Nieprawidłowy format daty"
                  value={filterList[index]['from'] || new Date()}
                  onChange={value => {
                    if (Date.parse(value)) {
                      filterList[index]['from'] = DateFormat(new Date(value));
                    } else {
                      filterList[index]['from'] = 'Nieprawidłowy format daty';
                    }
                    onChange(filterList[index], index, column);
                  }}
                  style={{ width: '47%', marginRight: '4%' }}
                />
                <KeyboardDatePicker
                  label="do"
                  format="dd.MM.yyyy"
                  invalidDateMessage="Nieprawidłowy format daty"
                  value={filterList[index]['to'] || new Date()}
                  onChange={value => {
                    if (Date.parse(value)) {
                      filterList[index]['to'] = DateFormat(new Date(value));
                    } else {
                      filterList[index]['to'] = 'Nieprawidłowy format daty';
                    }
                    onChange(filterList[index], index, column);
                  }}
                  style={{ width: '47%' }}
                />
                </MuiThemeProvider>
              </FormGroup>
            </div>
          ),
        },
        customBodyRender: (value = '') => {
          return Date.parse(value) ? <span>{DateFormat(new Date(value), true)}</span> : '';
        },
      },
    },
    {
      name: 'account',
      label: 'Odbiorca / Nadawca',
      options: {
        filter: false,
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
        filter: false,
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
        filterType: 'custom',
        customFilterListRender: v => {
          if (v['min'] && v['max']) {
            return `Min kwota: ${v['min']}, Maks kwota: ${v['max']}`;
          } else if (v['min']) {
            return `Min kwota: ${v['min']}`;
          } else if (v['max']) {
            return `Maks kwota: ${v['max']}`;
          }
          return false;
        },
        filterOptions: {
          names: [],
          logic(cost, filters) {
            if (filters['min'] && filters['max']) {
              return cost < filters['min'] || cost > filters['max'];
            } else if (filters['min']) {
              return cost < filters['min'];
            } else if (filters['max']) {
              return cost > filters['max'];
            }
            return false;
          },
          display: (filterList, onChange, index, column) => (
            <div>
              <FormLabel>Kwota</FormLabel>
              <FormGroup row style={{ marginTop: '8px' }}>
                <TextField
                  label="min"
                  value={filterList[index]['min'] || ''}
                  onChange={event => {
                    filterList[index]['min'] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                  style={{ width: '45%', marginRight: '5%' }}
                />
                <TextField
                  label="maks"
                  value={filterList[index]['max'] || ''}
                  onChange={event => {
                    filterList[index]['max'] = event.target.value;
                    onChange(filterList[index], index, column);
                  }}
                  style={{ width: '45%' }}
                />
              </FormGroup>
            </div>
          ),
        },
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
        filter: false,
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
    textLabels: {
      body: {
        noMatch: 'Przepraszamy, nie znaleziono pasujących rekordów',
      },
      pagination: {
        rowsPerPage: 'Wierszy na stronę:',
        displayRows: 'z',
      },
      filter: {
        title: 'Filtry',
        reset: 'Wyczyść',
      },
      toolbar: {
        search: 'Szukaj',
        downloadCsv: 'Pobierz plik CSV',
        viewColumns: 'Wyświetl kolumny',
        filterTable: 'Filtrowanie tabeli',
      },
      viewColumns: {
        title: 'Pokaż kolumny',
        titleAria: 'Pokaż / Ukryj kolumny tabeli',
      },
    },
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
