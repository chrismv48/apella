import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory, hashHistory } from "react-router"
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers'
import App from './components/App'
import IssuesView from './components/IssuesView'
import IssueView from './components/IssueView'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={IssuesView}/>
        <Route path="issues" component={IssuesView}/>
        <Route path="issue/:issueId" component={IssueView}/>
        <Route path="issue" component={IssueView}>
          <Route path="*" component={IssueView}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

