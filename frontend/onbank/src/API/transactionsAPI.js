import { axiosInstanceGet, axiosInstancePost } from 'core/axiosConfig';

export const TRANSACTIONS_URL = '/transfers';

const getAccountData = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const getTransactions = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const sendTransactions = json =>
  axiosInstancePost({ method: 'post', url: TRANSACTIONS_URL, data: json });

export { getAccountData, getTransactions, sendTransactions };
