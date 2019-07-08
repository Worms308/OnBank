import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
//import {Desktop,Mobile} from '../../themes/customTheme'
import Responsive from 'react-responsive';
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Mobile = props => <Responsive {...props} maxWidth={1024} />;

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
    paddingTop: 20,
      float: 'right',
      marginRight: 100,
      display: 'inline-block' 
  },
  divAvalaibleFunds:{
    paddingTop: 20,
      float: 'right',
      marginRight: 10,
      display: 'inline-block'
  },
  mobileLock:{
    color: '#C0392B',
    textAlign :'left',
    display: 'inline-block', 
    marginLeft: 20,

  },
  mobileAvalaibleFunds:{
    color: '#707070',
    float:'right',
    display: 'inline-block',
    marginRight:20
  },
  }));


export default function AccountBar() {

    const classes = useStyles();
  
    return(
      <Fragment>
        <Desktop>
      <Paper className={classes.root} >

        <div  style={{display : 'inline-block'}} >
          <Typography variant="h5" className={classes.nameAccount} >Nazwa konta</Typography>
          <Typography variant="h5" className={classes.nameAccount}>00 0000 0000 0000 0000 0000 0000</Typography>
        </div>

        <div className={classes.divAvalaibleFunds}>
         <Typography variant="subtitle1" className={classes.avalaibleFunds}>Dostępne środki</Typography>     
         <Typography variant="h5" className={classes.avalaibleFunds} >  1 000,00 PLN</Typography>
        </div> 

         <div className={classes.divLock}>
          <Typography variant="subtitle1" className={classes.lock}>Blokady</Typography> 
          <Typography variant="h5" className={classes.lock} > -100,00 PLN</Typography>
        </div>
      </Paper>
      </Desktop>

      <Mobile>
      <Paper className={classes.root} >
        
          <Typography variant="h6" className={classes.nameAccount} >Nazwa konta</Typography>
          <Typography variant="subtitle1" className={classes.nameAccount}>00 0000 0000 0000 0000 0000 0000</Typography>
      
         <Typography variant="subtitle1" className={classes.mobileAvalaibleFunds}>Dostępne środki</Typography> 
         <Typography variant="subtitle1" className={classes.mobileLock}>Blokady</Typography> 
         <br/>

         <Typography variant="h6"className={classes.mobileAvalaibleFunds} >  1 000,00 PLN</Typography>
         <Typography variant="h6" className={classes.mobileLock} > -100,00 PLN</Typography>
       
      </Paper>
      
      </Mobile>

      </Fragment>
    )
  
  
  
  }