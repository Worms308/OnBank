import { axiosInstanceGet } from 'core/axiosConfig';

export const USER_PROFILE_URL = '/getProfileUser';

const getUserProfileApi = id =>
  axiosInstanceGet({ method: 'get', url: `${USER_PROFILE_URL}/${id}` });

export { getUserProfileApi };
