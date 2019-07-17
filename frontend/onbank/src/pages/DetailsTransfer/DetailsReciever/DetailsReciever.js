import React from 'react';

import DetailsComponent from 'shared/DetailsComponent'
import StringComponent from 'shared/StringComponent'
//import accountNumberMask from '../../NewTransfer/accountNumberMask'
const DetailsReciever =()=>{
    
    return(
     
        <DetailsComponent title='Szczegóły odbiorcy'>
            {/* <StringComponent string1='Przelew na nr konta:' string2={accountNumberMask('PL 00 0000 0000 0000 0000 0000 0000')} bold/> */}
            <StringComponent string1='Przelew na nr konta:' string2='PL 00 0000 0000 0000 0000 0000 0000' bold/>
            <StringComponent string1='Dane odbiorcy' string2='Marian Zalewski'/>
        </DetailsComponent>
            

    )
}

export default DetailsReciever;