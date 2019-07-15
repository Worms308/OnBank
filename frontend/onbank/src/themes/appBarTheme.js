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
    icon: {
      marginLeft: 'auto',
      marginRight: 0,
      
    },
    icon2:{
      fontSize: 30,
      color: '#707070',
    },
    personPaper:{
      width:300,
      height:150
    },
    insideDivPerson:{
      paddingTop:20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

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

  