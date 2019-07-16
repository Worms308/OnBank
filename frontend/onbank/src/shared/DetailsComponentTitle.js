import React from 'react';
import { useStyles } from 'themes/detailsTransferTheme';
import { Paper } from '@material-ui/core';


const DetailsComponentTitle =(props)=>{
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.detialsTransferBar}>
                <h2  className={classes.detailsTitle}>{props.title}</h2>   
            </Paper>
        </div>

    )
}

export default DetailsComponentTitle;