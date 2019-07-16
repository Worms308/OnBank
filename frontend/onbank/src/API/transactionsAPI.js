import { axiosInstanceGet, axiosInstancePost } from 'core/axiosConfig';

export const TRANSACTIONS_URL = '/transfers';

const getAccountDataApi = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const getTransactionsApi = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const sendTransactionsApi = json =>
  axiosInstancePost({ method: 'post', url: TRANSACTIONS_URL, data: json });

export { getAccountDataApi, getTransactionsApi, sendTransactionsApi };
