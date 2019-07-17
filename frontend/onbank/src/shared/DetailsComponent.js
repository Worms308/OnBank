import React from 'react';
import { Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    detailsBar:{
        width:'100%',
    },
    detailsTitleReciever:{
        marginLeft:20,
    },
}));

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