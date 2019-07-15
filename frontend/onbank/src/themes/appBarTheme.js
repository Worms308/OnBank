import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: 20,
    },
    color: {
      backgroundColor: '#FFF',
    },
    on: {
      fontWeight: 'bold',
      color: '#27AE60',
    },
    bookmark: {
      marginLeft: theme.spacing(6),
      fontSize: 16,
      textAlign: 'center',
      whiteSpace: 'nowrap',
    },
    button: {
      marginLeft: 'auto',
      marginRight: 0,
      //fontSize: 30,
     // color: '#707070',
    },
    icon:{
      fontSize: 30,
      color: '#707070',
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    burgerTitleOn: {
      fontWeight: 'bold',
      color: '#27AE60',
  
      marginLeft: 70,
      display: 'inline',
    },
    burgerTitleBank: {
      display: 'inline',
    },
  }));

  