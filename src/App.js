import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import './assets/fontawesome/icon';

const Login = React.lazy(() => import('./features/Login'));
const Home = React.lazy(() => import('./components/Home'));
const Majors = React.lazy(() => import('./features/Major'));
const Verify = React.lazy(() => import('./features/VerifyRepairer'));
const Admin = React.lazy(() => import('./features/Admin'));
const Customer = React.lazy(() => import('./features/Customer'));
const Repairer = React.lazy(() => import('./features/Repairer'));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/majors' component={Majors} />
            <Route path='/verify' component={Verify} />
            <Route path='/admin' component={Admin} />
            <Route path='/customers' component={Customer} />
            <Route path='/repairers' component={Repairer} />

            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
