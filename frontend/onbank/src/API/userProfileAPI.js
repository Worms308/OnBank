import { axiosInstanceGet } from 'core/axiosConfig';
import store from 'store';

export const USER_PROFILE_URL = '/getProfileUser';

const getUserProfileApi = id =>
  axiosInstanceGet({ method: 'get', headers: { userID: store.getState().userProfile.userID }, url: `${USER_PROFILE_URL}/${id}` });

export { getUserProfileApi };
