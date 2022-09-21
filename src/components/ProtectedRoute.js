import React from 'react';
import { Route, Redirect } from "react-router-dom";


const ProtectedRoute = ({ componet: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-up" />
      }
    </Route>
  );
};

export default ProtectedRoute;