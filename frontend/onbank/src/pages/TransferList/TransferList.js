import React from 'react';
import Table from '../Table'
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AccountBar from './AccountBar'

// const useStyles = makeStyles(theme => ({
//   root: {
//    marginLeft: "auto",
//   color:'default'
//   },
// }));


export default function TransferList() {

  //const classes = useStyles();

  return(
   // <Container className={classes.root}>
   <Container>
        <AccountBar/>
        <br/>
          <Table/>
    </Container>
  )
}
