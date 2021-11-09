import React, { useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import ErrorPage from '@/components/common/ErrorPage';
import Layout from '@/components/common/Layout';

import routes, { RoutesType } from '.';

const routesResult = routes();

const MainRoute: React.FC = () => {
  const renderRoute = useCallback(() => {
    return routesResult.map((route: RoutesType) => (
      <Route
        key={uuidv4()}
        path={route.path}
        exact={typeof route.exact === 'boolean' ? route.exact : true}
        render={(props) => (
          // sub routes 가 있다면 컴포넌트에 전달하고 컴포넌트 안에서 routing 처리 한다.
          <route.component {...props} routes={route.routes} />
        )}
      />
    ));
  }, []);

  return (
    <Layout>
      <Switch>
        {renderRoute()}
        <Route path="*">
          <ErrorPage errorType="404" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default MainRoute;
