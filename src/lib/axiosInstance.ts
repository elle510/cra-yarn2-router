import axios from 'axios';
export type { AxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
  baseURL: '/',
});

// headers 에 token 설정
// axiosInstance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // config.headers.authorization = '';
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// Add a response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// 필요한 것 추가
// export const setToken = (token: string) => {
//   axiosInstance.defaults.headers.common['Authorization'] = token;
// };

export default axiosInstance;
