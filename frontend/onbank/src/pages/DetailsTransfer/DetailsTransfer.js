import React from 'react';
import { Paper } from '@material-ui/core';
import { useStyles } from 'themes/detailsTransferTheme';


const DetailsTransfer =()=>{
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
            <h1>Szczegóły przelewu</h1>
        </Paper>

    )
}

export default DetailsTransfer;