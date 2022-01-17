import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import { Route, Switch } from 'react-router-dom';
import appRoutes from './app.router';
import styles from './App.module.sass';

const App = () => {
  const renderRoutes = () => {
    return appRoutes.map((route) => (
      <Route key={route.id} path={route.path} component={route.component} exact={true} />
    ));
  };

  return (
    <div className={styles.content}>
      <TopMenu />
      <Switch>{renderRoutes()}</Switch>
    </div>
  );
};

export default App;
