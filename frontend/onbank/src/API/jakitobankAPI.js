import { axiosInstanceJTB } from 'core/axiosConfig';

const getIBANDataApi = number => {
  return axiosInstanceJTB({
    method: 'get',
    params: { numer: number },
  });
};

export { getIBANDataApi };
