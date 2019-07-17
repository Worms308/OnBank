import React from 'react';
import DetailsComponent from 'shared/DetailsComponent'
import StringComponent from 'shared/StringComponent'

const DetailsSender =()=>{


    return(
        <DetailsComponent title='Szczegóły nadawcy'>
            <StringComponent string1='Przelew na nr konta:' string2='PL 11 1111 1111 1111 1111 1111 1111' bold/>
            <StringComponent string1='Dane nadawcy:' string2='Mateusz Zakościelny'/>
        </DetailsComponent>
    )
}

export default DetailsSender;