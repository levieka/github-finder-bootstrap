import React from 'react';
import NavbarApp from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='app'>
            <NavbarApp />
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact strict path='/' component={Home} />
                <Route exact strict path='/about' component={About} />
                <Route exact strict path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
