declare module '@loadable/component';
declare module '@/*';

declare module '@/lib/axiosInstance' {
  export type AxiosRequestConfig = any;

  const axiosInstance: any;
  export default axiosInstance;
}
