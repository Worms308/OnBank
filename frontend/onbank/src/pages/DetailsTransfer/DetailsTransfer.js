import React from 'react';

import DetailsComponentTitle from '../../shared/DetailsComponentTitle'
import DetailsReciever from './DetailsReciever/DetailsReciever';
import DetailsSender from './DetailsSender/DetailsSender'
import Details from './Details/Details'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    div:{
        width:'100%',
        height:'100vh',
    }
}));

const DetailsTransfer =()=>{
    const classes = useStyles();
    return( 
        <div className={classes.div}>
            <DetailsComponentTitle title='Szczegóły przelewu'/>
            <DetailsReciever/>
            <DetailsSender/>
            <Details/>
        </div>

    )
}

export default DetailsTransfer;