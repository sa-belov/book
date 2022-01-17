import React from 'react';
import appRoutes from '../app.router';
import { NavLink } from 'react-router-dom';
import styles from './TopMenu.module.sass';

const TopMenu = () => {
  const renderLinks = () => {
    return appRoutes.map((route) => (
      <NavLink key={route.id} to={route.path} className={styles.link} activeClassName={styles.activeLink} exact={true}>
        {route.name}
      </NavLink>
    ));
  };

  return <div className={styles.topMenu}>{renderLinks()}</div>;
};

export default TopMenu;
