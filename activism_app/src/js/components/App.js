import React from 'react'
import AppNavBar from './AppNavbar'

const App = ({children}) => (
  <div className="container">
    <AppNavBar />
    {children}
  </div>
);

export default App;
