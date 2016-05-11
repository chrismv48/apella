import * as premiseNodeActions from '../actions/premiseNode'

const premiseNodeReducer = (state, action) => {
  switch (action.type) {
    case premiseNodeActions.FETCHING_PREMISE_NODES:
      return {
        ...state,
        fetchingPremiseNodes: true
      };
    case premiseNodeActions.RECEIVE_PREMISE_NODES:
      return {
        ...state,
        fetchingPremiseNodes: false,
        premiseNodes: action.premiseNodes
      };
  }
};

export default premiseNodeReducer;
