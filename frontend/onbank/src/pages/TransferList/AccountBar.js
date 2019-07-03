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
        flex: 1,
        color: 'red',
     //   align:'right'
    },
    numbersGreen:{
      color: 'green',
     // align:'right'
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
    
  }

  }));


export default function AccountBar() {

    const classes = useStyles();
  
    return(
      <Container className={classes.root}>

        <div  style={{display : 'inline-block'}} >
          <Typography variant="h5" className={classes.nameAccount} >Nazwa konta</Typography>
          <Typography variant="h6" className={classes.nameAccount}>00 0000 0000 0000 0000</Typography>
        </div>

        <div className={classes.div}>
         <Typography variant="h8" className={classes.numbersGray} >Dostępne środki</Typography>     
         <Typography variant="h5" className={classes.numbersGray}>  100 PLN</Typography>
         </div> 
 
         <div className={classes.div}>
         <Typography variant="h8" className={classes.numbersGreen} style={{textAlign :'right'}}>Saldo</Typography>     
         <Typography variant="h5" className={classes.numbersGreen}>  100 PLN</Typography>
         </div>

         <div className={classes.div}>
          <Typography variant="h8" className={classes.numbersRed} style={{textAlign :'right'}}>Blokady</Typography> 
          <Typography variant="h5" className={classes.numbersRed} > -100 PLN</Typography>
        </div>

        
      </Container>
  
    )
  
  
  
  }