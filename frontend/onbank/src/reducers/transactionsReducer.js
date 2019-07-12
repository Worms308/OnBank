import {
  FETCH_SUCCESS,
  NEW_TRANSFER_REQUEST,
  NEW_TRANSFER_SUCCESS,
  NEW_TRANSFER_FAILURE,
} from 'actions/transactionsActions';
import transactionList from 'mocks/transactionsMock';

const transactionsReducer = (state = transactionList, action) => {
  switch (action.type) {
    case NEW_TRANSFER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case NEW_TRANSFER_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case NEW_TRANSFER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
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
