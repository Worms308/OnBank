import React from 'react';
import NumberFormat from 'react-number-format';
export const AccountNumberMask = props => {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        format="PL## #### #### #### #### #### ####"
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.formattedValue.replace(/\s/g, ''),
            },
          });
        }}
      />
    );
  };