import { getUserProfileApi } from 'API/userProfileAPI';

export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';

export const getUserProfileAction = id => dispatch => {
  return getUserProfileApi(id).then(response =>
    dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: { data: response.data } }),
  );
};
