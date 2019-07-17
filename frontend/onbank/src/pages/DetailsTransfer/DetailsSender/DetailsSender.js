import React from 'react';
import DetailsComponent from 'shared/DetailsComponent'
import StringComponent from 'shared/StringComponent'

const DetailsSender =()=>{


    return(
        <DetailsComponent title='Szczegóły nadawcy'>
            <StringComponent string1='Przelew na nr konta:' string2='PL11111111111111111111111111' bold accountNumber/>
            <StringComponent string1='Dane nadawcy:' string2='Mateusz Zakościelny'/>
        </DetailsComponent>
    )
}

export default DetailsSender;