import * as argumentActions from '../actions/argument'
import * as premiseActions from '../actions/premise'
import * as premiseNodeActions from '../actions/premiseNode'

import premiseReducer from './premiseReducer'
import argumentReducer from './argumentReducer'
import premiseNodeReducer from './premiseNodeReducer'

const initialState = {
  arguments_: [],
  selectedArgument: {},
  fetchingArguments: false,
  fetchingArgument: false,
  fetchingPremiseNodes: false,
  premiseNodes: [],
  addingPremise: false,
  deletingPremise: false,
  addingArgument: false
};

const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case argumentActions.FETCHING_ARGUMENTS:
    case argumentActions.RECEIVE_ARGUMENTS:
    case argumentActions.FETCHING_ARGUMENT:
    case argumentActions.ADDING_ARGUMENT:
    case argumentActions.ADDED_ARGUMENT:
    case argumentActions.RECEIVE_ARGUMENT:
      return argumentReducer(state, action);
    case premiseNodeActions.FETCHING_PREMISE_NODES:
    case premiseNodeActions.RECEIVE_PREMISE_NODES:
      return premiseNodeReducer(state, action);
    case premiseActions.ADDING_PREMISE:
    case premiseActions.ADDED_PREMISE:
    case premiseActions.DELETING_PREMISE:
    case premiseActions.DELETED_PREMISE:
      return premiseReducer(state, action);
    default:
      return state
  }
};
export default appReducer;
