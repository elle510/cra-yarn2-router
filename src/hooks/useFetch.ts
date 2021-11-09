import { useCallback, useEffect, useState } from 'react';

type FetchOptionType = {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: any;
};

const useFetch = ({ url, method = 'GET', params }: FetchOptionType) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
    //   method: 'get',
    //   mode: 'no-cors',
    //   body: JSON.stringify({ id: 123, code: 213 }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    // console.log('response =================', response.status);
    const json = await response.json();
    // console.log('json =================', json);
    setData(json);
    setLoading(false);
  }, [method, params, url]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, fetchData };
};

export default useFetch;
