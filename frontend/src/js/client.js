import thunk from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { createStore, applyMiddleware, compose } from 'redux'
import appReducer from './reducers/index'
import App from './components/App'
import ArgumentsView from './components/ArgumentsView'
import ArgumentView from './components/ArgumentView'
import CreateArgument from './components/CreateArgument'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(appReducer);
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ArgumentsView}/>
        <Route path="/arguments" component={ArgumentsView}/>
        <Route path="/argument/:argumentId" component={ArgumentView}/>
        <Route path="/create-argument" component={CreateArgument}/>
        <Route path="/argument" component={ArgumentView}>
          <Route path="*" component={ArgumentView}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

