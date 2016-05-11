import * as argumentActions from '../actions/argument'


const argumentReducer = (state, action) => {
  switch (action.type) {
    case argumentActions.ADDED_ARGUMENT:
      return {
        ...state,
        addingArgument: false
      };
    case argumentActions.ADDING_ARGUMENT:
      return {
        ...state,
        addingPremise: true
      };
    case argumentActions.FETCHING_ARGUMENT:
    case argumentActions.FETCHING_ARGUMENTS:
      return {
        ...state,
        fetchingArgument: true
      };
    case argumentActions.RECEIVE_ARGUMENT:
      return {
        ...state,
        selectedArgument: action.selectedArgument
      };
    case argumentActions.RECEIVE_ARGUMENTS:
      return {
        ...state,
        arguments_: action.arguments_
      };
  }
};

export default argumentReducer;
