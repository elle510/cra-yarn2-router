import React, { useCallback } from 'react';

import { useAppDispatch } from '@/context/AppContext';

const Article: React.FC = () => {
  const setConfig = useAppDispatch();

  const handleClick = useCallback(() => {
    setConfig({ userId: 'testUser1' });
  }, [setConfig]);

  return (
    <div>
      Article
      <button type="button" onClick={handleClick}>
        setConfig
      </button>
    </div>
  );
};

export default Article;
