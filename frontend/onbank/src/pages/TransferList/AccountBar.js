import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
     marginLeft: "auto",
      width:"95%", 
      backgroundColor: 'default',
      border: 1 
      
      
    },
  }));


export default function AccountBar() {

    const classes = useStyles();
  
    return(
      <Container className={classes.root} border={1}>

          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '10vh' }} />
      </Container>
  
    )
  
  
  
  }