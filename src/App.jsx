import React, { memo, useEffect } from 'react';
import { Outlet, useLocation, useRoutes } from 'react-router-dom';
import routes from './router';

import AppFooter from './components/app-footer';

const App = memo(() => {
  //路由跳转后，默认到页面顶部
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <div className="page">
        <Outlet />
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  );
});

export default App;
