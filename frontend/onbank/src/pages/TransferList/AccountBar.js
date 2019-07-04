import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      width:"100%", 
      backgroundColor: 'white	', 
      height: '15vh',
    },
    nameAccount:{
        paddingTop: 10,
        color:'#707070',
        marginLeft: 20,
    },
    numbersRed:{
        flex: 1,
        color: '#C0392B',
    },
    numbersGreen:{
      color: '#3FD07C',  
    },

    numbersGray:{
      color: '#707070',
      textAlign:'right'
    },
  div:{
    paddingTop: 20,
      float: 'right',
      marginRight: 100,
      display: 'inline-block' 
  },
  greydiv:{
    paddingTop: 20,
      float: 'right',
      marginRight: 10,
      display: 'inline-block'
  }
  }));


export default function AccountBar() {

    const classes = useStyles();
  
    return(
      <Paper className={classes.root} >

        <div  style={{display : 'inline-block'}} >
          <Typography variant="h5" className={classes.nameAccount} >Nazwa konta</Typography>
          <Typography variant="h5" className={classes.nameAccount}>00 0000 0000 0000 0000 0000 0000</Typography>
        </div>

        <div className={classes.greydiv}>
         <Typography variant="subtitle1" className={classes.numbersGray} >Dostępne środki</Typography>     
         <Typography variant="h5" className={classes.numbersGray}>  1 000,00 PLN</Typography>
         </div> 
 
         <div className={classes.div}>
         <Typography variant="subtitle1" className={classes.numbersGreen} style={{textAlign :'right'}}>Saldo</Typography>     
         <Typography variant="h5" className={classes.numbersGreen}>  50,00 PLN</Typography>
         </div>

         <div className={classes.div}>
          <Typography variant="subtitle1" className={classes.numbersRed} style={{textAlign :'right'}}>Blokady</Typography> 
          <Typography variant="h5" className={classes.numbersRed} > -100,00 PLN</Typography>
        </div>

        
      </Paper>
  
    )
  
  
  
  }