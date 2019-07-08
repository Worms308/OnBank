import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      width:"100%", 
      backgroundColor: 'white	', 
    },
    nameAccount:{
        paddingTop: 10,
        color:'#707070',
        marginLeft: 20,
    },
    lock:{ 
        color: '#C0392B',
        textAlign :'right'  
    },
    avalaibleFunds:{
      color: '#707070',
      textAlign:'right'
      
    },
  divLock:{
      marginLeft: 10,
      display: 'inline-block',
      [theme.breakpoints.up('md')]: {
        marginLeft: 10,
      
        display: 'inline-block',
      },
  },
  
  divAvalaibleFunds:{
      float: 'right',
     
      marginRight: 10,
      display: 'inline-block'
  },
  }));


export default function AccountBar() {

    const classes = useStyles();
  
    return(
      <Paper>   
           <div >
             <Typography variant="h5" className={classes.nameAccount} >Nazwa konta</Typography>
             <Typography variant="h5" className={classes.nameAccount}>00 0000 0000 0000 0000 0000 0000</Typography>
           </div>
           
            <div className={classes.divAvalaibleFunds}>
              <Typography variant="subtitle1" className={classes.avalaibleFunds}>Dostępne środki</Typography>     
              <Typography variant="h5" className={classes.avalaibleFunds} >1 000,00 PLN</Typography>
            </div> 

            <div className={classes.divLock}> 
              <Typography variant="subtitle1" className={classes.lock}>Blokady</Typography> 
              <Typography variant="h5" className={classes.lock} > -100,00 PLN</Typography>
            </div>
      </Paper>
      


    
    )
  
  
  
  }