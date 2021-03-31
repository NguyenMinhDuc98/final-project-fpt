import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import './assets/fontawesome/icon';

const Login = React.lazy(() => import('./features/Login'));
const Home = React.lazy(() => import('./components/Home'));
const Majors = React.lazy(() => import('./features/Major'));
const Verify = React.lazy(() => import('./features/VerifyRepairer'));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/majors' component={Majors} />
          <Route path='/verify' component={Verify} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
