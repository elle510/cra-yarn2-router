import React from 'react';

type ErrorPageProps = {
  errorType: '404' | '500';
};

const ErrorPage: React.FC<ErrorPageProps> = ({ errorType }) => {
  return <div>{errorType}</div>;
};

export default ErrorPage;
