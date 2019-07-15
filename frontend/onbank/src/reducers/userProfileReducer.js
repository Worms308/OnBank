import { FETCH_USER_PROFILE_SUCCESS } from 'actions/userProfileActions';
import userProfileMock from 'mocks/userProfileMock';

const userProfileReducer = (state = userProfileMock, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        [action.payload.name]: action.payload.data,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
