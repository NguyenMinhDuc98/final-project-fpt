import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import './assets/fontawesome/icon';
import PrivateRoute from './privateRoute';

const Login = React.lazy(() => import('./features/Login'));
const Home = React.lazy(() => import('./components/Home/routes'));
const Majors = React.lazy(() => import('./features/Major'));
const Verify = React.lazy(() => import('./features/VerifyRepairer'));
const Admin = React.lazy(() => import('./features/Admin'));
const Customer = React.lazy(() => import('./features/Customer'));
const Repairer = React.lazy(() => import('./features/Repairer'));
const Request = React.lazy(() => import('./features/Request'));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />

          <PrivateRoute path='/' exact component={Home} />
          <PrivateRoute path='/majors' component={Majors} />
          <PrivateRoute path='/verify' component={Verify} />
          <PrivateRoute path='/admin' component={Admin} />
          <PrivateRoute path='/customers' component={Customer} />
          <PrivateRoute path='/repairers' component={Repairer} />
          <PrivateRoute path='/requests' component={Request} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
