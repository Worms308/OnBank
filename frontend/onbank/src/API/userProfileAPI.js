import { axiosInstanceGet } from 'core/axiosConfig';

export const USER_PROFILE_URL = '/getUserProfile';

const getUserProfileApi = userID =>
  axiosInstanceGet({ method: 'get', url: `${USER_PROFILE_URL}/${userID}` });

export { getUserProfileApi };
