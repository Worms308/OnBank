import { getAccountData, getTransactions, sendTransactions } from 'API/transactionsAPI';
import DateFormat from 'core/DateFormat';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const NEW_TRANSFER_REQUEST = 'NEW_TRANSFER_REQUEST';
export const NEW_TRANSFER_SUCCESS = 'NEW_TRANSFER_SUCCESS';
export const NEW_TRANSFER_FAILURE = 'NEW_TRANSFER_FAILURE';

export const getAccountDataAction = name => dispatch => {
  return getAccountData()
    .then(response => {
      // dispatch({ type: FETCH_SUCCESS, payload: { name, data: response.data } });
      console.log(response.data);
    })
    .catch(err => console.log(err));
};

export const getTransactionsAction = name => dispatch => {
  return getTransactions()
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: { name, data: response.data } });
    })
    .catch(err => console.log(err));
};

export const sendTransactionsAction = data => dispatch => {
  const json = {
    date: DateFormat(
      new Date(`${data.date.getFullYear()}-${data.date.getMonth() + 1}-${data.date.getDate()}`),
    ),
    recipientName: data.receiver,
    recipientAccountNumber: data.accountNumber,
    description: data.description,
    operationType: data.typeTransfer,
    amount: parseFloat(data.ammount),
    // saveReceiver: data.saveReceiver,
  };
  console.log(json);
  dispatch({ type: NEW_TRANSFER_REQUEST });
  return sendTransactions(json)
    .then(() => {
      dispatch({ type: NEW_TRANSFER_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: NEW_TRANSFER_FAILURE });
    });
};
