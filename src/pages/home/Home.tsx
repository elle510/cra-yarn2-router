import React from 'react';
import useFetch from '@/hooks/useFetch';

const Home: React.FC = () => {
  const { data, loading } = useFetch({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    method: 'GET',
    // params: { id: 123, code: 213 },
  });

  console.log('loading', loading);

  return (
    <div>
      Home - 취약점 현황(20,5000)
      <br />
      {JSON.stringify(data)}
    </div>
  );
};

export default Home;
