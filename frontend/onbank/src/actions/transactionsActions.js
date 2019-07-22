import {
  getLockedTransactionsApi,
  getTransactionsApi,
  getDetailsTransactionApi,
  sendTransactionsApi,
} from 'API/transactionsAPI';
import DateFormat from 'utils/DateFormat';

export const FETCH_TRANSACTION_LIST_SUCCESS = 'FETCH_TRANSACTION_LIST_SUCCESS';
export const FETCH_DETAILS_TRANSACTION_SUCCESS = 'FETCH_DETAILS_TRANSACTION_SUCCESS';
export const FETCH_LOCKED_TRANSACTION_SUCCESS = 'FETCH_LOCKED_TRANSACTION_SUCCESS';
export const NEW_TRANSFER_REQUEST = 'NEW_TRANSFER_REQUEST';
export const NEW_TRANSFER_SUCCESS = 'NEW_TRANSFER_SUCCESS';
export const NEW_TRANSFER_FAILURE = 'NEW_TRANSFER_FAILURE';
export const SET_IS_SUCCESS = 'SET_IS_SUCCESS';

export const getLockedTransactionsAction = name => dispatch => {
  return getLockedTransactionsApi()
    .then(response => {
      dispatch({ type: FETCH_LOCKED_TRANSACTION_SUCCESS, payload: { name, data: response.data } });
    })
    .catch(err => console.log(err));
};

export const getTransactionsAction = name => dispatch => {
  return getTransactionsApi()
    .then(response => {
      dispatch({ type: FETCH_TRANSACTION_LIST_SUCCESS, payload: { name, data: response.data } });
    })
    .catch(err => console.log(err));
};

export const getDetailsTransactionAction = (name, idTransaction) => dispatch => {
  return getDetailsTransactionApi(idTransaction)
    .then(response => {
      dispatch({ type: FETCH_DETAILS_TRANSACTION_SUCCESS, payload: { name, data: response.data } });
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
  };

  dispatch({ type: NEW_TRANSFER_REQUEST });
  return sendTransactionsApi(json)
    .then(() => {
      dispatch({ type: NEW_TRANSFER_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: NEW_TRANSFER_FAILURE });
    });
};

export const setIsSuccessAction = status => dispatch => {
  dispatch({ type: SET_IS_SUCCESS, payload: { status } });
};
