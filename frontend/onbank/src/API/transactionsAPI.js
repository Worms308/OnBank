import { axiosInstanceGet, axiosInstancePost } from 'core/axiosConfig';
import store from 'store';

export const TRANSACTIONS_URL = '/transfers';

const getAccountDataApi = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
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

export { getAccountDataApi, getTransactionsApi, sendTransactionsApi };
