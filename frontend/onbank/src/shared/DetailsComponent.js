import React from 'react';
import { useStyles } from 'themes/detailsTransferTheme';
import { Paper } from '@material-ui/core';

const DetailsComponentTitle =(props)=>{
    const classes = useStyles();
    return(
        <div>
         <Paper className={classes.detialsBar}>
            <h2  className={classes.detailsTitleReciever}>{props.title}</h2>  
            {props.children}
         </Paper>
        </div>

    )
}

export default DetailsComponentTitle;