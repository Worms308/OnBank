import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import NumberFormat from 'react-number-format';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import React, { Form,useState } from "react";
import {KeyboardDateTimePicker } from "@material-ui/pickers";


const useStyles = makeStyles(theme => ({
    root: {
      paddingTop:20,
    },
    recieverField:{
      marginLeft:'33%',
      width:'26%',
      [theme.breakpoints.down('sm')]: {
        marginLeft:'10%',
        width:'50%',
      },
    },
    typographyText:{
        marginLeft:'33%',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'10%',
        },
    },
    textField:{
        marginLeft:'33%',
        marginTop:0,
        width:'30%',
        marginBottom:'2%',
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'10%',
            width:'70%',
          },
    },
    textFieldAmount:{
        marginLeft:'33%',
        marginTop:0,
        width:'10%',
        marginBottom:'2%',
        whiteSpace: 'nowrap',
        display:'inline-block',
        [theme.breakpoints.down('sm')]: {
            marginLeft:'10%',
            width:'70%',
        },
    },
    divButton:{
        marginLeft:'33%',
        paddingBottom:20,
        display:'inline-block'
    },
    icon:{
      fontSize:50
    },
    checkbox:{
      marginLeft:'32%',
    },
    button:{
      marginLeft:'55%',
      marginBottom:'2%'
    },
    datePicker:{
      marginLeft:'33%',
      [theme.breakpoints.down('sm')]: {
        marginLeft:'10%',
    },
    }
   
  }));

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={values => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator
        suffix=" PLN"
      />
    );
  }

  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  function InlineDateTimePickerDemo(props) {
    const [selectedDate, handleDateChange] = useState(new Date());
  
    return (
      <>
        <KeyboardDateTimePicker
          variant="inline"
          ampm={false}
          label="Wprowadź datę"
          value={selectedDate}
          onChange={handleDateChange}
          onError={console.log}
          disablePast
          format="yyyy.MM.dd HH:mm"
        />
      </>
    );
  }

export default function NewTransfer()
{

    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: '',
        
      });
    const [selectedDate, handleDateChange] = useState(new Date());
      

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
      
    return(
       <Paper className={classes.root}>
         
         <div className={classes.divInputs}>
            <TextField
            id="standard-name"
            label="Odbiorca"
            className={classes.recieverField}
            onChange={handleChange('name')}
        />
        <PermContactCalendar className={classes.icon}></PermContactCalendar>
        
            <TextField
            id="standard-name"
            label="Nr konta"
            className={classes.textField}
            onChange={handleChange('name')}
        />
         
            <TextField
            id="standard-name"
            label="Tytulem przelewu"
            className={classes.textField}
            onChange={handleChange('name')}
           
        />
        <Typography variant="subtitle1" className={classes.typographyText}>Kwota:</Typography>
        <TextField
            className={classes.formControl}
            label="0,00 PLN"
            min="0"
            value={values.numberformat}
            onChange={handleChange('numberformat')}
            className={classes.textFieldAmount}
            InputProps={{
            inputComponent: NumberFormatCustom,
            }}
        />
        <br/>
        <div className={classes.datePicker}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} >
          <InlineDateTimePickerDemo />
        </MuiPickersUtilsProvider>
        </div>
        <br/>
        <FormControlLabel
          value="start"
          control={<Checkbox color="default" />}
          label="Zapamiętaj odbiorcę"
          labelPlacement="end"
          className={classes.checkbox}
        />
      </div> 
         <br/>
         <Button variant="contained" color="primary" className={classes.button}>
            Wyślij
         </Button>
    

       </Paper>
    )
}