import React from 'react';
import { makeStyles, createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MUIDataTable from 'mui-datatables';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  typography: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const datatableData = [
  [
    '01.01.2019',
    'Jan Kowalski 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Nowak 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '-50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Adamiak 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Testowski 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '-50,00 PLN',
    '999 950,00 PLN',
  ],
  [
    '01.01.2019',
    'Jan Brostojewski 00 0000 0000 0000 0000 0000 0000',
    'Hajs z YT',
    'Przelew z rachunku',
    '50,00 PLN',
    '999 950,00 PLN',
  ],
];

const Table = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          paper: {
            boxShadow: 'none',
          },
        },
      },
    });

  const columns = [
    { name: 'date', label: 'Data' },
    { name: 'account', label: 'Odbiorca/Nadawca' },
    { name: 'description', label: 'Opis operacji' },
    { name: 'type', label: 'Rodzaj operacji' },
    { name: 'cost', label: 'Kwota operacji' },
    { name: 'saldo', label: 'Saldo' },
  ];

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} centered>
          <AntTab label="Lista transakcji" />
          <AntTab label="Oczekujące/Blokady" />
        </AntTabs>
        <MuiThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            data={datatableData}
            columns={columns}
            options={{
              selectableRows: false,
              filterType: 'checkbox',
              print: false,
            }}
          />
        </MuiThemeProvider>
      </div>
    </div>
  );
};

export default Table;
