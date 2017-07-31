import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { renderRoutes } from '../imports/startup/client/route.js'
// import createBrowserHistory from 'history/createBrowserHistory';

// const browserHistory = createBrowserHistory();

export default class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
         <Link to="/addplayer" title="Add Player">Add Player</Link><br/>
         <Link to="/listplayer" title="List Player">List Player</Link>
      </div>
    )
  }
}
