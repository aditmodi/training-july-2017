import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
// import { BrowserRouter , Route, Link} from 'react-router-dom';
// import App from '../imports/components/app.jsx';
// import Form from '../components/form.jsx';
// import './main.html';
// import createBrowserHistory from 'history/createBrowserHistory';
import { renderRoutes } from '../imports/startup/client/route.js';

// const browserHistory = createBrowserHistory();

Meteor.startup(() => {
 render(
   renderRoutes(), document.getElementById('root'));
});
