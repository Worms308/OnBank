import { getTransactions } from 'API/transactions';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const getTransactionsAction = () => dispatch => {
  dispatch({ type: FETCH_REQUEST });
  return getTransactions().then(response => {
    console.log(response);
  });
};
