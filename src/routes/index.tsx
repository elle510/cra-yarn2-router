import React from 'react';
import loadable /* , { LoadableComponent } */ from '@loadable/component';

const Loading = <div>Loading...</div>;

// /* webpackChunkName: "Home" */
const Home = loadable(() => import('../pages/home'), {
  fallback: Loading,
});

const About = loadable(() => import('../pages/about'), {
  fallback: Loading,
});

const Article = loadable(() => import('../pages/article'), {
  fallback: Loading,
});

export type RoutesType = {
  path: string;
  component: any; // LoadableComponent<unknown & { routes?: RoutesType[] }>;
  exact?: boolean;
  routes?: RoutesType[];
};

const routes = (): RoutesType[] => [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/article',
    component: Article,
  },
];

export default routes;
