import { getTransactions, sendTransactions } from 'API/transactions';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getTransactionsAction = name => dispatch => {
  return getTransactions()
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: { name, data: response } });
    })
    .catch(err => console.log(err));
};

export const sendTransactionsAction = () => dispatch => {
  return sendTransactions()
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
