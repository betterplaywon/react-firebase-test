import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Routes>
      <Route {...rest} render={(props) => (authenticated === true ? <Component {...props} /> : <Navigate to={{ pathname: '/signin', state: { from: props.location } }} />)} />
    </Routes>
  );
}

export default PrivateRoute;
