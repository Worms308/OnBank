import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    detailsBar: {
        marginBottom: '24px',
        padding: '12px 10px',
    },
    detailsTitleReciever: {
        margin: '10px',
        marginLeft: '16px',
    },
    div: {
        boxShadow:
      '-5px 0 5px -5px rgba(0,0,0,0.2), 5px 0 5px -5px rgba(0,0,0,0.2), 0 -5px 5px -5px rgba(0,0,0,0.2), 0 5px 5px -5px rgba(0,0,0,0.2)',
      backgroundColor: '#fff',
    }
}));

const DetailsComponentTitle = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <div className={classes.detailsBar}>
                <h2 className={classes.detailsTitleReciever}>{props.title}</h2>
                {props.children}
            </div>
        </div>

    )
}

export default DetailsComponentTitle;