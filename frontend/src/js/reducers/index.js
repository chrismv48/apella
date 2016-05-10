import * as actions from '../actions/action_constants'

const initialState = {
  arguments_: [],
  selectedArgument: {},
  fetchingArguments: false,
  fetchingArgument: false,
  fetchingPremiseNodes: false,
  premiseNodes: [],
  addingPremise: false,
  deletingPremise: false
};

const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.FETCHING_PROPOSALS:
      return {
        ...state,
        fetchingArguments: true
      };
    case actions.RECEIVE_PROPOSALS:
      return {
        ...state,
        arguments_: action.arguments_,
        fetchingArguments: false
      };
    case actions.FETCHING_PROPOSAL:
      return {
        ...state,
        fetchingArgument: true
      };
    case actions.RECEIVE_PROPOSAL:
      return {
        ...state,
        selectedArgument: action.selectedArgument,
        fetchingArgument: false
      };
    case actions.FETCHING_PREMISE_NODES:
      return {
        ...state,
        fetchingPremiseNodes: true
      };
    case actions.RECEIVE_PREMISE_NODES:
      return {
        ...state,
        premiseNodes: action.premiseNodes,
        fetchingPremiseNodes: false
      };
    case actions.ADDING_PREMISE:
      return {
        ...state,
        addingPremise: true
      };
    case actions.ADDED_PREMISE:
      return {
        ...state,
        addingPremise: false
      };
    case actions.DELETING_PREMISE:
      return {
        ...state,
        deletingPremise: true
      };
    case actions.DELETED_PREMISE:
      return {
        ...state,
        deletingPremise: false
      };
    default:
      return state
  }
};
export default appReducer;
