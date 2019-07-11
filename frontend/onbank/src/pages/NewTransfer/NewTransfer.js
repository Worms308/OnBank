import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import InputAdornment from '@material-ui/core/InputAdornment';

import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDateTimePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { sendTransactionsAction } from 'actions/transactionsActions';

const useStyles = makeStyles(theme => ({
  
  root: {
   // height:1000,
   height:'auto',
    marginTop:10,
  },
  divButton: {
    display: 'flex',
    flexDirection:'row'
  },

  form:{
    width:'100%',
    height:'auto',
  //  height:'100vh',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
     
      width: '100%',
      display: 'flex',
      flexDirection:'column',
    },
  },
  inputs:{
  
  },
  recieverInput:{
    marginBottom:20,
    width:'100%',
    marginLeft:'0%',
    
  },
  accountNumberInput:{
    marginBottom:20,
  },
  titleTransfer:{
    marginBottom:20,
  },
  amount:{
    marginBottom:20,
  },
  button:{
    display:'flex',
    justifyContent: 'flex-end',
    marginBottom:20,
  },
  inputWidth:{
    width:450,
    [theme.breakpoints.down('sm')]: {
      width: 280,
    },
  },
  icon:{
    color:"#707070",
    '&:hover':{
      backgroundColor: '#E3E5E1',
     
      borderRadius: 10,
    }
  },
  inputRecieverLabel:{
    width:350,
    display:'block',
    [theme.breakpoints.down('sm')]: {
      width: 200,
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

const SignupSchema = Yup.object().shape({
  receiver: Yup.string().required('Required'),
  accountNumber: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
});

const NewTransfer = ({ sendTransactions }) => {
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  function handleChange(event) {
    setValue(event.target.value);
  }
  function handleChangeRadio(event) {
    setValue(event.target.value);
  }

  return (
    <Paper className={classes.root}>
      <Formik
        initialValues={{
          receiver: '',
          accountNumber: '',
          description: '',
          typeOfOperation: '',
          date: new Date(),
          ammount: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values, isSubmitting }) => (
          <Form className={classes.form}>
            <div className={classes.inputs}>
              <div className={classes.recieverInput}>
                <FormControl
                  error={!!(errors.receiver && touched.receiver)}
                >
                  
                  <div className={classes.margin}>
                    <Grid container spacing={1} alignItems="flex-end">
                      
                      <Grid item>
                        <TextField id="input-with-icon-grid" label="Odbiorca" />
                      </Grid>
                      <Grid item>
                      <PermContactCalendar className={classes.icon}/>
                      </Grid>
                    </Grid>
                  </div>
                  {errors.receiver && touched.receiver ? (
                    <FormHelperText id="receiver-error-text">Error</FormHelperText>
                  ) : null}
                </FormControl>
                
              </div>
              <div className={classes.accountNumberInput}>
                <FormControl
                  className={classes.textField}
                  error={!!(errors.accountNumber && touched.accountNumber)}
                  >
                  <InputLabel htmlFor="accountNumberInput">Nr konta</InputLabel>
                  <Input
                    id="accountNumberInput"
                    name="accountNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.accountNumber}
                    className={classes.inputWidth}
                    aria-describedby="accountNumber-error-text"
                  />
                  {errors.accountNumber && touched.accountNumber ? (
                    <FormHelperText id="accountNumber-error-text">Error</FormHelperText>
                  ) : null}
                </FormControl> 
              </div>
              <div className={classes.titleTransfer}>
                <FormControl
                  className={classes.inputWidth}
                  error={!!(errors.description && touched.description)}
                  >
                  <InputLabel htmlFor="descriptionInput">Tytulem przelewu</InputLabel>
                  <Input
                    id="descriptionInput"
                    name="description"
                    
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    aria-describedby="description-error-text"
                  />
                  {errors.description && touched.description ? (
                    <FormHelperText id="description-error-text">Error</FormHelperText>
                  ) : null}
                </FormControl> 
              </div>
              <div className={classes.amount}>
              <FormControl
                className={classes.textFieldAmount}
                error={!!(errors.ammount && touched.ammount)}
              >
                <InputLabel htmlFor="ammountInput">Kwota</InputLabel>
                <Input
                  id="ammountInput"
                  name="ammount"
                  inputComponent={NumberFormatCustom}
                  onChange={handleChange('ammount')}
                  onBlur={handleBlur('ammount')}
                  value={values.ammount}
                  aria-describedby="ammount-error-text"
                />
                {errors.ammount && touched.ammount ? (
                  <FormHelperText id="ammount-error-text">Error</FormHelperText>
                ) : null}
              </FormControl>
              </div>
              {/* <br /> */}
              <div className={classes.datePicker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDateTimePicker
                    variant="inline"
                    ampm={false}
                    className={classes.inputWidth}
                    label="Wprowadź datę"
                    disablePast
                    format="dd.MM.yyyy HH:mm:ss"
                    onChange={handleChange('date')}
                    value={values.date}
                  />
                </MuiPickersUtilsProvider>
                <div>
                  <h4>Rodzaj przelewu</h4>
                  <RadioGroup aria-label="position" name="position" value={value} onChange={handleChangeRadio} row>
                    <FormControlLabel
                      value="bottom"
                      control={<Radio color="default" />}
                      label="Elixir"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Radio color="default" />}
                      label="Natychmiastowy"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                </div>
              </div>
              <FormControlLabel
                value="start"
                control={<Checkbox color="default" />}
                label="Zapamiętaj odbiorcę"
                labelPlacement="end"
                className={classes.checkbox}
              />
              <br/>
              <div className={classes.button}>
              {isSubmitting ? (
                <CircularProgress />
              ) : (
                <Button variant="contained" color="primary" className={classes.button} type="submit">
                  Wyślij
                </Button>
              )}
               </div>
            </div>
            
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    sendTransactions: () => {
      dispatch(sendTransactionsAction());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(NewTransfer);
