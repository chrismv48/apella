import React from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router";
import rootReducer from '../reducers/index'
import AppNavBar from './AppNavbar'
import IssuesView from './IssuesView'

const App = ({children}) => (
  <div className="container">
    <AppNavBar />
    {children}
  </div>
);

export default App;
