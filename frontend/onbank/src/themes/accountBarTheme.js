import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  wrapper: {
    backgroundColor: '#fff',
    marginTop: '24px',
    boxShadow:
      '-5px 0 5px -5px rgba(0,0,0,0.2), 5px 0 5px -5px rgba(0,0,0,0.2), 0 -5px 5px -5px rgba(0,0,0,0.2), 0 5px 5px -5px rgba(0,0,0,0.2)',
    padding: '16px 32px'
  },
  nameAccount: {
    marginBottom: '4px',
    fontSize: '1.6rem',
    fontWeight: 500,
    color: '#101010',
  },
  numberAccount: {
    fontSize: '1rem',
    fontWeight: '300',
    color: '#666',
  },
  lock: {
    color: '#C0392B',
    textAlign: 'right',
  },
  avalaibleFundsLabel: {
    color: '#666',
    textAlign: 'right',
  },
  avalaibleFunds: {
    color: '#101010',
    textAlign: 'right',
  },
  divLock: {
    marginRight: '72px',
    float: 'right',
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      float: 'none',
      display: 'inline',
    },
  },

  divAvalaibleFunds: {
    float: 'right',
    [theme.breakpoints.down('md')]: {
      float: 'none',
      display: 'inline',
    },
  },
  divNameAccount: {
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));