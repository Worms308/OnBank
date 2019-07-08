import { createMuiTheme } from '@material-ui/core/styles';
// import React, { Component } from 'react';
// import Responsive from 'react-responsive';

export default createMuiTheme({
  palette: {
    primary: { 500: '#27AE60' }, //główny zielony
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
  },
});

// export const Desktop = props => <Responsive {...props} minWidth={992} />;
// export const Mobile = props => <Responsive {...props} maxWidth={1024} />;
