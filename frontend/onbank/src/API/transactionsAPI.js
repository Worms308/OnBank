import { axiosInstanceGet, axiosInstancePost } from 'core/axiosConfig';

export const TRANSACTIONS_URL = '/transfers';

const getAccountDataApi = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const getTransactionsApi = userID =>
  axiosInstanceGet({ method: 'get', headers: { userID }, url: TRANSACTIONS_URL });
const sendTransactionsApi = (json, userID) =>
  axiosInstancePost({ method: 'post', headers: { userID }, url: TRANSACTIONS_URL, data: json });

export { getAccountDataApi, getTransactionsApi, sendTransactionsApi };
