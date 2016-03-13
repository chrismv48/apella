import { combineReducers } from 'redux';
import issueSortOptionReducer from './reducer_sort_issues'
import loadIssuesReducer from './reducer_load_issues'
import loadIssueReducer from './reducer_load_issue'

const rootReducer = combineReducers({
  issues: loadIssuesReducer,
  sortOption: issueSortOptionReducer,
  issue: loadIssueReducer
});

export default rootReducer;
