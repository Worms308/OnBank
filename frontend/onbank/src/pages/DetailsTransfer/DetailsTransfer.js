import React from 'react';

import DetailsComponentTitle from '../../shared/DetailsComponentTitle'
import DetailsReciever from './DetailsReciever';
import DetailsSender from './DetailsSender'
const DetailsTransfer =()=>{
    
    return(
        <>
            <DetailsComponentTitle title='Szczegóły przelewu'/>
            <DetailsReciever/>
            <DetailsSender/>

        </>

    )
}

export default DetailsTransfer;