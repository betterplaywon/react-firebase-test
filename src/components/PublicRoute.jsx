import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return <Route {...rest} render={(props) => (authenticated === false ? <Component {...props} /> : <Navigate to='/chat' />)} />;
}

export default PublicRoute;
