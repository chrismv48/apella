import * as premiseActions from '../actions/premise'

const premiseReducer = (state, action) => {
  switch (action.type) {
    case premiseActions.ADDED_PREMISE:
      return {
        ...state,
        addingPremise: false
      };
    case premiseActions.ADDING_PREMISE:
      return {
        ...state,
        addingPremise: true
      };
    case premiseActions.DELETED_PREMISE:
      return {
        ...state,
        deletingPremise: false
      };
    case premiseActions.DELETING_PREMISE:
      return {
        ...state,
        deletingPremise: true
      };
  }
};

export default premiseReducer;
