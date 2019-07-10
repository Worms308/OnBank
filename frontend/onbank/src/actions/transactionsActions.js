import { getAccountData, getTransactions, sendTransactions } from 'API/transactionsAPI';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

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

export const sendTransactionsAction = () => dispatch => {
  return sendTransactions()
    .then(response => console.log(response))
    .catch(err => console.log(err));
};
