import { Redirect, Route } from "react-router";
import React from 'react';

const PrivateRoute = ({ component, ...rest }) => {
    const isAuthed = localStorage.getItem('token');
    return (
      <Route {...rest} exact
        render = {(props) => (
          isAuthed ? (
            <div>
              {React.createElement(component, props)}
            </div>
          ) :
          (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        )}
      />
    )
  }

export default PrivateRoute;