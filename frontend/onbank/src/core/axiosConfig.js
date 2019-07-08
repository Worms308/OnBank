import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:8080/api/' });

const requestHandler = request => {
  console.log(`Request: ${request}`);
  return request;
};

const errorHandler = error => {
  console.log(`Error: ${error}`);
  return Promise.reject({ ...error });
};

const successHandler = response => {
  console.log(`Success: ${response}`);
  return response;
};

axiosInstance.interceptors.request.use(request => requestHandler(request));

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

export { axiosInstance, requestHandler, errorHandler, successHandler };
