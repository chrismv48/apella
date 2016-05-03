import thunk from 'redux-thunk'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { createStore, applyMiddleware, compose } from 'redux'
import appReducer from './reducers/index'
import App from './components/App'
import ProposalsView from './components/ProposalsView'
import ProposalView from './components/ProposalView'
import CreateView from './containers/CreateView'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = finalCreateStore(appReducer);
render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ProposalsView}/>
        <Route path="/proposals" component={ProposalsView}/>
        <Route path="/proposal/:proposalId" component={ProposalView}/>
        <Route path="/create" component={CreateView}/>
        <Route path="/proposal" component={ProposalView}>
          <Route path="*" component={ProposalView}/>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

