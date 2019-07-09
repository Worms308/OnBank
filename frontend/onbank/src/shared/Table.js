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
        MUIDataTableBodyCell: {
          root: {
            minHeight: '50px',
          },
          cellStacked: {
            [theme.breakpoints.down('sm')]: {
              width: '50%',
              minHeight: '70px',
            },
          },
          responsiveStacked: {
            [theme.breakpoints.down('sm')]: {
              width: '50%',
              minHeight: '70px',
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
