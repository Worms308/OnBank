import React from 'react';
import { createMuiTheme, MuiThemeProvider, useTheme } from '@material-ui/core/styles';
import MUIDataTable from 'mui-datatables';

const Table = ({ data, columns, options }) => {
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
              whiteSpace: 'normal'
            },
          },
          responsiveStacked: {
            [theme.breakpoints.down('sm')]: {
              width: '100%',
              height: '100%',
              whiteSpace: 'normal'
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
