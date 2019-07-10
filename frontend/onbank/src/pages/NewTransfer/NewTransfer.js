import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
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
    paddingTop: 20,
  },
  recieverField: {
    marginLeft: '33%',
    width: '26%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%',
      width: '50%',
    },
  },
  typographyText: {
    marginLeft: '33%',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%',
    },
  },
  textField: {
    marginLeft: '33%',
    marginTop: 0,
    width: '30%',
    marginBottom: '2%',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%',
      width: '70%',
    },
  },
  textFieldAmount: {
    marginLeft: '33%',
    marginTop: 0,
    width: '10%',
    marginBottom: '2%',
    whiteSpace: 'nowrap',
    display: 'inline-block',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%',
      width: '70%',
    },
  },
  divButton: {
    marginLeft: '33%',
    paddingBottom: 20,
    display: 'inline-block',
  },
  icon: {
    fontSize: 50,
  },
  checkbox: {
    marginLeft: '32%',
  },
  button: {
    marginLeft: '55%',
    marginBottom: '2%',
  },
  datePicker: {
    marginLeft: '33%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10%',
    },
  },
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
          <Form>
            <div className={classes.divInputs}>
              <FormControl
                className={classes.recieverField}
                error={!!(errors.receiver && touched.receiver)}
              >
                <InputLabel htmlFor="receiverInput">Odbiorca</InputLabel>
                <Input
                  id="receiverInput"
                  name="receiver"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.receiver}
                  aria-describedby="receiver-error-text"
                />
                {errors.receiver && touched.receiver ? (
                  <FormHelperText id="receiver-error-text">Error</FormHelperText>
                ) : null}
              </FormControl>
              <PermContactCalendar className={classes.icon} />

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
                  aria-describedby="accountNumber-error-text"
                />
                {errors.accountNumber && touched.accountNumber ? (
                  <FormHelperText id="accountNumber-error-text">Error</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl
                className={classes.textField}
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
              <br />
              <div className={classes.datePicker}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDateTimePicker
                    variant="inline"
                    ampm={false}
                    label="Wprowadź datę"
                    disablePast
                    format="dd.MM.yyyy HH:mm:ss"
                    onChange={handleChange('date')}
                    value={values.date}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <br />
              <FormControlLabel
                value="start"
                control={<Checkbox color="default" />}
                label="Zapamiętaj odbiorcę"
                labelPlacement="end"
                className={classes.checkbox}
              />
            </div>
            <br />
            {isSubmitting ? (
              <CircularProgress />
            ) : (
              <Button variant="contained" color="primary" className={classes.button} type="submit">
                Wyślij
              </Button>
            )}
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
