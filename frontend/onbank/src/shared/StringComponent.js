import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  AccountNumberFormat  from '../utils/AccountNumberFormat'
const useStyles = makeStyles(theme => ({
    string1:{
        marginLeft: 50,
        display:'inline-block',
    },
    string2:{
        float:'right',
        paddingRight:15,
    },
    string2Bold:{
        float:'right',
        paddingRight:15,
        fontWeight:'bold'
    },
    div:{
        paddingBottom:5,
    }

}))

const StringComponent =(props)=>{
    const classes = useStyles();
    return(
        <div className={classes.div}>
            <Typography variant="subtitle1" className={classes.string1}> {props.string1}</Typography>
            <Typography variant="subtitle1" className={props.bold ? classes.string2Bold : classes.string2} > {props.accountNumber? AccountNumberFormat(props.string2): props.string2}</Typography>
        </div>
    )
}
export default StringComponent;