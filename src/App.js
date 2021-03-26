import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

const Login = React.lazy(() => import('./features/Login'));
const Home = React.lazy(() => import('./components/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Home Page</Link></li>
          <li><Link to='/login'>Login Page</Link></li>
        </ul>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
