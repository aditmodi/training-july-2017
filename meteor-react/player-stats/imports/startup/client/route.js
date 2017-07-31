import React from 'react';
import {Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Form from '../../components/form.jsx';
import App from '../../components/app.jsx';
import List from '../../components/list.jsx'


const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/addplayer" component={Form}/>
      <Route path="/listplayer" component={List}/>
    </div>
  </Router>
);
