import React from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import { Redirect } from 'react-router-dom';
import { paths } from 'routes/paths';
import PropTypes from 'prop-types';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import InputAdornment from '@material-ui/core/InputAdornment';
import {MuiThemeProvider } from '@material-ui/core/styles';
import {
  Button,
  CircularProgress,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
} from '@material-ui/core';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { sendTransactionsAction } from 'actions/transactionsActions';
import {useStyles} from '../../themes/newTransferTheme'
import {colorthemeButtonAndDate} from '../../themes/customTheme'

const AccountNumberMask = props => {
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

const SignupSchema = () => {
  const requiredMessage = 'Wymagane';
  const patt = /[a-zA-Z]{2}[0-9]{26}/g;
  return Yup.object().shape({
    receiver: Yup.string()
      .min(2, 'Nazwa odbiorcy jest za krótka')
      .max(200, 'Nazwa odbiorcy jest za długa')
      .required(requiredMessage),
    accountNumber: Yup.string()
      .required(requiredMessage)
      .test('accountValidate', 'Błędny numer ', value => patt.test(value)),
    description: Yup.string()
      .min(2, 'Opis jest za krótki')
      .max(4000, 'Opis jest za długi')
      .required(requiredMessage),
    ammount: Yup.number()
      .min(0.1, 'Za mała kwota')
      .typeError('Nie można wprowadzić ujemnej kwoty')
      .required(requiredMessage),
    typeTransfer: Yup.string().required('Proszę wybrać rodzaj operacji'),
  });
};

const NewTransfer = ({ sendTransactions, isLoading, isSuccess }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Formik
        initialValues={{
          receiver: '',
          accountNumber: '',
          description: '',
          ammount: '',
          date: new Date(),
          typeTransfer: 'NORMAL',
          saveReceiver: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          sendTransactions(values);
        }}
      >
        {({ errors, touched, handleChange, handleBlur, values }) => (
          <Form className={classes.form}>
            <div className={classes.inputs}>
              <div className={classes.recieverInput}>
                <FormControl error={!!(errors.receiver && touched.receiver)}>
                  <InputLabel htmlFor="receiver-error-text">Odbiorca</InputLabel>
                  <Input
                    id="receiverInput"
                    name="receiver"
                    multiline
                    onChange={handleChange}
                    className={classes.inputWidth}
                    onBlur={handleBlur}
                    value={values.receiver}
                    aria-describedby="receiver-error-text"
                    endAdornment={
                      <InputAdornment position="end">
                        <PermContactCalendar className={classes.icon} />
                      </InputAdornment>
                    }
                  />
                  {errors.receiver && touched.receiver ? (
                    <FormHelperText id="receiver-error-text">{errors.receiver}</FormHelperText>
                  ) : null}
                </FormControl>
              </div>
              <div className={classes.inputStyle}>
                <FormControl
                  className={classes.textField}
                  error={!!(errors.accountNumber && touched.accountNumber)}
                >
                  <InputLabel htmlFor="accountNumberInput">Nr konta</InputLabel>
                  <Input
                    id="accountNumberInput"
                    name="accountNumber"
                    inputComponent={AccountNumberMask}
                    onChange={handleChange('accountNumber')}
                    onBlur={handleBlur('accountNumber')}
                    value={values.accountNumber}
                    className={classes.inputWidth}
                    aria-describedby="accountNumber-error-text"
                  />
                  {errors.accountNumber && touched.accountNumber ? (
                    <FormHelperText id="accountNumber-error-text">
                      {errors.accountNumber}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </div>
              <div className={classes.inputStyle}>
                <FormControl
                  className={classes.inputWidth}
                  error={!!(errors.description && touched.description)}
                >
                  <InputLabel htmlFor="descriptionInput">Tytulem przelewu</InputLabel>
                  <Input
                    id="descriptionInput"
                    name="description"
                    multiline
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    aria-describedby="description-error-text"
                  />
                  {errors.description && touched.description ? (
                    <FormHelperText id="description-error-text">
                      {errors.description}
                    </FormHelperText>
                  ) : null}
                </FormControl>
              </div>
              <div className={classes.inputStyle}>
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
                    <FormHelperText id="ammount-error-text">{errors.ammount}</FormHelperText>
                  ) : null}
                </FormControl>
              </div>

              <div className={classes.inputStyle}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <MuiThemeProvider theme={colorthemeButtonAndDate}>
                    <>
                      <DatePicker
                        label="Data"
                        format="dd.MM.yyyy"
                        disablePast
                        value={values.date}
                        className={classes.datePicker}
                        onChange={handleChange('date')}
                        animateYearScrolling
                      />
                      {errors.date && touched.date ? <div>{errors.date}</div> : null}
                    </>
                  </MuiThemeProvider>
                </MuiPickersUtilsProvider>
              </div>
              <div>
                <FormControl
                  className={classes.textFieldAmount}
                  error={!!(errors.typeTransfer && touched.typeTransfer)}
                >
                  <FormLabel component="legend">Rodzaj przelewu</FormLabel>
                  <RadioGroup
                    aria-label="position"
                    name="typeTransfer"
                    value={values.typeTransfer}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={values.typeTransfer === 'NORMAL'}
                          value="NORMAL"
                          color="default"
                        />
                      }
                      label="Elixir"
                      labelPlacement="end"
                    />
                    <FormControlLabel
                      value="INSTANT"
                      control={<Radio color="default" />}
                      label="Natychmiastowy"
                      labelPlacement="end"
                    />
                  </RadioGroup>
                  {errors.typeTransfer && touched.typeTransfer ? (
                    <FormHelperText>{errors.typeTransfer}</FormHelperText>
                  ) : null}
                </FormControl>
              </div>
              <div className={classes.buttonDiv}>
                {isLoading ? (
                  <CircularProgress size={30} />
                ) : (
                  <MuiThemeProvider theme={colorthemeButtonAndDate}>
                    <Button variant="contained" color="primary" type="submit">
                      Wyślij
                    </Button>
                  </MuiThemeProvider>
                )}
                {isSuccess ? <Redirect to={paths.transactions} /> : null}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

const mapStateToProps = ({ transactions }) => {
  const { isLoading, isSuccess } = transactions;
  return { isLoading, isSuccess };
};

const mapDispatchToProps = dispatch => {
  return {
    sendTransactions: values => {
      dispatch(sendTransactionsAction(values));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTransfer);
