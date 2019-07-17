import React from 'react';
import DetailsComponent from 'shared/DetailsComponent'
import StringComponent from 'shared/StringComponent'

const Details =()=>{

    return(
        <DetailsComponent title='Szczegóły nadawcy'>
            <StringComponent string1='Data przelewu:' string2='23.03.2019'/>
            <StringComponent string1='Data zaksięgowania:' string2='25.03.2019'/>
            <StringComponent string1='Rodzaj przelewu:' string2='Standardowy'/>
            <StringComponent string1='Kwota przelewu:' string2='150 PLN' bold/>
            <StringComponent string1='Status przelewu:' string2='W trakcie'/>
            <StringComponent string1='Opis:' string2='Przykładowy przelew z UTF-8'/>
        </DetailsComponent>
    )
}

export default Details;