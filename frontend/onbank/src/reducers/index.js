const initialState = {
  value: 0,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_VALUE':
      return {
        ...state,
        value: state.value + action.payload.value,
      };
    default:
      return state;
  }
};

export default rootReducer;
