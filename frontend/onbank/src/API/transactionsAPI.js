import { axiosInstanceGet, axiosInstancePost } from 'core/axiosConfig';

export const TRANSACTIONS_URL = '/transfers';

const data = {
  date: [2012, 9, 17, 18, 47, 52, 690000000],
  name: 'JAN',
  surname: 'ABACKI',
  accountNumber: 'PL27114020040000300201355387',
  description: 'MALE PIENIADZE DLA STUDENTA',
  typeOfOperation: 1,
  ammount: 32323.21,
};

const getAccountData = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const getTransactions = () => axiosInstanceGet({ method: 'get', url: TRANSACTIONS_URL });
const sendTransactions = () => axiosInstancePost({ method: 'post', url: TRANSACTIONS_URL, data });

export { getAccountData, getTransactions, sendTransactions };
