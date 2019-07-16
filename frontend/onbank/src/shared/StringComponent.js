import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from 'themes/detailsTransferTheme';

const StringComponent =(props)=>{
    const classes = useStyles();
    return(
        <div className={classes.props}>
            <Typography variant="subtitle1" className={classes.string1}> {props.string1}</Typography>
            <Typography variant="subtitle1" className={classes.string2}> {props.string2}</Typography>
        </div>
    )
}
export default StringComponent;