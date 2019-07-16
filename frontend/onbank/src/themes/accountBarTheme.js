import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      backgroundColor: 'white	',
    },
    nameAccount: {
      paddingTop: 10,
      color: '#707070',
      marginLeft: 20,
    },
    lock: {
      color: '#C0392B',
      textAlign: 'right',
      [theme.breakpoints.down('md')]: {
        marginRight: 50,
      },
    },
    avalaibleFunds: {
      color: '#707070',
      textAlign: 'right',
      [theme.breakpoints.down('md')]: {
        marginRight: 50,
      },
    },
    divLock: {
      paddingTop: 15,
      marginRight: 100,
      float: 'right',
      display: 'inline-block',
      [theme.breakpoints.down('md')]: {
        float: 'none',
        display: 'inline',
      },
    },
  
    divAvalaibleFunds: {
      float: 'right',
      paddingTop: 15,
      marginRight: 50,
  
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