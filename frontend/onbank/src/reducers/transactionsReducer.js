import { FETCH_SUCCESS } from 'actions/transactionsActions';
import transactionList from 'mocks/transactionsMock';

const transactionsReducer = (state = transactionList, action) => {
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

export default transactionsReducer;
