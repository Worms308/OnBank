import React from 'react';

import DetailsComponentTitle from '../../shared/DetailsComponentTitle'
import DetailsReciever from './DetailsReciever/DetailsReciever';
import DetailsSender from './DetailsSender/DetailsSender'
import Details from './Details/Details'
const DetailsTransfer =()=>{
    
    return(
        <>
            <DetailsComponentTitle title='Szczegóły przelewu'/>
            <DetailsReciever/>
            <DetailsSender/>
            <Details/>
        </>

    )
}

export default DetailsTransfer;