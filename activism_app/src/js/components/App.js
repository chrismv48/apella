import React from 'react'
import rootReducer from '../reducers/index'
import AppNavBar from './AppNavbar'
import IssuesView from './IssuesView'

const App = () => (
  <div className="container">
    <AppNavBar />
    <IssuesView />
  </div>
);

export default App;
