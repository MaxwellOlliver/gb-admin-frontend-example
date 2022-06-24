import axios from 'axios';

export const api = (() => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.REACT_API_URL,
  });

  axios.interceptors.response.use((config) => {
    // interceptor response code
  });

  axios.interceptors.request.use((config) => {
    // interceptor request code
  });

  return axiosInstance;
})();
