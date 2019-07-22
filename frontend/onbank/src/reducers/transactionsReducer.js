import {
  FETCH_TRANSACTION_LIST_SUCCESS,
  FETCH_DETAILS_TRANSACTION_SUCCESS,
  FETCH_LOCKED_TRANSACTION_SUCCESS,
  NEW_TRANSFER_REQUEST,
  NEW_TRANSFER_SUCCESS,
  NEW_TRANSFER_FAILURE,
  SET_IS_SUCCESS,
} from 'actions/transactionsActions';
import transactionList from 'mocks/transactionsMock';

const transactionsReducer = (state = transactionList, action) => {
  switch (action.type) {
    case FETCH_TRANSACTION_LIST_SUCCESS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    case FETCH_DETAILS_TRANSACTION_SUCCESS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    case FETCH_LOCKED_TRANSACTION_SUCCESS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    case NEW_TRANSFER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case NEW_TRANSFER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
      };
    case NEW_TRANSFER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };
    case SET_IS_SUCCESS:
      return {
        ...state,
        isSuccess: action.payload.status,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
