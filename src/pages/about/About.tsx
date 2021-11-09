import React, { useCallback } from 'react';

import { useAppState } from '@/context/AppContext';
import useAxios from '@/hooks/useAxios';

const About: React.FC = () => {
  const { userId } = useAppState();
  console.log('userId', userId);

  // https://makeup-api.herokuapp.com/
  const { data, fetchData, loading } = useAxios({
    url: 'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline',
    method: 'GET',
    // data: { brand: '209001', product_type: 'lipstick' },
  });

  const onRefresh = useCallback(() => {
    fetchData();
    // fetchData({
    //   url: 'https://jsonplaceholder.typicode.com/todos/1',
    //   method: 'GET',
    //   params: { id: 123, code: 213 },
    // });
  }, [fetchData]);

  console.log('loading', loading);

  return (
    <div>
      About - 점검 시작(20,9001)
      <button type="button" onClick={onRefresh}>
        Refresh
      </button>
      <br />
      {!loading ? JSON.stringify(data) : 'Loading...'}
    </div>
  );
};

export default About;
