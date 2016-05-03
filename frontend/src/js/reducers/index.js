import * as actions from '../actions/action_constants'

const initialState = {
  proposals: [],
  selectedProposal: {},
  fetchingProposals: false,
  fetchingProposal: false,
  fetchingPremiseNodes: false,
  premiseNodes: [],
  addingPremise: false
};

const appReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case actions.FETCHING_PROPOSALS:
      return {
        ...state,
        fetchingProposals: true
      };
    case actions.RECEIVE_PROPOSALS:
      return {
        ...state,
        proposals: action.proposals,
        fetchingProposals: false
      };
    case actions.FETCHING_PROPOSAL:
      return {
        ...state,
        fetchingProposal: true
      };
    case actions.RECEIVE_PROPOSAL:
      return {
        ...state,
        selectedProposal: action.selectedProposal,
        fetchingProposal: false
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
    default:
      return state
  }
};
export default appReducer;
