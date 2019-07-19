import operationType from 'mocks/operationTypeMock';

export const FETCH_OPERATION_TYPE_SUCCESS = 'FETCH_OPERATION_TYPE_SUCCESS';

const operationTypeReducer = (state = operationType, action) => {
  switch (action.type) {
    case FETCH_OPERATION_TYPE_SUCCESS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    default:
      return state;
  }
};

export default operationTypeReducer;
