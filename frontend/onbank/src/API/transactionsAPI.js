import { axiosInstanceGet, axiosInstancePost } from 'core/axiosConfig';
import store from 'store';

const TRANSACTIONS_URL = '/transfers';
const LOCKED_TRANSACTIONS = '/transfers/getLockedTransactions';

const getLockedTransactionsApi = () =>
  axiosInstanceGet({
    method: 'get',
    headers: { userID: store.getState().userProfile.userID },
    url: LOCKED_TRANSACTIONS,
  });

const getDetailsTransactionApi = idTransaction =>
  axiosInstanceGet({
    method: 'get',
    headers: { userID: store.getState().userProfile.userID },
    url: `${TRANSACTIONS_URL}/${idTransaction}`,
  });

const getTransactionsApi = () =>
  axiosInstanceGet({
    method: 'get',
    headers: { userID: store.getState().userProfile.userID },
    url: TRANSACTIONS_URL,
  });

const sendTransactionsApi = json =>
  axiosInstancePost({
    method: 'post',
    headers: { userID: store.getState().userProfile.userID },
    url: TRANSACTIONS_URL,
    data: json,
  });

export {
  getLockedTransactionsApi,
  getTransactionsApi,
  getDetailsTransactionApi,
  sendTransactionsApi,
};
