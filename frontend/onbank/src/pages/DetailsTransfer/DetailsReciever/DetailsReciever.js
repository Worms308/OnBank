import React from 'react';

import DetailsComponent from 'shared/DetailsComponent'
import StringComponent from 'shared/StringComponent'

const DetailsReciever =()=>{
    
    return(
     
        <DetailsComponent title='Szczegóły odbiorcy'>
            <StringComponent string1='Przelew na nr konta:' string2='PL00000000000000000000000000' bold accountNumber/>
            <StringComponent string1='Dane odbiorcy:' string2='Marian Zalewski'/>
        </DetailsComponent>
            

    )
}

export default DetailsReciever;