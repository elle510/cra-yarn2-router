import React, { useCallback, useMemo, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type AppState = {
  userId?: string;
};
type AppDispatch = React.Dispatch<any>;

const AppStateContext = React.createContext<AppState>({});
const AppDispatchContext = React.createContext<AppDispatch>(() => {});

const AppContextProvider = ({ children }: Props) => {
  // const [config, setConfig] = useAppConfig(); // app config 정보를 다루는 것은 custom hooks 로 처리
  // 아래는 테스트 코드
  const [userId, setUserId] = useState('testUser');

  const config = useMemo(() => ({ userId }), [userId]);
  const setConfig = useCallback(({ userId: _userId }) => {
    setUserId(_userId);
  }, []);

  return (
    <AppStateContext.Provider value={config}>
      <AppDispatchContext.Provider value={setConfig}>{children}</AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const state = React.useContext(AppStateContext);
  return state;
};

export const useAppDispatch = () => {
  const dispatch = React.useContext(AppDispatchContext);
  return dispatch;
};

export default AppContextProvider;
