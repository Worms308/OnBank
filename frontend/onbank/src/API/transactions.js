import { axiosInstance } from 'core/axiosConfig';

export const TRANSACTIONS_URL = '/transfers';

const getTransactions = () => axiosInstance({ method: 'get', url: TRANSACTIONS_URL });

export { getTransactions };
