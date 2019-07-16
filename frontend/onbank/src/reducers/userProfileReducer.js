import { FETCH_USER_PROFILE_SUCCESS } from 'actions/userProfileActions';
import userProfileMock from 'mocks/userProfileMock';

const userProfileReducer = (state = userProfileMock, action) => {
  switch (action.type) {
    case FETCH_USER_PROFILE_SUCCESS:
      return {
        id: action.payload.data.id,
        name: action.payload.data.name,
        surname: action.payload.data.surname,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
