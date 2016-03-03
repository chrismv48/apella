import { combineReducers } from 'redux';
import issueSortOptionReducer from './reducer_sort_issues'
import loadIssuesReducer from './reducer_load_issues'

const rootReducer = combineReducers({
  issues: loadIssuesReducer,
  sortOption: issueSortOptionReducer
});

export default rootReducer;
