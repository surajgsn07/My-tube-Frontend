import axios from 'axios';
import axiosRetry from 'axios-retry';
import Cookie from "universal-cookie";
import { getCookie } from './cookieFunc';

const axiosInstance = axios.create({
    baseURL:'https://my-tube-backend-raum.onrender.com/api/v1' ,
    // baseURL:'http://localhost:8000/api/v1', 
    withCredentials: true, 
});

axiosRetry(axiosInstance, {
  retries: 3, 
  retryDelay: (retryCount) => {
    return Math.pow(2, retryCount) * 1000; 
  },
  shouldResetTimeout: true, 
});

axiosInstance.interceptors.request.use(config => {
  const cookie = new Cookie();
  const token = getCookie("token");
  console.log("token in config : " , token)
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;