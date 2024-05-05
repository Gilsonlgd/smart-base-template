import axios from 'axios';
import { getToken } from './auth';
import state from './state';

const isProd = process.env.NODE_ENV === 'production';

const apiUrl = isProd ? 'https://your.domain.com.br' : 'http://127.0.0.1:3333';

const api = axios.create({
  baseURL: apiUrl,
});

api.interceptors.request.use(
  async config => {
    const token = getToken();
    const newConfig = { ...config };
    if (token) {
      if (state.role && state.prefix) {
        if (config.method !== 'get') {
          return Promise.reject(
            new Error('You are not allowed to do this action'),
          );
        }
        newConfig.url = `${state.prefix}${config.url}`;
      }
      newConfig.headers.Authorization = `Bearer ${token}`;
    }
    return newConfig;
  },
  error => Promise.reject(error),
);

export default api;
