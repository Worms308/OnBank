import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8080/api/' });

const requestHandler = request => {
  toast.info('request');
  return request;
};

const errorHandler = error => {
  toast.error('fail');
  return Promise.reject({ ...error });
};

const successHandler = response => {
  toast.success('ok');
  return response;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => toast.error('fail'),
  //error => errorHandler(error),
);

export { axiosInstance, requestHandler, errorHandler, successHandler };
