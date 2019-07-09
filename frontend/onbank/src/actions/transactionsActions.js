import { getTransactions, sendTransactions } from 'API/transactions';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getTransactionsAction = () => dispatch => {
  return getTransactions()
    .then(response => console.log(response))
    .catch(err => console.log(err));
};

export const sendTransactionsAction = () => dispatch => {
  return sendTransactions()
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
