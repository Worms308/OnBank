import React from 'react';
import MUIDataTable from 'mui-datatables';
import { useTheme } from '@material-ui/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const Table = ({ data, columns, options }) => {
  const theme = useTheme();
  console.log(theme);
  const custom = () =>
    createMuiTheme({
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
