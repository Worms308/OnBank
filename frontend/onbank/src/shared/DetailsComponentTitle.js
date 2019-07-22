import React from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    detialsTransferBar:{
        width:'100%',
        height:50,
        backgroundColor:'#27AE60',
        marginBottom:20,
       
    },
    detailsTitle:{
        textAlign: 'center',
        color:'#FFF',
        whiteSpace:'nowrap',
        paddingTop:10,
    },
}));

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