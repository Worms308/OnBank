import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form } from 'formik';
import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { DatePicker } from '@material-ui/pickers';
import {
  Button,
  CircularProgress,
  FormLabel,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Input,
  InputLabel,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { paths } from 'routes/paths';
import { sendTransactionsAction, setIsSuccessAction } from 'actions/transactionsActions';
import { useStyles } from 'themes/newTransferTheme';
import { colorthemeButtonAndDate } from 'themes/customTheme';
import AccountNumberMask from './accountNumberMask';
import { newTransferSchema } from './newTransferSchema';
import NumberFormatCustom from './numberFormatCustom';

const NewTransfer = ({ sendTransactions, isLoading, isSuccess, setIsSuccess }) => {
  const classes = useStyles();
  const [bankName, setBankName] = useState(null);

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
        validationSchema={() => newTransferSchema(setBankName)}
        validateOnBlur
        validateOnChange
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
                  {bankName ? (
                    <FormHelperText>
                      {bankName}
                    </FormHelperText>
                  ) : null}
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
                  <MuiThemeProvider theme={colorthemeButtonAndDate}>
                    <>
                      <DatePicker
                        disabled={values.typeTransfer === 'INSTANT'}
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
                      label="Standardowy"
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
                {isSuccess ? (
                  <>
                    <Redirect to={paths.transactions} />
                    {setIsSuccess(false)}
                  </>
                ) : null}
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
    setIsSuccess: status => {
      dispatch(setIsSuccessAction(status));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewTransfer);
