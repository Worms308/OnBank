import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      width:"100%", 
      backgroundColor: 'white	', 
      height: '15vh',

    },
    nameAccount:{
        paddingTop: 10,
    },
    numbersRed:{
        color: 'red',
        textAlign:'right'
        
    },
    numbersGreen:{
      color: 'green',
      textAlign:'right'
  },

  numbersGray:{
    color: 'gray',
    textAlign:'right'
},
  div:{
    paddingTop: 20,
      float: 'right',
      marginRight: 100,
      display: 'inline-block'
    
  },
  accountdiv: {

  }

  }));


export default function AccountBar() {

    const classes = useStyles();
  
    return(
      <Container className={classes.root}>

        <div  style={{display : 'inline-block'}} >
          <Typography variant="h4" className={classes.nameAccount} >Nazwa konta</Typography>
          <Typography variant="h5" className={classes.nameAccount}>000000000000000</Typography>
        </div>

        <div className={classes.div}>
         <Typography variant="h8" className={classes.numbersGray}>Dostępne środki</Typography>     
         <Typography variant="h5" className={classes.numbersGray}>  100 PLN</Typography>
         </div> 
 
         <div className={classes.div}>
         <Typography variant="h8" className={classes.numbersGreen} >Saldo</Typography>     
         <Typography variant="h5" className={classes.numbersGreen}>  100 PLN</Typography>
         </div>

         <div className={classes.div}>
          <Typography variant="h8" className={classes.numbersRed}>Blokady</Typography> 
          <Typography variant="h5" className={classes.numbersRed} > -100 PLN</Typography>
        </div>

        
      </Container>
  
    )
  
  
  
  }