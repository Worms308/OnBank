import axios from 'axios';
import { toast } from 'react-toastify';

const baseURL = 'http://192.168.1.150:8080/api/';

const axiosInstanceGet = axios.create({ baseURL });
const axiosInstancePost = axios.create({ baseURL });

const requestHandler = request => {
  return request;
};

const errorHandler = error => {
  if (!error.response) {
    toast.error('Sprawdź połączenie z internetem');
  } else if (error.response) {
    toast.error(
      `${error.response.data.code || 'Kod błędu'} - ${error.response.data.description ||
        'Komunikat błędu'}`,
    );
  }
  return Promise.reject(error);
};

axiosInstanceGet.interceptors.request.use(request => requestHandler(request));

axiosInstanceGet.interceptors.response.use(response => response, error => errorHandler(error));

axiosInstancePost.interceptors.request.use(request => requestHandler(request));

axiosInstancePost.interceptors.response.use(response => response, error => errorHandler(error));

export { axiosInstanceGet, axiosInstancePost };
