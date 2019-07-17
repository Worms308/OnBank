import React from 'react';

import DetailsComponentTitle from '../../shared/DetailsComponentTitle'
import DetailsReciever from './DetailsReciever/DetailsReciever';
import DetailsSender from './DetailsSender/DetailsSender'
import Details from './Details/Details'

const DetailsTransfer =()=>{
    return( 
        <div>
            <DetailsComponentTitle title='Szczegóły przelewu'/>
            <DetailsReciever/>
            <DetailsSender/>
            <Details/>
        </div>

    )
}

export default DetailsTransfer;