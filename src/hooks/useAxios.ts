import { useCallback, useEffect, useState } from 'react';
// import axios, { AxiosRequestConfig } from 'axios';
import axiosInstance, { AxiosRequestConfig } from '@/lib/axiosInstance';

const useAxios = ({
  url,
  method = 'GET',
  headers,
  // params,
  // data: reqData,
  ...rest
}: AxiosRequestConfig) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(
    async (requestConfig?: AxiosRequestConfig) => {
      const { headers: reqHeaders, ...reqConfig } = requestConfig ?? {};
      setLoading(true);

      const response = await axiosInstance({
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
          ...reqHeaders,
        },
        // params,
        // data: reqData,
        ...rest,
        ...reqConfig,
      });

      setData(response.data);
      setLoading(false);
    },
    [headers, method, rest, url],
  );

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, fetchData, loading };
};

export default useAxios;
