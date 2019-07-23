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
      fontWeight: '600',
      color: '#27AE60',
    },
    title: {
      fontWeight: '600'
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
      fontWeight: '600',
      color: '#27AE60',
      marginLeft: 70,
      display: 'inline',
    },
    burgerTitleBank: {
      fontWeight: '600',
      display: 'inline',
    },
  }));

  