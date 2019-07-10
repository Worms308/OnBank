import { FETCH_SUCCESS } from 'actions/transactionsActions';
import operationType from 'mocks/operationTypeMock';

const operationTypeReducer = (state = operationType, action) => {
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

export default operationTypeReducer;
