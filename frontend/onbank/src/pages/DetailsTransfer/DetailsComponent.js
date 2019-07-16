import React from 'react';
import { useStyles } from 'themes/detailsTransferTheme';
import { Paper } from '@material-ui/core';
import StringComponent from './StringComponent';



const DetailsComponentTitle =(props)=>{
    const classes = useStyles();
    return(
        <div>
         <Paper className={classes.detialsBar}>
            <h2  className={classes.detailsTitleReciever}>{props.title}</h2>  
            <StringComponent string1='Przelew na nr konta:' string2='PL 00 0000 0000 0000 0000 0000 0000'/>
            <StringComponent string1='Odbiorca:' string2='Marian Zalewski'/>
         </Paper>
        </div>

    )
}

export default DetailsComponentTitle;