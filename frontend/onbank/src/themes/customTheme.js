import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: { 500: '#27AE60' },
    background: {
      default: '#ECF0F1',
    },
  },
});

export const colorthemeButtonAndDate = createMuiTheme({
  palette: {
    primary: { main: '#27AE60', contrastText: '#fff' },
  },
});
