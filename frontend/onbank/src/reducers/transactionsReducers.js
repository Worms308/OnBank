import { FETCH_SUCCESS } from 'actions/transactionsActions';

const data = {
  data: [
    {
      id: 1,
      date: '2019-01-01',
      name: 'JAN',
      surname: 'ABACKI',
      accountNumber: 'PL00000000000000000000000000',
      description: 'MAŁE PIENIADZE DLA STUDENTA',
      typeOfOperation: 'PRZELEW NA KONTO',
      ammount: 32323.21,
      accountBallance: 500,
    },
    {
      id: 2,
      date: '2019-03-01',
      name: 'JAN',
      surname: 'ABACKI',
      accountNumber: 'PL00000000000000000000000000',
      description: 'MAŁE PIENIADZE DLA STUDENTA',
      typeOfOperation: 'PRZELEW NA KONTO',
      ammount: 32323.21,
      accountBallance: 500,
    },
  ],
};

const transactionsReducers = (state = data, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    default:
      return state;
  }
};

export default transactionsReducers;
